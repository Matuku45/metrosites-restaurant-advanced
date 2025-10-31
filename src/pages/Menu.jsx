import ingridients from '../assets/ingridients.webp';
import beefwillington from '../assets/beefwillington.webp';
import pasta from '../assets/pasta.webp';
import milkshakespecial from '../assets/milkshakespecial.jpg';
import winepairing from '../assets/WINEPAIRING.webp';
import food2 from '../assets/food2.webp';
import grilledsalmon from '../assets/grilledsalmon.webp';
import food3 from '../assets/food3.webp';
import happyhourspecial from '../assets/happyhourspecial.webp';
import winetesting from '../assets/winetesting.webp';

export default function Menu() {
  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with truffle and Parmesan", price: "R85", image: ingridients },
        { name: "Seared Scallops", description: "Pan-seared scallops with cauliflower purée", price: "R120", image: food2 },
        { name: "Oyster Platter", description: "Fresh oysters with mignonette sauce", price: "R95", image: grilledsalmon },
        { name: "Foie Gras Terrine", description: "Duck liver terrine with fig chutney", price: "R140", image: food3 }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Wagyu Beef Steak", description: "Premium wagyu beef with seasonal vegetables", price: "R450", image: beefwillington },
        { name: "Grilled Salmon", description: "Atlantic salmon with herb butter and vegetables", price: "R285", image: grilledsalmon },
        { name: "Duck Confit", description: "Slow-cooked duck leg with cherry gastrique", price: "R320", image: food3 },
        { name: "Lobster Thermidor", description: "Fresh lobster in brandy cream sauce", price: "R480", image: food2 }
      ]
    },
    {
      title: "Pasta & Risotto",
      items: [
        { name: "Truffle Risotto", description: "Creamy Arborio rice with black truffle", price: "R285", image: pasta },
        { name: "Lobster Ravioli", description: "House-made ravioli with lobster filling", price: "R360", image: pasta },
        { name: "Pappardelle Bolognese", description: "Slow-cooked meat sauce with fresh pasta", price: "R240", image: pasta },
        { name: "Seafood Linguine", description: "Mixed seafood in white wine garlic sauce", price: "R320", image: food2 }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla ice cream", price: "R95", image: milkshakespecial },
        { name: "Crème Brûlée", description: "Classic vanilla crème brûlée with berries", price: "R85", image: happyhourspecial },
        { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: "R90", image: milkshakespecial },
        { name: "Dessert Flight", description: "Selection of three miniature desserts", price: "R120", image: happyhourspecial }
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "House Wine Selection", description: "Curated selection of South African wines", price: "R45/glass", image: winepairing },
        { name: "Craft Cocktails", description: "Signature cocktails by our mixologist", price: "R85", image: winetesting },
        { name: "Single Origin Coffee", description: "Ethically sourced specialty coffee", price: "R35", image: happyhourspecial },
        { name: "Artisanal Teas", description: "Premium loose-leaf tea selection", price: "R40", image: milkshakespecial }
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted menu featuring the finest ingredients and innovative culinary techniques.
            Each dish is prepared with passion and attention to detail.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 bg-opacity-70 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start py-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                      <div className="ml-6">
                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notes */}
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu Notes</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• All prices are in South African Rand (ZAR) and include VAT</li>
            <li>• Menu items may contain allergens - please inform your server of any dietary requirements</li>
            <li>• We accommodate vegetarian, vegan, and gluten-free requests with advance notice</li>
            <li>• Chef's recommendations are marked with a ⭐ symbol</li>
            <li>• Wine pairings available for all main courses</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Experience Our Cuisine?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Make a reservation today and let our culinary team create an unforgettable dining experience for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-8 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg transform hover:scale-105">
              Make a Reservation
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-full transition duration-300">
              Call Us: +27 21 123 4567
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
