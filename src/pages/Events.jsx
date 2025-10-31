export default function Events() {
  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "March 25, 2024",
      time: "7:00 PM - 9:00 PM",
      description: "Join us for an exclusive wine tasting featuring selections from renowned vineyards around the world. Learn about wine pairing with our chef's specially prepared appetizers.",
      price: "$75 per person",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Live Jazz Night",
      date: "April 2, 2024",
      time: "8:00 PM - 11:00 PM",
      description: "Enjoy an intimate evening of live jazz music performed by local musicians. Complimentary appetizers and drink specials available.",
      price: "Free entry",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Chef's Table Experience",
      date: "April 15, 2024",
      time: "6:30 PM - 10:00 PM",
      description: "An exclusive 8-course tasting menu prepared by Chef Maria Rodriguez herself. Limited to 12 guests for an intimate culinary journey.",
      price: "$150 per person",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Easter Brunch",
      date: "April 21, 2024",
      time: "10:00 AM - 2:00 PM",
      description: "Celebrate Easter with our special brunch menu featuring traditional and contemporary dishes. Perfect for families and groups.",
      price: "$45 per person",
      image: "/api/placeholder/400/300"
    }
  ]

  const pastEvents = [
    {
      title: "Valentine's Day Dinner",
      date: "February 14, 2024",
      description: "A romantic evening with special couples' menu and live music.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Mardi Gras Celebration",
      date: "February 13, 2024",
      description: "Vibrant celebration with Cajun cuisine and festive atmosphere.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Super Bowl Party",
      date: "February 11, 2024",
      description: "Watch party with game-day specials and multiple viewing areas.",
      image: "/api/placeholder/300/200"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Events & Special Occasions</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          From intimate gatherings to grand celebrations, MetroSites hosts a variety of events throughout the year.
          Join us for memorable experiences and exceptional cuisine.
        </p>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="text-gray-600 mb-4">
                    <p className="font-medium">{event.date}</p>
                    <p>{event.time}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">{event.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Hosting Services */}
        <section className="mb-16 bg-gray-100 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-center mb-8">Event Hosting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Venue Rental</h3>
              <p className="text-gray-600">Elegant spaces for weddings, corporate events, and private parties</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Catering Services</h3>
              <p className="text-gray-600">Custom menus and professional catering for events of all sizes</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
              <p className="text-gray-600">Live music, DJ services, and entertainment coordination</p>
            </div>
          </div>
        </section>

        {/* Past Events Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact for Events */}
        <section className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-semibold mb-4">Plan Your Event</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Let us help you create unforgettable memories. Contact our events team to discuss your vision and requirements.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Contact Events Team
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              View Venue
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
