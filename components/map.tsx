'use client'

import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'
import type { PropsWithChildren } from 'react'
import type { MapContainerProps } from 'react-leaflet'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false },
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
)

export type MapProps = MapContainerProps & PropsWithChildren

export default function Map({
  center = [-3.028137, 119.764063],
  className = 'w-full h-full',
  zoom = 5,
  children,
  ...mapProps
}: MapProps) {
  return (
    <MapContainer
      {...mapProps}
      maxZoom={24} // Maximum zoom level provided by the tile server
      center={center}
      zoom={zoom}
      className={className}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  )
}
