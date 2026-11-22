import { normalizeText, apiUrl } from './api'

const wfsUrl = apiUrl('/api/geosampa/ecopoints')
const categories = ['entulho', 'móveis', 'poda', 'recicláveis']
const materials = ['Entulho de pequenas reformas', 'Móveis e objetos volumosos', 'Podas domiciliares', 'Papel, plástico, metal e vidro']

function field(properties, names) {
  const key = Object.keys(properties).find(property => names.includes(normalizeText(property)))
  return key ? String(properties[key] || '').trim() : ''
}

function slug(value) { return normalizeText(value).replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') }

export async function loadGeoSampaEcopoints() {
  const response = await fetch(wfsUrl)
  if (!response.ok) throw new Error('A camada de ecopontos do GeoSampa não está disponível agora.')
  const data = await response.json()
  return (data.features || []).map((feature, index) => {
    const properties = feature.properties || {}
    const name = field(properties, ['nome', 'nome_ecoponto', 'nm_ecoponto', 'nm_equipamento', 'equipamento'])
    const address = field(properties, ['endereco', 'endereço', 'logradouro', 'endereco_completo', 'nm_endereco'])
    const district = field(properties, ['bairro', 'distrito', 'subprefeitura', 'nm_distrito', 'nm_subprefeitura'])
    if (!name) return null
    return {
      id: `geosampa-${slug(name) || index}`,
      name: name.toLowerCase().startsWith('ecoponto') ? name : `Ecoponto ${name}`,
      address: address || 'Endereço disponível no mapa', district: district || 'São Paulo', cep: '',
      categories, acceptedMaterials: materials, schedule: 'Consulte o horário antes de ir.',
      restrictions: 'Consulte as condições do ponto antes do descarte.', notes: 'Registro cartográfico do GeoSampa; confirme no Google Maps antes de sair.',
      acceptsGypsum: false, sourceUrl: 'https://metadados.geosampa.prefeitura.sp.gov.br/geonetwork/intranet/api/records/ab117be9-ad7f-41a2-a3ee-cba5709d04b2', verifiedAt: 'Camada GeoSampa', coordinates: feature.geometry?.coordinates,
    }
  }).filter(Boolean)
}
