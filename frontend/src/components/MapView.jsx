import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import LoadingState from './LoadingState'
import { geocodePoint } from '../location'

const saoPauloCenter = [-23.55052, -46.63331]

export default function MapView({ point, compact = false }) {
  const [position, setPosition] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    setPosition(null)
    setError('')
    if (Array.isArray(point.coordinates) && point.coordinates.length >= 2) {
      setPosition([point.coordinates[1], point.coordinates[0]])
      return () => { active = false }
    }
    geocodePoint(point)
      .then(coordinates => { if (active) setPosition(coordinates) })
      .catch(() => {
        if (active) {
          setPosition(saoPauloCenter)
          setError('Não foi possível obter a coordenada exata agora. O mapa mostra São Paulo; use “Como chegar” para abrir a rota exata pelo endereço.')
        }
      })
    return () => { active = false }
  }, [point])

  if (!position) return <LoadingState text="Preparando o mapa com dados do OpenStreetMap…" />
  return <>
    {error && <p className="map-message" role="status">{error}</p>}
    <div className={`map ${compact ? 'compact-map' : ''}`}>
      <MapContainer center={position} zoom={error ? 11 : 16} scrollWheelZoom={!compact}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {!error && <Marker position={position}><Popup><strong>{point.name}</strong><br />{point.address}</Popup></Marker>}
      </MapContainer>
    </div>
  </>
}
