import '../styles/globals.css'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  // simple dark-mode toggle stored in localStorage
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('dark')
    if (stored === 'true') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])
  const toggleDark = () => {
    const next = !dark
    setDark(next)
    if (next) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('dark', next)
  }
  return (
    <div className="min-h-screen bg-white dark:bg-darkSurface text-text dark:text-darkPrimary transition-colors">
      <div className="max-w-[1100px] mx-auto">
        <Component {...pageProps} toggleDark={toggleDark} dark={dark} />
      </div>
    </div>
  )
}

export default MyApp
