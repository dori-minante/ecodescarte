import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import ErrorState from '../components/ErrorState'
import LoadingState from '../components/LoadingState'
import MapView from '../components/MapView'
export default function DetailPage() {
  const { id } = useParams(); const [point, setPoint] = useState(null); const [error, setError] = useState('')
  useEffect(() => {
    api(`/ecopoints/${id}`).then(setPoint).catch(requestError => {
      const cached = JSON.parse(window.sessionStorage.getItem('ecodescarte:geosampa-points') || '[]').find(item => item.id === id)
      if (cached) setPoint(cached); else setError(requestError.message)
    })
  }, [id])
  if (error) return <section className="container page-section"><ErrorState message={error} /><Link className="text-link" to="/resultados">Voltar aos resultados</Link></section>
  if (!point) return <section className="container page-section"><LoadingState /></section>
  const route = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${point.address}, ${point.district}, São Paulo, SP`)}`
  return <section className="container page-section detail"><Link className="back-link" to="/resultados">← Voltar aos resultados</Link><span className="eyebrow">Ponto de descarte</span><h1>{point.name}</h1><p className="address">{point.address}<br />{point.district}{point.cep ? ` · CEP ${point.cep}` : ''} · São Paulo/SP</p><a className="primary-button route-button" href={route} target="_blank" rel="noreferrer">Como chegar <span aria-hidden="true">↗</span></a><div className="detail-grid"><article><h2>Horário</h2><p>{point.schedule}</p><h2>Materiais aceitos</h2><ul>{point.acceptedMaterials.map(material => <li key={material}>{material}</li>)}{point.acceptsGypsum && <li>Gesso</li>}</ul><h2>Limites e restrições</h2><p>{point.restrictions}</p><h2>Observações</h2><p>{point.notes}</p><p className="source">Fonte: <a href={point.sourceUrl} target="_blank" rel="noreferrer">Fonte consultada</a><br />Data de verificação: {point.verifiedAt}</p></article><aside><h2>Mapa do local</h2><MapView point={point} /></aside></div></section>
}
