import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Home,
  Menu,
  X,
  Search,
  BarChart3,
  Globe,
  Users,
  Zap,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/30 bg-transparent">
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
    </>
  )
}

