import Link from 'next/link'
import Image from 'next/image'
export default function Header({ toggleDark, dark }) {
  return (
    <header className="flex items-center justify-between py-3 px-4 md:px-0">
      <div className="flex items-center space-x-3">
        <button aria-label="Menu" className="p-2 rounded-md hover:bg-surface dark:hover:bg-darkElevated">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-text"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <Link href="/">
          <a className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-brand flex items-center justify-center">
              <span className="text-white font-semibold">YT</span>
            </div>
            <span className="font-semibold text-lg hidden sm:inline">MiniTube</span>
          </a>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <input aria-label="Search" placeholder="Search" className="w-[320px] h-11 pl-3 pr-10 rounded-md border border-gray-200 dark:border-transparent bg-white dark:bg-[#0F1113] text-sm focus:ring-0 focus:border-accent" />
          <button className="absolute right-1 top-1.5 p-2 rounded-md" aria-label="Search button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-surface dark:hover:bg-darkElevated">
          {dark ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v1M12 20v1M4.2 4.2l.7.7M18.1 18.1l.7.7M1 12h1M22 12h1M4.2 19.8l.7-.7M18.1 5.9l.7-.7M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>

        <button className="bg-brand px-3 py-2 rounded-md text-white font-medium hover:bg-brand-dark">Sign in</button>
      </div>
    </header>
  )
}
