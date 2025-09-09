import { useState, useEffect } from 'react';

const BlogPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and stories from Jyoti Enterprises.
            Discover our world of innovation and excellence.
          </p>
        </div>

        {/* Blog Content Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder Blog Cards */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">📝</div>
                  <p className="text-lg font-semibold">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Blog Post Title {item}
                </h3>
                <p className="text-gray-600 mb-4">
                  Exciting content coming your way! Stay tuned for our latest updates and insights.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to be the first to know?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and get notified when we publish new content.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Animated Side Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-end p-4">
          <div className="bg-yellow-400 border-4 border-yellow-600 rounded-3xl shadow-2xl p-6 max-w-sm animate-pulse">
            {/* Cartoonish Warning Icon */}
            <div className="text-center mb-4">
              <div className="text-6xl animate-bounce">⚠️</div>
            </div>

            {/* Message */}
            <h3 className="text-2xl font-bold text-yellow-900 mb-3 text-center">
              Site Under Maintenance!
            </h3>
            <p className="text-yellow-800 text-center mb-4">
              Our blog is getting a fresh update! Check back soon for amazing new content.
            </p>

            {/* Cartoonish Button */}
            <button
              onClick={closePopup}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              Got it! 👍
            </button>
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 -z-10"
            onClick={closePopup}
          ></div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
