import { Link } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import './HomePage.css'
import heroImage from '../assets/ecoponto-hero.png'

export default function HomePage() {
  return <>
    <section className="hero home-hero" style={{ '--hero-image': `url(${heroImage})` }}><div className="container hero-content"><p className="kicker">São Paulo · serviço de utilidade pública</p><h1>Descarte certo começa com informação.</h1><p className="hero-text">Encontre orientações claras e ecopontos municipais para descartar resíduos sem complicação.</p><a className="hero-link" href="#buscar">Começar a busca ↓</a></div></section>
    <section className="container search-section" id="buscar"><SearchForm /></section>
    <section className="container eco-intro" aria-labelledby="what-is-ecopoint"><div><p className="eyebrow">Descarte responsável</p><h2 id="what-is-ecopoint">O que é um ecoponto?</h2><p>É um local gratuito preparado para receber pequenos volumes de materiais como entulho de reforma, móveis, podas e recicláveis. Cada tipo de resíduo deve ser colocado no destino certo.</p></div><div><h2>Por que levar até lá?</h2><p>Jogar lixo em ruas, terrenos, rios ou áreas verdes causa enchentes, contaminação e risco para pessoas e animais. Levar o material ao local correto ajuda a manter São Paulo mais limpa e a reaproveitar o que pode ser reciclado.</p></div><div><h2>Como o EcoDescarte ajuda</h2><p>O site reúne orientações simples, locais de descarte e rotas para que você encontre uma opção antes de descartar.</p></div></section>
    <section className="container how-it-works"><h2>É simples encontrar uma opção</h2><div className="steps"><div><span>1</span><h3>Escolha o resíduo</h3><p>Selecione uma categoria, como móvel, entulho ou reciclável.</p></div><div><span>2</span><h3>Informe sua região</h3><p>Digite seu CEP ou o nome do bairro onde você está.</p></div><div><span>3</span><h3>Veja como descartar</h3><p>Confira o endereço, horários, mapa e a rota até o local.</p></div></div><Link className="text-link" to="/orientacoes">Não sabe em qual categoria seu resíduo entra? Veja as orientações.</Link></section>
    <section className="container cata-bagulho" aria-labelledby="cata-bagulho-titulo">
      <div>
        <p className="eyebrow">Serviço gratuito da Prefeitura</p>
        <h2 id="cata-bagulho-titulo">Cata-Bagulho: coleta de móveis e objetos inservíveis</h2>
        <p>Móveis velhos, colchões, sofás e eletrodomésticos quebrados também podem ser recolhidos pela Operação Cata-Bagulho, serviço gratuito realizado em todas as subprefeituras. Os caminhões percorrem roteiros programados por bairro e recolhem até 1 m³ de materiais.</p>
      </div>
      <div>
        <h3>Como funciona</h3>
        <ul>
          <li>Consulte o dia da sua rua no site da subprefeitura ou pela Central 156.</li>
          <li>Coloque o material na calçada, em frente à sua residência, apenas no dia programado.</li>
          <li>Não deixe o material na rua na noite anterior.</li>
        </ul>
        <a className="secondary-button" href="https://coleta.prefeitura.sp.gov.br/" target="_blank" rel="noreferrer">Consultar a programação ↗</a>
      </div>
    </section>
  </>
}
