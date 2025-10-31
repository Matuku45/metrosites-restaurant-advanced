import { Link } from 'react-router-dom'
import { FaHome, FaUtensils, FaInfoCircle, FaPhone, FaTags, FaImages, FaStar, FaCalendarAlt, FaConciergeBell, FaGlassCheers, FaUserTie, FaBlog, FaBars, FaTimes } from 'react-icons/fa'
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
    { to: '/chef-specials', label: 'Chef Specials', icon: FaUserTie },
    { to: '/blog', label: 'Blog', icon: FaBlog }
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition duration-300 flex items-center space-x-2">
            <FaUserTie className="text-blue-600" />
            <span>MetroSites</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300 font-medium"
              >
                <item.icon className="text-sm" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition duration-300 p-2"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col pt-20">
            <nav className="flex-1 px-4 py-8">
              <div className="grid grid-cols-1 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300 font-medium text-lg"
                  >
                    <item.icon className="text-xl text-blue-600" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </nav>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
              >
                Close Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
