import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../api'
import WasteCategorySelector from './WasteCategorySelector'
import LocationSearch from './LocationSearch'
import ErrorState from './ErrorState'

export default function SearchForm() {
  const navigate = useNavigate(); const [categories, setCategories] = useState([]); const [category, setCategory] = useState(''); const [location, setLocation] = useState(''); const [error, setError] = useState('')
  useEffect(() => { api('/categories').then(setCategories).catch(error => setError(error.message)) }, [])
  async function submit(event) {
    event.preventDefault(); setError(''); let district = location.trim();
    const cep = location.replace(/\D/g, '')
    if (cep && cep.length !== 8) { setError('O CEP deve ter 8 números. Você também pode digitar somente o nome do bairro.'); return }
    if (cep.length === 8) { try { const found = await api(`/location/cep/${cep}`); district = found.district || ''; if (!district) setError('O CEP foi encontrado, mas sem bairro. Veja os pontos da cidade ou digite seu bairro.'); } catch (error) { setError(`${error.message} Você pode digitar o bairro manualmente.`); return } }
    const params = new URLSearchParams(); if (category) params.set('categoria', category); if (district) params.set('bairro', district); navigate(`/resultados?${params}`)
  }
  return <form className="search-panel" onSubmit={submit} noValidate><section aria-labelledby="waste-question"><h2 id="waste-question">O que você precisa descartar?</h2><p>Escolha uma categoria ou deixe em branco para ver todos os ecopontos.</p><WasteCategorySelector categories={categories} selected={category} onSelect={setCategory} /></section><LocationSearch value={location} onChange={setLocation} />{error && <ErrorState message={error} />}<button className="primary-button" type="submit">Encontrar pontos de descarte <span aria-hidden="true">→</span></button></form>
}
