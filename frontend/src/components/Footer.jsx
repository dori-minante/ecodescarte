import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><section><div className="footer-brand"><span aria-hidden="true">♻</span><strong>EcoDescarte</strong></div><p>Informação simples para descartar melhor e cuidar de São Paulo.</p><p className="small">Projeto acadêmico de orientação ambiental.</p></section><section><h2>Encontre seu caminho</h2><Link to="/">Buscar ecopontos</Link><Link to="/orientacoes">Orientações de descarte</Link></section><section><h2>Fontes e cuidado</h2><a href="https://prefeitura.sp.gov.br/sp-mais-limpo" target="_blank" rel="noreferrer">Serviços da Prefeitura ↗</a><p className="small">Confirme condições especiais e horários antes de sair.</p></section></div><div className="container footer-bottom"><span>Feito para apoiar escolhas mais limpas todos os dias.</span><span>ODS 11 · ODS 12</span></div></footer>
}
