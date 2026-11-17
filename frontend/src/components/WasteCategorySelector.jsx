const icons = { entulho: '▦', moveis: '▱', reciclaveis: '♻', podas: '♣', eletronicos: '▣', 'pilhas-baterias': '▤', oleo: '◉' }
export default function WasteCategorySelector({ categories, selected, onSelect }) {
  return <div className="category-grid" role="list" aria-label="Categorias de resíduo">{categories.map(category => <button type="button" role="listitem" className={`category ${selected === category.slug ? 'selected' : ''}`} key={category.slug} onClick={() => onSelect(category.slug)} aria-pressed={selected === category.slug}><span aria-hidden="true">{icons[category.slug] || '♻'}</span><strong>{category.title}</strong><small>{category.description}</small></button>)}</div>
}
