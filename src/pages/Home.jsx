export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MetroSites Restaurant</h1>
          <p className="text-xl mb-8">Experience culinary excellence in the heart of the city</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Make a Reservation
          </button>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Dish 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Grilled Salmon</h3>
                <p className="text-gray-600 mb-4">Fresh Atlantic salmon with herbs and lemon butter sauce</p>
                <span className="text-2xl font-bold text-blue-600">$24.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Dish 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beef Tenderloin</h3>
                <p className="text-gray-600 mb-4">Premium cut beef with red wine reduction</p>
                <span className="text-2xl font-bold text-blue-600">$32.99</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="Dish 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Truffle Risotto</h3>
                <p className="text-gray-600 mb-4">Creamy Arborio rice with black truffle and Parmesan</p>
                <span className="text-2xl font-bold text-blue-600">$19.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About MetroSites</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            For over 20 years, MetroSites Restaurant has been serving exceptional cuisine in an elegant atmosphere.
            Our commitment to quality ingredients and innovative cooking techniques has made us a beloved dining destination.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Learn More About Us
          </button>
        </div>
      </section>
    </div>
  )
}
