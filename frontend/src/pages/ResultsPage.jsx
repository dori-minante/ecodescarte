import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, normalizeText } from '../api'
import { distanceInKm, geocode, geocodePointsOnePerSecond } from '../location'
import EcopointCard from '../components/EcopointCard'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FilterBar from '../components/FilterBar'
import LoadingState from '../components/LoadingState'

const specialCategories = ['eletronicos', 'pilhas-baterias', 'oleo']

export default function ResultsPage() {
  const [params] = useSearchParams()
  const [category, setCategory] = useState(params.get('categoria') || '')
  const [district, setDistrict] = useState(params.get('bairro') || '')
  const locationTerm = params.get('localizacao') || ''
  const [points, setPoints] = useState([])
  const [guides, setGuides] = useState([])
  const [distances, setDistances] = useState({})
  const [proximityStatus, setProximityStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([api('/ecopoints'), api('/waste-guides')])
      .then(([data, guideData]) => { setPoints(data); setGuides(guideData) })
      .catch(requestError => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!locationTerm || !points.length) return undefined
    let active = true
    setDistances({})
    setProximityStatus('Calculando a proximidade dos ecopontos…')
    async function orderByDistance() {
      try {
        const origin = await geocode(`${locationTerm}, São Paulo, SP, Brasil`)
        await geocodePointsOnePerSecond(points, (id, coordinates) => {
          if (active) setDistances(current => ({ ...current, [id]: distanceInKm(origin, coordinates) }))
        })
        if (active) setProximityStatus('Resultados ordenados por proximidade em linha reta.')
      } catch {
        if (active) setProximityStatus('Não foi possível calcular a proximidade agora; os resultados continuam disponíveis.')
      }
    }
    orderByDistance()
    return () => { active = false }
  }, [locationTerm, points])

  const matchesCategory = point => !category || point.categories.some(item => normalizeText(item) === normalizeText(category)) || (category === 'gesso' && point.acceptsGypsum)
  const matchesDistrict = point => !district || normalizeText(`${point.district} ${point.address} ${point.name}`).includes(normalizeText(district))
  const directMatches = points.filter(point => matchesCategory(point) && matchesDistrict(point))
  const usingCityFallback = Boolean(district && directMatches.length === 0)
  const filtered = usingCityFallback ? points.filter(matchesCategory) : directMatches
  const ordered = [...filtered].sort((first, second) => (distances[first.id] ?? Infinity) - (distances[second.id] ?? Infinity) || first.name.localeCompare(second.name, 'pt-BR'))
  const guide = guides.find(item => item.slug === category)

  return <section className="container page-section">
    <Link className="back-link" to="/resultados">← Nova busca</Link><h1>Resultados para o seu descarte</h1>
    <p className="intro">Use os filtros para encontrar os ecopontos cadastrados na amostra oficial.</p>
    {specialCategories.includes(category) && guide && <aside className="guide-callout"><h2>{guide.title}: procure logística reversa</h2><p>{guide.destination}</p><p><strong>Atenção:</strong> {guide.warning}</p><a className="secondary-button" href={guide.officialReferenceUrl} target="_blank" rel="noreferrer">Abrir localizador especializado ↗</a></aside>}
    <FilterBar category={specialCategories.includes(category) ? '' : category} district={district} onCategory={setCategory} onDistrict={setDistrict} />
    {loading && <LoadingState />}{error && <ErrorState message={error} />}
    {!loading && !error && <>
      {usingCityFallback && <aside className="guide-callout"><h2>Ainda não há um ponto da amostra em {district}</h2><p>Mostramos os ecopontos municipais cadastrados para São Paulo que recebem o material selecionado.</p></aside>}
      {proximityStatus && <p className="proximity-status" role="status">{proximityStatus}</p>}
      <p className="result-count">{ordered.length} {ordered.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}.</p>
      {ordered.length ? <div className="point-grid">{ordered.map(point => <EcopointCard point={point} distance={distances[point.id]} key={point.id} />)}</div> : <EmptyState>Não há ecopontos cadastrados para este tipo de material. Para eletrônicos, pilhas, baterias e óleo, use o localizador especializado indicado acima.</EmptyState>}
    </>}
  </section>
}
