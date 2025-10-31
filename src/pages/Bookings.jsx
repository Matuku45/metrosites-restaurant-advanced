export default function Bookings() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Event Bookings</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Host your special events at MetroSites Restaurant. From intimate gatherings to grand celebrations, we provide exceptional service and cuisine for all occasions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Book Your Event</h2>
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding Reception</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="anniversary">Anniversary Celebration</option>
                  <option value="graduation">Graduation Party</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select guests</option>
                    <option value="10-25">10-25 Guests</option>
                    <option value="26-50">26-50 Guests</option>
                    <option value="51-100">51-100 Guests</option>
                    <option value="100+">100+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per person)</label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="50-75">$50-$75 per person</option>
                  <option value="75-100">$75-$100 per person</option>
                  <option value="100-150">$100-$150 per person</option>
                  <option value="150+">$150+ per person</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Event Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your event, special requirements, dietary restrictions, etc..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
              >
                Submit Event Inquiry
              </button>
            </form>
          </div>

          {/* Event Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Event Services</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Wedding Receptions</h3>
                <p className="text-gray-600 mb-4">
                  Make your special day unforgettable with our elegant wedding packages, including custom menus, floral arrangements, and professional service.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Custom wedding cake</li>
                  <li>• Professional photography</li>
                  <li>• Ceremony coordination</li>
                  <li>• Special occasion menu</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Corporate Events</h3>
                <p className="text-gray-600 mb-4">
                  Host successful business meetings, presentations, or team-building events in our private dining rooms with full AV capabilities.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Private dining rooms</li>
                  <li>• AV equipment available</li>
                  <li>• Business lunch specials</li>
                  <li>• Custom catering options</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Private Parties</h3>
                <p className="text-gray-600 mb-4">
                  Celebrate birthdays, anniversaries, or any special occasion with our flexible party packages and personalized service.
                </p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Themed decorations</li>
                  <li>• Custom menu options</li>
                  <li>• Dedicated event coordinator</li>
                  <li>• Flexible timing</li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Event Planning Team</h3>
              <p className="text-gray-600 mb-2">For event inquiries and custom packages:</p>
              <p className="font-semibold">Events Manager: Sarah Johnson</p>
              <p className="text-gray-600">Phone: (555) 123-4568</p>
              <p className="text-gray-600">Email: events@metrosites.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
