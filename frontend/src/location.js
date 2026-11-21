const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q='
const cachePrefix = 'ecodescarte:coordinates:'
const inFlight = new Map()
let requestQueue = Promise.resolve()
let lastRequestAt = 0

const sleep = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds))

function requestFromNominatim(query) {
  const task = requestQueue.then(async () => {
    const wait = Math.max(0, 1100 - (Date.now() - lastRequestAt))
    if (wait) await sleep(wait)
    lastRequestAt = Date.now()
    return fetch(`${NOMINATIM_URL}${encodeURIComponent(query)}`, { headers: { Accept: 'application/json' } })
  })
  requestQueue = task.catch(() => undefined)
  return task
}

function addressFor(point) {
  const street = point.address.replace(/,?\s*n[ºo]\s*\d+.*$/i, '')
  return `${street}, ${point.district}, Sao Paulo, SP, Brasil`
}

export async function geocode(query) {
  const key = query.toLowerCase()
  if (!inFlight.has(key)) {
    inFlight.set(key, requestFromNominatim(query)
      .then(response => response.ok ? response.json() : [])
      .then(data => {
        if (!data[0]) throw new Error('Localização não encontrada')
        return [Number(data[0].lat), Number(data[0].lon)]
      })
      .finally(() => inFlight.delete(key)))
  }
  return inFlight.get(key)
}

export async function geocodePoint(point) {
  const key = `${cachePrefix}${point.id}`
  const cached = window.localStorage.getItem(key)
  if (cached) return JSON.parse(cached)
  const coordinates = await geocode(addressFor(point))
  window.localStorage.setItem(key, JSON.stringify(coordinates))
  return coordinates
}

export function distanceInKm([fromLatitude, fromLongitude], [toLatitude, toLongitude]) {
  const radius = 6371
  const radians = degree => degree * Math.PI / 180
  const latitudeDistance = radians(toLatitude - fromLatitude)
  const longitudeDistance = radians(toLongitude - fromLongitude)
  const a = Math.sin(latitudeDistance / 2) ** 2 + Math.cos(radians(fromLatitude)) * Math.cos(radians(toLatitude)) * Math.sin(longitudeDistance / 2) ** 2
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

export async function geocodePointsOnePerSecond(points, onPoint) {
  for (const point of points) {
    try { onPoint(point.id, await geocodePoint(point)) } catch { /* The list stays usable when one address cannot be geocoded. */ }
  }
}
