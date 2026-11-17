import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return <header className="site-header"><div className="container header-content">
    <Link to="/" className="brand" aria-label="EcoDescarte, ir para início"><span aria-hidden="true">♻</span> EcoDescarte</Link>
    <nav aria-label="Navegação principal"><NavLink to="/orientacoes">Orientações</NavLink><a href="https://prefeitura.sp.gov.br/sp-mais-limpo" target="_blank" rel="noreferrer">Serviços da Prefeitura</a></nav>
  </div></header>
}
