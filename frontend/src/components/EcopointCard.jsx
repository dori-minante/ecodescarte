import { Link } from 'react-router-dom'

export default function EcopointCard({ point }) {
  return <article className="point-card">
    <div><span className="eyebrow">Ecoponto municipal</span><h3>{point.name}</h3><p>{point.address}</p><p><strong>{point.district}</strong>{point.cep ? ` · CEP ${point.cep}` : ''}</p></div>
    <p className="schedule">◷ {point.schedule}</p>
    <div className="tags">{point.categories.map(category => <span key={category}>{category}</span>)}{point.acceptsGypsum && <span>gesso</span>}</div>
    <Link className="secondary-button" to={`/pontos/${point.id}`}>Ver detalhes <span aria-hidden="true">→</span></Link>
  </article>
}
