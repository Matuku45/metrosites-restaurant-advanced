export default function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-8">About MetroSites Restaurant</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, MetroSites has been the premier dining destination, combining traditional culinary excellence with modern innovation.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2004 by Chef Maria Rodriguez, MetroSites Restaurant began as a small bistro with a vision to bring authentic, high-quality cuisine to the heart of the city. What started as a passion project has grown into one of the most beloved restaurants in the metropolitan area.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to using only the finest, locally-sourced ingredients and our dedication to exceptional service have earned us numerous accolades and a loyal following of food enthusiasts.
              </p>
              <p className="text-gray-600">
                Today, under the continued leadership of Chef Rodriguez and her talented team, we continue to innovate while staying true to our roots, offering an unforgettable dining experience for every guest.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Restaurant Interior Image</span>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">We source only the finest ingredients and maintain the highest standards in every dish we prepare.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">Our love for food and hospitality drives everything we do, from menu creation to guest service.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We believe in supporting local farmers and being an active part of the community we serve.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Chef Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Chef Maria Rodriguez</h3>
              <p className="text-gray-600">Executive Chef & Owner</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Manager Photo</span>
              </div>
              <h3 className="text-xl font-semibold">John Smith</h3>
              <p className="text-gray-600">Restaurant Manager</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Sommelier Photo</span>
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Sommelier</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-100 py-12 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Experience MetroSites</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Whether it's a special occasion or a casual meal, we're here to make every moment memorable.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Make a Reservation
          </button>
        </section>
      </div>
    </div>
  )
}
