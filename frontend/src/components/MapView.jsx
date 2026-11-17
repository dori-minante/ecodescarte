import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import LoadingState from './LoadingState'

function addressFor(point) { return `${point.address}, ${point.district}, São Paulo, SP, Brasil` }
export default function MapView({ point, compact = false }) {
  const [position, setPosition] = useState(null); const [error, setError] = useState('')
  useEffect(() => { let active = true; setPosition(null); setError(''); fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(addressFor(point))}`, { headers: { Accept: 'application/json' } }).then(response => response.ok ? response.json() : Promise.reject()).then(data => { if (!data[0]) throw new Error(); if (active) setPosition([Number(data[0].lat), Number(data[0].lon)]) }).catch(() => { if (active) setError('Não foi possível localizar este endereço no mapa agora. O endereço completo continua disponível acima.') }); return () => { active = false } }, [point])
  if (error) return <div className="map-message" role="status">{error}</div>
  if (!position) return <LoadingState text="Preparando o mapa com dados do OpenStreetMap…" />
  return <div className={`map ${compact ? 'compact-map' : ''}`}><MapContainer center={position} zoom={16} scrollWheelZoom={!compact}><TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /><Marker position={position}><Popup><strong>{point.name}</strong><br />{point.address}</Popup></Marker></MapContainer></div>
}
