import React, { useState, useEffect } from "react";
import ingridients from "../assets/ingridients.webp";
import beefwillington from "../assets/beefwillington.webp";
import pasta from "../assets/pasta.webp";
import milkshakespecial from "../assets/milkshakespecial.jpg";
import winepairing from "../assets/WINEPAIRING.webp";
import grilledsalmon from "../assets/grilledsalmon.webp";
import happyhourspecial from "../assets/happyhourspecial.webp";
import winetesting from "../assets/winetesting.webp";
import jazevent from "../assets/jazevent.webp";
import rest1 from "../assets/rest1.webp";
import rest2 from "../assets/rest2.webp";
import rest3 from "../assets/rest3.webp";
import rest4 from "../assets/rest4.webp";
import rest5 from "../assets/rest5.webp";
import rest6 from "../assets/rest6.webp";
import rest7 from "../assets/rest7.webp";

export default function Menu() {
  const [activeSimulation, setActiveSimulation] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const steps = [
    "Gathering ingredients 🥕🥩",
    "Heating up the stove 🔥",
    "Cooking your dish 🍳",
    "Plating and garnishing 🍽️",
    "Final touches by the chef 👨‍🍳",
    "Order ready! ✅",
  ];

  const startSimulation = (id) => {
    setActiveSimulation(id);
    setProgress(0);
    setMessage(steps[0]);
    let i = 0;

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 20, 100));
      setMessage(steps[i]);
      i++;
      if (i >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveSimulation(null);
          setProgress(0);
        }, 2500);
      }
    }, 1200);
  };

  const menuCategories = [
    {
      title: "Main Courses",
      image: beefwillington,
      items: [
        { id: 1, name: "Wagyu Beef Steak", description: "Premium wagyu beef with seasonal vegetables", price: "R450", image: beefwillington },
        { id: 2, name: "Grilled Salmon", description: "Atlantic salmon with herb butter and vegetables", price: "R285", image: grilledsalmon },
        { id: 3, name: "Duck Confit", description: "Slow-cooked duck leg with cherry gastrique", price: "R320", image: jazevent },
        { id: 4, name: "Lobster Thermidor", description: "Fresh lobster in brandy cream sauce", price: "R480", image: rest1 },
      ],
    },
    {
      title: "Pasta & Risotto",
      image: pasta,
      items: [
        { id: 5, name: "Truffle Risotto", description: "Creamy Arborio rice with black truffle", price: "R285", image: pasta },
        { id: 6, name: "Lobster Ravioli", description: "House-made ravioli with lobster filling", price: "R360", image: rest2 },
        { id: 7, name: "Pappardelle Bolognese", description: "Slow-cooked meat sauce with fresh pasta", price: "R240", image: rest3 },
        { id: 8, name: "Seafood Linguine", description: "Mixed seafood in white wine garlic sauce", price: "R320", image: rest4 },
      ],
    },
    {
      title: "Desserts",
      image: milkshakespecial,
      items: [
        { id: 9, name: "Chocolate Soufflé", description: "Warm chocolate soufflé with vanilla ice cream", price: "R95", image: milkshakespecial },
        { id: 10, name: "Crème Brûlée", description: "Classic vanilla crème brûlée with berries", price: "R85", image: happyhourspecial },
        { id: 11, name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: "R90", image: rest5 },
      ],
    },
    {
      title: "Beverages",
      image: winepairing,
      items: [
        { id: 12, name: "House Wine Selection", description: "Curated selection of South African wines", price: "R45/glass", image: winepairing },
        { id: 13, name: "Craft Cocktails", description: "Signature cocktails by our mixologist", price: "R85", image: winetesting },
        { id: 14, name: "Single Origin Coffee", description: "Ethically sourced specialty coffee", price: "R35", image: rest7 },
      ],
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted menu featuring the finest ingredients and innovative culinary techniques.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Category Header */}
              <div className="relative">
                <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 bg-opacity-70 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start space-x-4">
                      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        <span className="text-lg font-bold text-blue-600">{item.price}</span>
                      </div>
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={() => startSimulation(item.id)}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all font-semibold"
                    >
                      Order This Meal
                    </button>

                    {/* Simulation Section */}
                    {activeSimulation === item.id && (
                      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 text-center animate-fadeIn">
                        <div className="text-4xl animate-bounce mb-4">👨‍🍳</div>
                        <p className="font-medium text-gray-700 mb-3">{message}</p>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-green-500 transition-all duration-700 ease-in-out"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <div className="mt-4 flex justify-center space-x-3 text-2xl">
                          <span className="animate-bounce">🍕</span>
                          <span className="animate-bounce delay-100">🍜</span>
                          <span className="animate-bounce delay-200">🥗</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Notes */}
        <div className="mt-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-400">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu Notes</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• All prices are in South African Rand (ZAR) and include VAT</li>
            <li>• Menu items may contain allergens - please inform your server of any dietary requirements</li>
            <li>• Vegetarian, vegan, and gluten-free options available on request</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
