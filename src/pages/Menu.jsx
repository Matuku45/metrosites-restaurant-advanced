export default function Menu() {
  const menuCategories = [
    {
      title: "Appetizers",
      items: [
        { name: "Bruschetta", description: "Toasted bread topped with tomatoes, garlic, and basil", price: "$8.99" },
        { name: "Calamari Rings", description: "Crispy fried squid with marinara sauce", price: "$12.99" },
        { name: "Stuffed Mushrooms", description: "Mushroom caps filled with cheese and herbs", price: "$10.99" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Salmon", description: "Fresh Atlantic salmon with lemon butter sauce", price: "$24.99" },
        { name: "Beef Tenderloin", description: "8oz premium cut with red wine reduction", price: "$32.99" },
        { name: "Chicken Parmesan", description: "Breaded chicken breast with marinara and mozzarella", price: "$19.99" },
        { name: "Vegetarian Pasta", description: "Penne with seasonal vegetables in garlic olive oil", price: "$16.99" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: "$7.99" },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center", price: "$8.99" },
        { name: "Cheesecake", description: "New York style cheesecake with berry compote", price: "$6.99" }
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "House Wine", description: "Red or white, glass", price: "$6.99" },
        { name: "Craft Beer", description: "Selection of local craft beers", price: "$5.99" },
        { name: "Specialty Coffee", description: "Espresso, cappuccino, or latte", price: "$4.99" }
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

        {menuCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-600 pb-2">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-bold text-blue-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            All prices are subject to change. Please inform your server of any allergies or dietary restrictions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  )
}
