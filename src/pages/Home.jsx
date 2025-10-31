export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-blue-600">MetroSites</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
            Experience culinary excellence in the heart of the city. Where tradition meets innovation,
            and every meal tells a story of passion and perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Table
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-full transition duration-300">
              View Our Menu
            </button>
          </div>
        </div>
        <div className="mt-16">
          <div className="bg-gray-100 h-96 rounded-2xl shadow-lg flex items-center justify-center mx-auto max-w-4xl">
            <span className="text-gray-400 text-8xl">🏪</span>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <span className="text-white text-6xl">🍝</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Truffle Risotto</h3>
                <p className="text-gray-600 mb-4">Creamy Arborio rice with black truffle shavings and Parmesan</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R285</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-6xl">🥩</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Wagyu Beef Steak</h3>
                <p className="text-gray-600 mb-4">Premium wagyu beef with seasonal vegetables and red wine reduction</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R450</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white text-6xl">🦪</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Oyster Platter</h3>
                <p className="text-gray-600 mb-4">Fresh oysters with mignonette sauce and lemon wedges</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">R180</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2010, MetroSites has been serving exceptional cuisine to discerning diners for over a decade.
                Our commitment to using the finest local ingredients and innovative cooking techniques has earned us
                numerous accolades and a loyal following.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Led by Executive Chef Maria Rodriguez, our team of passionate culinary professionals creates
                memorable dining experiences that blend traditional flavors with contemporary presentation.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-2xl shadow-2xl flex items-center justify-center">
                <span className="text-gray-500 text-6xl">🏪</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-black">10+</span>
              </div>
              <div className="absolute -top-6 -left-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="font-bold">Since 2010</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Menu Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for an Unforgettable Dining Experience?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for your next special occasion or simply indulge in the finest cuisine the city has to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Make a Reservation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition duration-300">
              Call Us: +27 21 123 4567
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
