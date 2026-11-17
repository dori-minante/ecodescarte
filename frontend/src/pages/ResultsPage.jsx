import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { api } from '../api'
import EcopointCard from '../components/EcopointCard'
import EmptyState from '../components/EmptyState'
import ErrorState from '../components/ErrorState'
import FilterBar from '../components/FilterBar'
import LoadingState from '../components/LoadingState'

const specialCategories = ['eletronicos', 'pilhas-baterias', 'oleo']
export default function ResultsPage() {
  const [params] = useSearchParams(); const initialCategory = params.get('categoria') || ''; const [category, setCategory] = useState(initialCategory); const [district, setDistrict] = useState(params.get('bairro') || ''); const [points, setPoints] = useState([]); const [guides, setGuides] = useState([]); const [error, setError] = useState(''); const [loading, setLoading] = useState(true)
  useEffect(() => { setLoading(true); Promise.all([api('/ecopoints'), api('/waste-guides')]).then(([data, guideData]) => { setPoints(data); setGuides(guideData) }).catch(error => setError(error.message)).finally(() => setLoading(false)) }, [])
  const filtered = useMemo(() => points.filter(point => (!category || point.categories.includes(category) || (category === 'gesso' && point.acceptsGypsum)) && (!district || `${point.district} ${point.address} ${point.name}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(district.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()))), [points, category, district])
  const guide = guides.find(item => item.slug === category)
  return <section className="container page-section"><Link className="back-link" to="/">← Nova busca</Link><h1>Resultados para o seu descarte</h1><p className="intro">Use os filtros para encontrar os ecopontos cadastrados na amostra oficial.</p>{specialCategories.includes(category) && guide && <aside className="guide-callout"><h2>{guide.title}: procure logística reversa</h2><p>{guide.destination}</p><p><strong>Atenção:</strong> {guide.warning}</p><a className="secondary-button" href={guide.officialReferenceUrl} target="_blank" rel="noreferrer">Abrir localizador especializado ↗</a></aside>}<FilterBar category={specialCategories.includes(category) ? '' : category} district={district} onCategory={setCategory} onDistrict={setDistrict} />{loading && <LoadingState />}{error && <ErrorState message={error} />}{!loading && !error && <><p className="result-count">{filtered.length} {filtered.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}.</p>{filtered.length ? <div className="point-grid">{filtered.map(point => <EcopointCard point={point} key={point.id} />)}</div> : <EmptyState>Experimente retirar o filtro de bairro ou faça uma nova busca. Para eletrônicos, pilhas, baterias e óleo, use o localizador especializado indicado acima.</EmptyState>}</>}</section>
}
