import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'font-semibold text-blue-600' : ''}`

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Case Management
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" end className={navLinkClass}>
              Cases
            </NavLink>
            <NavLink to="/animations" className={navLinkClass}>
              Animations
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLink
              to="/"
              end
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Cases
            </NavLink>
            <NavLink
              to="/animations"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Animations
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
