import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">M</span>
              </div>
              <h3 className="text-2xl font-bold">MetroSites</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Experience fine dining with a modern twist in the heart of Cape Town.
              Join us for an unforgettable culinary journey that blends tradition with innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300">
                <FaFacebook className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition duration-300">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300">
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white hover:translate-x-1 transition duration-300 inline-block">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Long Street</p>
                  <p className="text-gray-300">Cape Town, 8001</p>
                  <p className="text-gray-300">South Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">+27 21 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <p className="text-gray-300">info@metrosites.co.za</p>
              </div>
              <div className="flex items-start space-x-3">
                <FaClock className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Thu: 11AM-10PM</p>
                  <p className="text-gray-300">Fri-Sat: 11AM-11PM</p>
                  <p className="text-gray-300">Sun: 12PM-9PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">
                Subscribe
              </button>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-yellow-400">Follow Us</h5>
              <p className="text-sm text-gray-400">@metrosites_ct</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 MetroSites Restaurant. All rights reserved. | Powered by BlackBox AI
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition duration-300">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-white text-sm transition duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

