export default function Blog() {
  const blogPosts = [
    {
      title: "The Art of Wine Pairing: A Beginner's Guide",
      excerpt: "Discover how to perfectly match wines with your favorite dishes. Learn the fundamentals of wine pairing and elevate your dining experience.",
      date: "March 20, 2024",
      author: "Sarah Johnson, Sommelier",
      image: "/src/assets/WINEPAIRING.webp",
      category: "Wine & Beverages",
      readTime: "5 min read"
    },
    {
      title: "Seasonal Ingredients: Spring Edition",
      excerpt: "Explore the freshest spring ingredients and how our chefs incorporate them into innovative dishes. From asparagus to strawberries, spring has never tasted better.",
      date: "March 15, 2024",
      author: "Chef Maria Rodriguez",
      image: "/src/assets/ingridients.webp",
      category: "Ingredients",
      readTime: "7 min read"
    },
    {
      title: "Behind the Scenes: A Day in the Life of Our Kitchen",
      excerpt: "Take a peek into the heart of MetroSites Restaurant. Follow our culinary team through a typical day of preparation, creativity, and passion.",
      date: "March 10, 2024",
      author: "John Smith, Restaurant Manager",
      image: "/src/assets/serving.jpg",
      category: "Behind the Scenes",
      readTime: "6 min read"
    },
    {
      title: "Sustainable Dining: Our Commitment to the Environment",
      excerpt: "Learn about our initiatives for sustainable sourcing, waste reduction, and eco-friendly practices that keep our restaurant environmentally conscious.",
      date: "March 5, 2024",
      author: "MetroSites Team",
      image: "/src/assets/food3.webp",
      category: "Sustainability",
      readTime: "4 min read"
    },
    {
      title: "Classic French Techniques in Modern Cuisine",
      excerpt: "How traditional French cooking methods continue to influence contemporary restaurant menus and why they're still relevant today.",
      date: "February 28, 2024",
      author: "Chef Maria Rodriguez",
      image: "/src/assets/pasta.webp",
      category: "Culinary Arts",
      readTime: "8 min read"
    },
    {
      title: "Hosting the Perfect Dinner Party",
      excerpt: "Tips and tricks for hosting memorable dinner parties, from menu planning to table setting. Make your next gathering unforgettable.",
      date: "February 20, 2024",
      author: "Events Team",
      image: "/api/placeholder/400/250",
      category: "Events",
      readTime: "6 min read"
    }
  ]

  const categories = ["All", "Wine & Beverages", "Ingredients", "Behind the Scenes", "Sustainability", "Culinary Arts", "Events"]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">MetroSites Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and culinary inspiration from the heart of MetroSites Restaurant.
            Discover the passion behind our dishes and the stories that make dining memorable.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">{blogPosts[0].category}</span>
                <span>{blogPosts[0].date}</span>
                <span className="mx-2">•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">By {blogPosts[0].author}</span>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-2">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">By {post.author}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-blue-600 hover:text-white transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay in the Loop</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our blog newsletter and be the first to know about new posts, special events, and exclusive content.
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

        {/* About the Blog */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">About Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our blog is a window into the world of MetroSites Restaurant. From culinary insights and seasonal recipes
            to behind-the-scenes stories and dining tips, we share the passion and expertise that makes every meal special.
          </p>
        </div>
      </div>
    </div>
  )
}
