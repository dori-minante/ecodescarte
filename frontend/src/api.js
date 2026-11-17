export async function api(path) {
  const response = await fetch(`/api${path}`)
  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.message || 'Não foi possível carregar os dados. Tente novamente.')
  }
  return response.json()
}

export function normalizeText(text = '') {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}
