import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, normalizeText } from '../api'
import { loadGeoSampaEcopoints } from '../geosampa'
import { geocode, routeDistancesInKm } from '../location'
import EcopointCard from '../components/EcopointCard'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FilterBar from '../components/FilterBar'
import LoadingState from '../components/LoadingState'
import SearchForm from '../components/SearchForm'

const specialCategories = ['eletronicos', 'pilhas-baterias', 'oleo']

export default function ResultsPage() {
  const [params] = useSearchParams()
  const [category, setCategory] = useState(params.get('categoria') || '')
  const [district, setDistrict] = useState(params.get('bairro') || '')
  const locationTerm = params.get('localizacao') || district
  const [points, setPoints] = useState([])
  const [guides, setGuides] = useState([])
  const [routeDistances, setRouteDistances] = useState({})
  const [proximityStatus, setProximityStatus] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCategory(params.get('categoria') || '')
    setDistrict(params.get('bairro') || '')
  }, [params])

  useEffect(() => {
    setLoading(true)
    Promise.all([api('/ecopoints'), api('/waste-guides'), loadGeoSampaEcopoints().catch(() => [])])
      .then(([data, guideData, geoSampaData]) => {
        const keyFor = point => normalizeText(point.name.replace(/^Ecoponto\s+/i, ''))
        const geoByName = new Map(geoSampaData.map(point => [keyFor(point), point]))
        const localWithCoordinates = data.map(point => ({ ...point, coordinates: geoByName.get(keyFor(point))?.coordinates }))
        const knownNames = new Set(data.map(keyFor))
        const additional = geoSampaData.filter(point => !knownNames.has(keyFor(point)))
        window.sessionStorage.setItem('ecodescarte:geosampa-points', JSON.stringify(additional))
        setPoints([...localWithCoordinates, ...additional])
        setGuides(guideData)
      })
      .catch(requestError => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!locationTerm || !points.length) { setRouteDistances({}); setProximityStatus(''); return undefined }
    let active = true
    setProximityStatus('Calculando as rotas para ordenar os ecopontos mais próximos…')
    geocode(`${locationTerm}, São Paulo, SP, Brasil`)
      .then(origin => routeDistancesInKm(origin, points))
      .then(distances => { if (active) { setRouteDistances(distances); setProximityStatus('Ecopontos ordenados por distância de rota.') } })
      .catch(() => { if (active) setProximityStatus('Não foi possível calcular as rotas agora. A lista continua disponível em ordem alfabética.') })
    return () => { active = false }
  }, [locationTerm, points])

  const matchesCategory = point => !category || specialCategories.includes(category) || point.categories.some(item => normalizeText(item) === normalizeText(category)) || (category === 'gesso' && point.acceptsGypsum)
  const matchesDistrict = point => !district || normalizeText(`${point.district} ${point.address} ${point.name}`).includes(normalizeText(district))
  const directMatches = points.filter(point => matchesCategory(point) && matchesDistrict(point))
  const usingCityFallback = Boolean(district && directMatches.length === 0)
  const filtered = usingCityFallback ? points.filter(matchesCategory) : directMatches
  const ordered = [...filtered].sort((first, second) => (routeDistances[first.id] ?? Infinity) - (routeDistances[second.id] ?? Infinity) || first.name.localeCompare(second.name, 'pt-BR'))
  const guide = guides.find(item => item.slug === category)
  const googleMapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${guide?.title || 'ecoponto'} perto de ${locationTerm || 'São Paulo'}, SP`)}`

  return <section className="container page-section">
    <Link className="back-link" to="/">← Página inicial</Link><h1>Resultados para o seu descarte</h1>
    <p className="intro">Faça outra busca aqui ou use os filtros abaixo. Para encontrar pontos por rua e conferir a distância real da rota, abra o Google Maps.</p>
    <section aria-labelledby="new-search-title"><h2 id="new-search-title">Fazer nova busca</h2><SearchForm /></section>
    {specialCategories.includes(category) && guide && <aside className="guide-callout"><h2>{guide.title}: confira os pontos disponíveis</h2><p>{guide.destination}</p><p><strong>Atenção:</strong> {guide.warning}</p><a className="secondary-button" href={googleMapsSearch} target="_blank" rel="noreferrer">Pesquisar no Google Maps ↗</a></aside>}
    <FilterBar category={specialCategories.includes(category) ? '' : category} district={district} onCategory={setCategory} onDistrict={setDistrict} />
    {locationTerm && <a className="secondary-button" href={googleMapsSearch} target="_blank" rel="noreferrer">Ver ecopontos próximos no Google Maps ↗</a>}
    {loading && <LoadingState />}{error && <ErrorState message={error} />}
    {!loading && !error && <>
      {usingCityFallback && <aside className="guide-callout"><h2>Listando ecopontos mais próximos</h2><p>Não há ecoponto cadastrado em “{district}”. Abaixo estão os pontos disponíveis para o material selecionado, ordenados pela distância da rota quando ela puder ser calculada.</p></aside>}
      {district && !usingCityFallback && <p className="result-count">Pontos cadastrados na região pesquisada.</p>}
      {proximityStatus && <p className="proximity-status" role="status">{proximityStatus}</p>}
      <p className="result-count">{ordered.length} {ordered.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}.</p>
      {ordered.length ? <div className="point-grid">{ordered.map(point => <EcopointCard point={point} distance={routeDistances[point.id]} key={point.id} />)}</div> : <EmptyState>Não há ecopontos cadastrados para este tipo de material. Faça uma nova busca ou consulte o Google Maps.</EmptyState>}
    </>}
  </section>
}
