import chef from '../assets/chef.jpg';
import pasta from '../assets/pasta.webp';
import beefwillington from '../assets/beefwillington.webp';
import food2 from '../assets/food2.webp';
import grilledsalmon from '../assets/grilledsalmon.webp';
import food3 from '../assets/food3.webp';
import milkshakespecial from '../assets/milkshakespecial.jpg';

export default function ChefSpecials() {
  const chefSpecials = [
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice cooked to perfection with black truffle shavings, Parmesan cheese, and a touch of white wine. Finished with fresh herbs and truffle oil.",
      price: "R285",
      image: pasta,
      chefNote: "This dish represents the essence of Italian comfort food with a luxurious twist."
    },
    {
      name: "Wagyu Beef Tartare",
      description: "Hand-cut premium wagyu beef mixed with traditional accompaniments: capers, shallots, quail egg yolk, and Dijon mustard. Served with toasted brioche.",
      price: "R450",
      image: beefwillington,
      chefNote: "A modern take on the classic French dish, showcasing the unparalleled quality of wagyu beef."
    },
 
    {
      name: "Lobster Thermidor",
      description: "Fresh Maine lobster tail in a rich brandy cream sauce with Gruyère cheese, baked in the shell. Served with seasonal vegetables and rice pilaf.",
      price: "R520",
      image: grilledsalmon,
      chefNote: "A classic French dish that highlights the sweetness of lobster with the complexity of the sauce."
    },
    
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Chef's Specials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover culinary creations crafted by our Executive Chef Maria Rodriguez. Each dish represents months of experimentation,
            sourcing the finest ingredients, and perfecting techniques to deliver extraordinary dining experiences.
          </p>
        </div>

        {/* Chef Introduction */}
        <div className="bg-gray-100 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Meet Chef Maria Rodriguez</h2>
              <p className="text-gray-600 mb-4">
                With over 20 years of experience in fine dining, Chef Maria brings a unique blend of classical French technique
                and innovative modern cuisine to MetroSites. Her passion for seasonal, locally-sourced ingredients and
                commitment to excellence has earned her numerous accolades and a devoted following.
              </p>
              <p className="text-gray-600">
                "Cooking is not just about feeding the body, but nourishing the soul. Every dish tells a story,
                and I strive to make each meal a memorable chapter in our guests' lives."
              </p>
            </div>
            <div>
              <img src={chef} alt="Chef Maria Rodriguez" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>

        {/* Specials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {chefSpecials.map((special, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={special.image} alt={special.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{special.name}</h3>
                  <span className="text-lg font-bold text-blue-600">{special.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{special.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm italic text-gray-700">
                    <span className="font-semibold">Chef's Note:</span> {special.chefNote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Note */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-4">Seasonal Availability</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Our chef's specials rotate seasonally to highlight the freshest, most flavorful ingredients available.
            Some dishes may be available for a limited time only. Please call ahead to confirm availability or
            inquire about substitutions.
          </p>
        </div>

        {/* Reservation CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Experience the Chef's Creations</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserve your table today to indulge in these extraordinary culinary masterpieces.
            Our specials are best enjoyed with wine pairings recommended by our sommelier.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  )
}
