import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  CornerDownLeft,
  Home,
  Menu,
  X,
  Search,
  BarChart3,
  Globe,
  Users,
  Zap,
} from 'lucide-react'
import { overlaySearchResults } from '../data/header-search'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isSearchOpen) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    window.setTimeout(() => {
      searchInputRef.current?.focus()
    }, 0)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  const normalizedSearchValue = searchValue.trim().toLowerCase()
  const hasSearchQuery = normalizedSearchValue.length > 0
  const visibleOverlayResults = hasSearchQuery
    ? overlaySearchResults
        .filter((item) =>
          `${item.title} ${item.description}`
            .toLowerCase()
            .includes(normalizedSearchValue),
        )
        .slice(0, 5)
    : []

  return (
    <>
      {/* Top Navigation Bar */}
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
          isScrolled
            ? 'border-white/15 bg-neutral-950/70 backdrop-blur-md'
            : 'border-white/30 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Header */}
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <Link
              to="/"
              className="flex items-center gap-2 py-4"
            >
              <img
                src="https://www.norc.org/content/dam/non-dynamic-logos/norc-logo/NORCLogo_Full_Grey.svg"
                alt="NORC Logo"
                className="h-12 brightness-0 invert"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="text-white font-medium transition-colors hover:text-orange-500"
              >
                Home
              </Link>
              <a
                href="#research"
                className="text-white font-medium transition-colors hover:text-orange-500"
              >
                Research
              </a>
              <a
                href="#insights"
                className="text-white font-medium transition-colors hover:text-orange-500"
              >
                Insights
              </a>
              <a
                href="#about"
                className="text-white font-medium transition-colors hover:text-orange-500"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white font-medium transition-colors hover:text-orange-500"
              >
                Contact
              </a>
            </nav>

            {/* Right Section - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-white hover:text-orange-500 transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="hidden"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-white hover:text-orange-500 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-neutral-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-800">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Research Section */}
          <div className="flex flex-row justify-between items-center">
            <a
              href="#research"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors mb-2"
            >
              <BarChart3 size={20} />
              <span className="font-medium">Research Areas</span>
            </a>
            <button
              className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
              onClick={() =>
                setGroupedExpanded((prev) => ({
                  ...prev,
                  ResearchAreas: !prev.ResearchAreas,
                }))
              }
            >
              {groupedExpanded.ResearchAreas ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>

          {groupedExpanded.ResearchAreas && (
            <div className="flex flex-col ml-4 space-y-1">
              <a
                href="#economics"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-gray-300"
              >
                <span className="font-medium text-sm">Economics</span>
              </a>
              <a
                href="#education"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-gray-300"
              >
                <span className="font-medium text-sm">Education</span>
              </a>
              <a
                href="#health"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-gray-300"
              >
                <span className="font-medium text-sm">Health</span>
              </a>
              <a
                href="#global"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-gray-300"
              >
                <span className="font-medium text-sm">Global</span>
              </a>
            </div>
          )}

          <a
            href="#insights"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors mb-2"
          >
            <Zap size={20} />
            <span className="font-medium">Latest Insights</span>
          </a>

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors mb-2"
          >
            <Users size={20} />
            <span className="font-medium">About Us</span>
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <Globe size={20} />
            <span className="font-medium">Contact</span>
          </a>
        </nav>

        {/* Footer in Sidebar */}
        <div className="p-4 border-t border-neutral-800">
          <p className="text-xs text-gray-400">
            © 2026 NORC. All rights reserved.
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Close search overlay"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={() => setIsSearchOpen(false)}
          />

          <div className="relative mx-auto w-[92%] max-w-3xl pt-24 sm:pt-28">
            <div className="overflow-hidden rounded-2xl border border-neutral-700/70 bg-neutral-900/95 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3 px-4 py-4 sm:px-5">
                <Search className="h-6 w-6 text-orange-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent text-2xl text-neutral-100 outline-none placeholder:text-neutral-400"
                  aria-label="Search site"
                />
                {hasSearchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchValue('')}
                    className="text-sm font-semibold text-neutral-300 transition-colors hover:text-white"
                  >
                    Clear
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="rounded-lg border border-neutral-600 bg-neutral-800/80 px-3 py-2 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700"
                >
                  esc
                </button>
              </div>

              {hasSearchQuery ? (
                <div className="max-h-[360px] overflow-y-auto border-t border-neutral-700/70 bg-neutral-800/50 px-4 py-4 sm:px-5">
                  <Link
                    to="/askNORC"
                    search={{ q: searchValue.trim() }}
                    onClick={() => setIsSearchOpen(false)}
                    className="block rounded-xl border border-neutral-700 bg-neutral-900/80 px-4 py-3 text-left text-white transition-colors hover:border-orange-500"
                  >
                    <span className="font-semibold text-orange-300">Try AskNORC Assistant:</span>{' '}
                    <span className="underline decoration-orange-400 decoration-2 underline-offset-4">
                      &ldquo;{searchValue.trim()}&rdquo;
                    </span>
                  </Link>

                  <p className="mt-5 text-lg text-neutral-300">Results</p>

                  <div className="mt-3 space-y-3">
                    {visibleOverlayResults.length ? (
                      visibleOverlayResults.map((item) => (
                        <Link
                          key={item.title}
                          to="/askNORC"
                          search={{ q: item.title }}
                          onClick={() => setIsSearchOpen(false)}
                          className="block rounded-xl border border-neutral-700 bg-neutral-900/85 px-4 py-3 transition-colors hover:border-orange-500"
                        >
                          <p className="text-xl text-white">{item.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-neutral-300">{item.description}</p>
                        </Link>
                      ))
                    ) : (
                      <div className="rounded-xl border border-neutral-700 bg-neutral-900/85 px-4 py-3 text-neutral-300">
                        No matching results. Press Enter on AskNORC to continue your query.
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-between border-t border-neutral-700/70 px-4 py-4 sm:px-5">
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-md border border-neutral-600 bg-neutral-800 p-1 text-orange-300">
                      <CornerDownLeft className="h-4 w-4" />
                    </span>
                    Open
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="rounded-md border border-neutral-600 bg-neutral-800 p-1 text-orange-300">
                      <ArrowUp className="h-4 w-4" />
                    </span>
                    <span className="rounded-md border border-neutral-600 bg-neutral-800 p-1 text-orange-300">
                      <ArrowDown className="h-4 w-4" />
                    </span>
                    Navigate
                  </span>
                </div>

                <p className="text-sm text-neutral-300">
                  Powered by <span className="font-semibold text-orange-400">askNORC</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

