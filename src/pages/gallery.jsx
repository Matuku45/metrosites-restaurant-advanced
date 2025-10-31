export default function Gallery() {
  const galleryImages = [
    { src: "/api/placeholder/400/300", alt: "Restaurant interior", category: "interior" },
    { src: "/api/placeholder/400/300", alt: "Signature dish", category: "food" },
    { src: "/api/placeholder/400/300", alt: "Dining area", category: "interior" },
    { src: "/api/placeholder/400/300", alt: "Chef preparing food", category: "chef" },
    { src: "/api/placeholder/400/300", alt: "Wine selection", category: "bar" },
    { src: "/api/placeholder/400/300", alt: "Dessert display", category: "food" },
    { src: "/api/placeholder/400/300", alt: "Private dining room", category: "interior" },
    { src: "/api/placeholder/400/300", alt: "Outdoor seating", category: "exterior" },
    { src: "/api/placeholder/400/300", alt: "Cocktail bar", category: "bar" },
    { src: "/api/placeholder/400/300", alt: "Fresh ingredients", category: "food" },
    { src: "/api/placeholder/400/300", alt: "Event setup", category: "events" },
    { src: "/api/placeholder/400/300", alt: "Team photo", category: "staff" }
  ]

  const categories = [
    { name: "All", value: "all" },
    { name: "Food", value: "food" },
    { name: "Interior", value: "interior" },
    { name: "Chef", value: "chef" },
    { name: "Bar", value: "bar" },
    { name: "Events", value: "events" },
    { name: "Exterior", value: "exterior" },
    { name: "Staff", value: "staff" }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Take a visual journey through MetroSites Restaurant. From our elegant dining spaces to our culinary creations,
          explore what makes us special.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Virtual Tour</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience MetroSites from the comfort of your home with our interactive virtual tour.
            Walk through our dining areas and get a feel for the ambiance.
          </p>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-500 text-lg">Virtual Tour Player</span>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Start Virtual Tour
          </button>
        </div>

        {/* Photo Contest */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you dined with us? Share your photos and tag us on social media for a chance to be featured in our gallery!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Instagram
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Facebook
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
