'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Map />
    </div>
  )
}
