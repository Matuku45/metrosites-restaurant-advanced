import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          MetroSites Restaurant
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-800">Menu</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/offers" className="text-gray-600 hover:text-gray-800">Offers</Link>
          <Link to="/gallery" className="text-gray-600 hover:text-gray-800">Gallery</Link>
          <Link to="/testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</Link>
          <Link to="/reservations" className="text-gray-600 hover:text-gray-800">Reservations</Link>
          <Link to="/bookings" className="text-gray-600 hover:text-gray-800">Bookings</Link>
          <Link to="/events" className="text-gray-600 hover:text-gray-800">Events</Link>
          <Link to="/chef-specials" className="text-gray-600 hover:text-gray-800">Chef Specials</Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
        </nav>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
