import { Link } from 'react-router-dom'
import { FaHome, FaUtensils, FaInfoCircle, FaPhone, FaTags, FaImages, FaStar, FaCalendarAlt, FaConciergeBell, FaGlassCheers, FaChefHat, FaBlog, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/menu', label: 'Menu', icon: FaUtensils },
    { to: '/about', label: 'About', icon: FaInfoCircle },
    { to: '/contact', label: 'Contact', icon: FaPhone },
    { to: '/offers', label: 'Offers', icon: FaTags },
    { to: '/gallery', label: 'Gallery', icon: FaImages },
    { to: '/testimonials', label: 'Testimonials', icon: FaStar },
    { to: '/reservations', label: 'Reservations', icon: FaCalendarAlt },
    { to: '/bookings', label: 'Bookings', icon: FaConciergeBell },
    { to: '/events', label: 'Events', icon: FaGlassCheers },
    { to: '/chef-specials', label: 'Chef Specials', icon: FaChefHat },
    { to: '/blog', label: 'Blog', icon: FaBlog }
  ]

  return (
    <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-white hover:text-blue-100 transition duration-300 flex items-center space-x-2">
            <FaChefHat className="text-yellow-400" />
            <span>MetroSites</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-300 font-medium"
              >
                <item.icon className="text-sm" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-blue-100 transition duration-300 p-2"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800 bg-opacity-95 backdrop-blur-sm rounded-lg mt-2 py-4 px-2 shadow-xl">
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition duration-300 font-medium"
                >
                  <item.icon className="text-lg text-yellow-400" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
