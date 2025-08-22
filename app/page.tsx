'use client'

import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const Map = dynamic(() => import('@/components/map'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="w-screen h-screen relative">
      <Map />

      {/* Theme toggle (top-right) */}
      <div className="absolute top-4 right-4 z-[1100]">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/90 dark:bg-slate-800/90 shadow text-sm text-slate-900 dark:text-slate-100"
          aria-label="Toggle theme"
        >
          {mounted ? (resolvedTheme === 'dark' ? '🌙 Dark' : '☀️ Light') : '...'}
        </button>
      </div>
    </div>
  )
}
