import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api, normalizeText } from '../api'
import { loadGeoSampaEcopoints } from '../geosampa'
import EcopointCard from '../components/EcopointCard'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FilterBar from '../components/FilterBar'
import LoadingState from '../components/LoadingState'

export default function ResultsPage() {
  const [params] = useSearchParams()
  const [category, setCategory] = useState(params.get('categoria') || '')
  const [districtFilter, setDistrictFilter] = useState('')
  const [points, setPoints] = useState([])
  const [guides, setGuides] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCategory(params.get('categoria') || '')
    setDistrictFilter(params.get('bairro') || '')
  }, [params])

  useEffect(() => {
    setLoading(true)
    Promise.all([api('/ecopoints'), api('/waste-guides'), loadGeoSampaEcopoints().catch(() => [])])
      .then(([data, guideData, geoSampaData]) => {
        const keyFor = point => normalizeText(point.name.replace(/^Ecoponto\s+/i, ''))
        const geoByName = new Map(geoSampaData.map(point => [keyFor(point), point]))
        const localWithCoordinates = data.map(point => ({ ...point, coordinates: geoByName.get(keyFor(point))?.coordinates }))
        setPoints(localWithCoordinates)
        setGuides(guideData)
      })
      .catch(requestError => setError(requestError.message))
      .finally(() => setLoading(false))
  }, [])

  const matchesCategory = point => {
    if (!category) return true
    if (category === 'gesso') return point.acceptsGypsum
    if (category === 'podas') return point.categories.some(item => normalizeText(item) === 'poda')
    return point.categories.some(item => normalizeText(item) === normalizeText(category))
  }
  const matchesDistrictFilter = point => !districtFilter || normalizeText(`${point.district} ${point.address} ${point.name}`).includes(normalizeText(districtFilter))
  const byCategory = points.filter(matchesCategory)
  const inDistrict = byCategory.filter(matchesDistrictFilter)
  const districtHasNoMatch = Boolean(districtFilter) && byCategory.length > 0 && inDistrict.length === 0
  const filtered = districtHasNoMatch ? byCategory : inDistrict
  const ordered = [...filtered].sort((first, second) => first.name.localeCompare(second.name, 'pt-BR'))
  const guide = guides.find(item => item.slug === category)
  const googleMapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${guide?.title || 'ecoponto'} em São Paulo, SP`)}`

  return <section className="container page-section">
    <Link className="back-link" to="/">← Página inicial</Link><h1>Resultados para o seu descarte</h1>
    <p className="intro">Use os filtros abaixo para ver os pontos que recebem o material desejado e, se quiser, limitar a lista a um bairro.</p>
    {guide && <aside className="guide-callout"><h2>Como descartar: {guide.title}</h2><p>{guide.destination}</p><p><strong>Atenção:</strong> {guide.warning}</p><a className="secondary-button" href={googleMapsSearch} target="_blank" rel="noreferrer">Pesquisar no Google Maps ↗</a></aside>}
    <FilterBar category={category} district={districtFilter} onCategory={setCategory} onDistrict={setDistrictFilter} />
    {loading && <LoadingState />}{error && <ErrorState message={error} />}
    {!loading && !error && <>
      {districtHasNoMatch && <p className="warning">Nenhum ecoponto encontrado no bairro “{districtFilter}”. Exibindo os ecopontos de outras regiões de São Paulo.</p>}
      <p className="result-count">{ordered.length} {ordered.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}.</p>
      {ordered.length ? <div className="point-grid">{ordered.map(point => <EcopointCard point={point} key={point.id} />)}</div> : <EmptyState>{category ? 'Não encontramos ecopontos cadastrados para este tipo de material nesta amostra. Tente outra categoria ou consulte o Google Maps.' : 'Nenhum ecoponto foi encontrado com os filtros atuais. Ajuste o bairro informado ou faça uma nova busca.'}</EmptyState>}
    </>}
  </section>
}
