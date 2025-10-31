import React, { useState, useEffect } from "react";

export default function Bookings() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Preparing your order...");

  const startSimulation = (e) => {
    e.preventDefault();
    setIsSimulating(true);
    setProgress(0);
    setMessage("Preparing your order...");

    let steps = [
      "Gathering ingredients 🥕🥩",
      "Heating up the stove 🔥",
      "Cooking your dish 🍳",
      "Plating and garnishing 🍽️",
      "Final touches by the chef 👨‍🍳",
      "Order ready! ✅",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 20, 100));
      setMessage(steps[i]);
      i++;
      if (i >= steps.length) {
        clearInterval(interval);
        setTimeout(() => setIsSimulating(false), 2000);
      }
    }, 1200);
  };

  useEffect(() => {
    if (!isSimulating) setProgress(0);
  }, [isSimulating]);

  return (
    <div className="py-16 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Advanced Restaurant Simulation
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Experience our interactive booking system. Click "Submit Order" to
          watch your virtual chef prepare your event in real-time!
        </p>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          {!isSimulating ? (
            <form onSubmit={startSimulation} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Birthday</option>
                <option>Private Dinner</option>
              </select>

              <textarea
                rows="4"
                placeholder="Event Details..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-all"
              >
                Submit Order
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-5xl animate-bounce mb-6">👨‍🍳</div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                {message}
              </h2>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
                <div
                  className="h-full bg-green-500 transition-all duration-700 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <p className="text-gray-500 italic animate-pulse">
                Please wait while your event is being prepared...
              </p>

              {/* Animation: floating food icons */}
              <div className="mt-8 flex space-x-4 text-3xl">
                <span className="animate-bounce">🍕</span>
                <span className="animate-bounce delay-100">🍜</span>
                <span className="animate-bounce delay-200">🍷</span>
                <span className="animate-bounce delay-300">🥗</span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            Experience the <span className="font-bold text-blue-600">MetroSites</span> virtual kitchen — where code meets cuisine.
          </p>
        </div>
      </div>
    </div>
  );
}
