import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return <header className="site-header"><div className="container header-content">
    <Link to="/" className="brand" aria-label="EcoDescarte, ir para início"><span className="brand-mark" aria-hidden="true">♻</span><span><strong>EcoDescarte</strong><small>descarte certo em São Paulo</small></span></Link>
    <nav aria-label="Navegação principal"><NavLink to="/orientacoes">Orientações</NavLink><a href="https://prefeitura.sp.gov.br/sp-mais-limpo" target="_blank" rel="noreferrer">Prefeitura ↗</a></nav>
  </div></header>
}
