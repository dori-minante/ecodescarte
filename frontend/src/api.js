const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/+$/, '')

export function apiUrl(path) {
  return `${API_BASE_URL}${path}`
}

export async function api(path) {
  const response = await fetch(apiUrl(`/api${path}`))
  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.message || 'Não foi possível carregar os dados. Tente novamente.')
  }
  return response.json()
}

export function normalizeText(text = '') {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}
