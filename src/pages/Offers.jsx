export default function Offers() {
  const offers = [
    {
      title: "Weekend Brunch Special",
      description: "Enjoy our signature brunch menu with bottomless mimosas for only $29.99 per person. Available Saturdays and Sundays from 10 AM to 2 PM.",
      price: "$29.99",
      validUntil: "Ongoing",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Date Night Package",
      description: "Romantic dinner for two including appetizer, main course, dessert, and a bottle of house wine. Perfect for special occasions.",
      price: "$89.99",
      validUntil: "Valid through December 31st",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Family Feast",
      description: "Family-style dining for 4-6 people featuring our chef's selection of appetizers, entrees, and desserts. Great value for groups!",
      price: "$149.99",
      validUntil: "Available weekdays",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Happy Hour",
      description: "Half-price appetizers and select drinks from 4 PM to 6 PM daily. Join us for great food and drinks at amazing prices!",
      price: "50% off",
      validUntil: "Daily 4-6 PM",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Loyalty Program",
      description: "Earn points with every visit! After 10 visits, enjoy a complimentary meal. Join our loyalty program today.",
      price: "Free",
      validUntil: "Ongoing",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Birthday Special",
      description: "Celebrate your birthday with us! Free dessert and a complimentary glass of champagne for the birthday person.",
      price: "Free dessert",
      validUntil: "With reservation",
      image: "/api/placeholder/400/300"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Special Offers</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Take advantage of our exclusive deals and special packages. From romantic dinners to family gatherings,
          we have something for everyone!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{offer.price}</span>
                  <span className="text-sm text-gray-500">{offer.validUntil}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-6">
            Subscribe to our newsletter to receive exclusive offers and updates about new specials.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All offers are subject to availability and may be changed or discontinued at any time without notice.
            Some offers require advance reservation. Please call ahead or check with our staff for current availability.
            Cannot be combined with other offers or discounts unless specified.
          </p>
        </div>
      </div>
    </div>
  )
}
