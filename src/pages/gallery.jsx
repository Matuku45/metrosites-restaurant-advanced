import rest1 from '../assets/rest1.webp';
import food from '../assets/food.jpg';
import rest2 from '../assets/rest2.webp';
import chef from '../assets/chef.jpg';
import winepairing from '../assets/WINEPAIRING.webp';
import milkshakespecial from '../assets/milkshakespecial.jpg';
import rest3 from '../assets/rest3.webp';
import rest4 from '../assets/rest4.webp';
import winetesting from '../assets/winetesting.webp';
import ingridients from '../assets/ingridients.webp';
import jazevent from '../assets/jazevent.webp';
import testimonial from '../assets/testimonial.jpg';
import rest5 from '../assets/rest5.webp';
import pasta from '../assets/pasta.webp';
import beefwillington from '../assets/beefwillington.webp';
import chef1 from '../assets/chef1.jpg';
import eventholidayfiest from '../assets/eventholidayfiest.webp';
import testimonial2 from '../assets/testimonial2.jpg';
import food2 from '../assets/food2.webp';
import grilledsalmon from '../assets/grilledsalmon.webp';
import chef2 from '../assets/chef2.jpg';
import rest6 from '../assets/rest6.webp';
import food3 from '../assets/food3.webp';
import happyhourspecial from '../assets/happyhourspecial.webp';
import fivewaystomaketea from '../assets/fivewaystomaketea.webp';
import rest7 from '../assets/rest7.webp';
import happyhourspecial2 from '../assets/happyhourspecial2.webp';
import serving from '../assets/serving.jpg';

export default function Gallery() {
  const galleryImages = [
    { src: rest1, alt: "Restaurant interior", category: "interior" },
    { src: food, alt: "Signature dish", category: "food" },
    { src: rest2, alt: "Dining area", category: "interior" },
    { src: chef, alt: "Chef preparing food", category: "chef" },
    { src: winepairing, alt: "Wine selection", category: "bar" },
    { src: milkshakespecial, alt: "Dessert display", category: "food" },
    { src: rest3, alt: "Private dining room", category: "interior" },
    { src: rest4, alt: "Outdoor seating", category: "exterior" },
    { src: winetesting, alt: "Cocktail bar", category: "bar" },
    { src: ingridients, alt: "Fresh ingredients", category: "food" },
    { src: jazevent, alt: "Event setup", category: "events" },
    { src: testimonial, alt: "Team photo", category: "staff" },
    { src: rest5, alt: "Elegant dining space", category: "interior" },
    { src: pasta, alt: "Pasta dish", category: "food" },
    { src: beefwillington, alt: "Beef Wellington", category: "food" },
    { src: chef1, alt: "Chef at work", category: "chef" },
    { src: eventholidayfiest, alt: "Holiday event", category: "events" },
    { src: testimonial2, alt: "Staff team", category: "staff" },
    { src: food2, alt: "Fresh seafood", category: "food" },
    { src: grilledsalmon, alt: "Grilled salmon", category: "food" },
    { src: chef2, alt: "Culinary team", category: "chef" },
    { src: rest6, alt: "Modern interior", category: "interior" },
    { src: food3, alt: "Healthy dish", category: "food" },
    { src: happyhourspecial, alt: "Happy hour special", category: "food" },
    { src: fivewaystomaketea, alt: "Tea preparation", category: "food" },
    { src: rest7, alt: "Cozy dining area", category: "interior" },
    { src: happyhourspecial2, alt: "Special cocktail", category: "bar" },
    { src: serving, alt: "Food serving", category: "chef" }
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
