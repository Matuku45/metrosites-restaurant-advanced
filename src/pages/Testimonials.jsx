export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      review: "Absolutely incredible dining experience! The food was exceptional, and the service was impeccable. The chef's special risotto was the highlight of our evening. Will definitely be back!",
      image: "/src/assets/testimonial.jpg"
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "March 10, 2024",
      review: "MetroSites never disappoints. The ambiance is perfect for date nights, and the wine selection is outstanding. The staff really knows their craft. Highly recommended!",
      image: "/src/assets/testimonial2.jpg"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      date: "March 5, 2024",
      review: "Celebrated my anniversary here and it was magical. The attention to detail in every dish was remarkable. The dessert menu is a must-try!",
      image: "/src/assets/chef.jpg"
    },
    {
      name: "David Thompson",
      rating: 4,
      date: "February 28, 2024",
      review: "Great food and excellent service. The beef tenderloin was cooked to perfection. Only minor complaint was the wait time, but it was worth it.",
      image: "/src/assets/chef1.jpg"
    },
    {
      name: "Lisa Park",
      rating: 5,
      date: "February 20, 2024",
      review: "Best restaurant in the city! The vegetarian options are creative and delicious. The staff accommodated my dietary restrictions perfectly.",
      image: "/src/assets/chef2.jpg"
    },
    {
      name: "Robert Wilson",
      rating: 5,
      date: "February 15, 2024",
      review: "Attended a business dinner here and was impressed by everything. The private dining room was perfect, and the food presentation was stunning.",
      image: "/src/assets/serving.jpg"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Testimonials</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our valued customers have to say about their dining experiences at MetroSites.
        </p>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center mb-4">
            {renderStars(Math.round(averageRating))}
            <span className="ml-2 text-2xl font-bold">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-gray-600">Based on {testimonials.length} reviews</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>

        {/* Write a Review Section */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Share Your Experience</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Have you dined with us? We'd love to hear about your experience. Your feedback helps us improve and serves as a guide for other diners.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Write a Review
          </button>
        </div>

        {/* Review Guidelines */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Review Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">What We Look For</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Honest feedback about food quality</li>
                <li>• Service experience details</li>
                <li>• Ambiance and atmosphere</li>
                <li>• Value for money</li>
                <li>• Overall dining experience</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Our Commitment</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• All reviews are genuine and unfiltered</li>
                <li>• We respond to every review</li>
                <li>• Your feedback drives our improvements</li>
                <li>• We maintain high standards</li>
                <li>• Transparency in our operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
