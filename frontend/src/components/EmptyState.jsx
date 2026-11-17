import { Link } from 'react-router-dom'
export default function EmptyState({ children }) { return <div className="state empty"><h2>Nenhum ponto da amostra foi encontrado</h2><p>{children}</p><Link className="text-link" to="/orientacoes">Ver orientações de descarte</Link></div> }
