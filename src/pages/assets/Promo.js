import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PromoBanner() {
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showNestedFilter, setShowNestedFilter] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/banner.png", "/banner.jpg", "/banner2.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative max-w-sm w-full mx-auto p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h2 className="text-[#F4B5A4] font-poppins text-lg font-semibold">Hi, Welcome Back</h2>
          <p className="text-[#363130] text-sm">Create spaces that bring joy</p>
        </div>

        <button
          className="w-8 h-8 rounded-full border cursor-pointer border-[#E6C2B5] bg-[#F4B5A4] flex items-center justify-center"
          onClick={() => setShowSearch(true)}
        >
          {/* Search Icon SVG */}
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M11.8958 11.8958L15.61 15.61M13.7679 7.38393C13.7679 10.9097 10.9097 13.7679 7.38393 13.7679C3.85818 13.7679 1 10.9097 1 7.38393C1 3.85818 3.85818 1 7.38393 1C10.9097 1 13.7679 3.85818 13.7679 7.38393Z"
              stroke="#4B4544"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 p-4 flex flex-col overflow-y-auto">
          <div className="relative max-w-sm w-full mx-auto p-4">
            <h2 className="text-lg font-poppins font-semibold text-center text-[#CC7861]">Search</h2>
            <button
              onClick={() => setShowSearch(false)}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-1"
            >
              {/* Back Icon SVG */}
              <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                <path d="M11.909 1.44531L1 9.94197M1 9.94197L11.909 18.4453M1 9.94197H20.62" stroke="#4B4544" strokeWidth="1.29" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="relative max-w-sm w-full mx-auto p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 pr-10 border border-[#E6C2B5] rounded-[30px] text-sm font-poppins focus:outline-none"
              autoFocus
            />
            <button
              onClick={() => setShowFilter(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center bg-[#F4B5A4] w-8 h-8 text-[#4B4544] rounded-[30px]"
            >
              {/* Filter Icon */}
              <svg width="17" height="17" viewBox="0 0 16 11" fill="none">
                <path d="M6.97958 3.01859C6.97958 4.12479 6.08283 5.02155 4.97662 5.02155C3.87042 5.02155 2.97366 4.12479 2.97366 3.01859C2.97366 1.91238 3.87042 1.01562 4.97662 1.01562C6.08283 1.01562 6.97958 1.91238 6.97958 3.01859Z" fill="#F4B5A4" />
                <path d="M11.987 8.02599C11.987 9.13219 11.0902 10.0289 9.98402 10.0289C8.87782 10.0289 7.98106 9.13219 7.98106 8.02599C7.98106 6.91978 8.87782 6.02303 9.98402 6.02303C11.0902 6.02303 11.987 6.91978 11.987 8.02599Z" fill="#F4B5A4" />
                <path d="M6.97958 3.01859H14.9914M6.97958 3.01859C6.97958 4.12479 6.08283 5.02155 4.97662 5.02155C3.87042 5.02155 2.97366 4.12479 2.97366 3.01859M6.97958 3.01859C6.97958 1.91238 6.08283 1.01562 4.97662 1.01562C3.87042 1.01562 2.97366 1.91238 2.97366 3.01859M0.970703 3.01859H2.97366M11.987 8.02599H14.9914M11.987 8.02599C11.987 9.13219 11.0902 10.0289 9.98402 10.0289C8.87782 10.0289 7.98106 9.13219 7.98106 8.02599M11.987 8.02599C11.987 6.91978 11.0902 6.02303 9.98402 6.02303C8.87782 6.02303 7.98106 6.91978 7.98106 8.02599M0.970703 8.02599H7.98106" stroke="#4B4544" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Top Searches List */}
          <div className="font-poppins relative max-w-sm w-full mx-auto p-4">
            <h4 className="font-semibold text-[20px] text-[#F4B5A4] mb-4">Top Searches</h4>
            <div className="space-y-3">
              {["Bed", "Lamp", "Plastic Plants", "Carpet", "Sofa", "Blue Chairs"].map((item, index) => (
                <div
                  key={index}
                  className="w-[290px] h-[50px] bg-[#FAF0E6] rounded-[36px] flex items-center px-4 cursor-pointer hover:shadow-sm transition"
                >
                  <button
                    className="w-8 h-8 rounded-full border border-[#E6C2B5] bg-[#F4B5A4] flex items-center justify-center"
                    onClick={() => setShowSearch(true)}
                  >
                    {/* Small Search Icon */}
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path
                        d="M11.8958 11.8958L15.61 15.61M13.7679 7.38393C13.7679 10.9097 10.9097 13.7679 7.38393 13.7679C3.85818 13.7679 1 10.9097 1 7.38393C1 3.85818 3.85818 1 7.38393 1C10.9097 1 13.7679 3.85818 13.7679 7.38393Z"
                        stroke="#4B4544"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="text-[#4B4544] text-sm ml-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Panels */}
      {showFilter && (
        <div className="absolute top-0 right-0 w-64 h-full bg-white border-l border-gray-300 shadow-lg z-50 p-4">
          <h3 className="font-semibold text-[#4B4544] mb-3">Filter</h3>
          <label className="block text-sm mb-2">Price Range</label>
          <input type="range" className="w-full mb-4" />
          <ul className="text-sm space-y-2">
            <li className="cursor-pointer hover:underline">Popular</li>
            <li className="cursor-pointer hover:underline">Recent</li>
            <li className="cursor-pointer hover:underline">Trending</li>
          </ul>
          <button
            className="mt-6 text-sm text-blue-600 underline"
            onClick={() => setShowNestedFilter(true)}
          >
            More Filters →
          </button>
        </div>
      )}

      {showNestedFilter && (
        <div className="absolute top-0 right-0 w-64 h-full bg-[#F4F4F4] border-l border-gray-300 shadow-xl z-60 p-4">
          <h3 className="font-semibold text-[#4B4544] mb-3">Advanced Filters</h3>
          <label className="block text-sm mb-2">Price Range</label>
          <input type="range" className="w-full mb-4" />
          <label className="block text-sm mb-2">Sort By</label>
          <select className="w-full p-2 border rounded text-sm">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Rating</option>
          </select>
          <button
            className="mt-6 text-sm text-red-600 underline"
            onClick={() => setShowNestedFilter(false)}
          >
            ← Back to Filters
          </button>
        </div>
      )}

      {/* Promo Image Carousel */}
      <div className="relative">
        <Link to="/">
          <img
            src={images[currentIndex]}
            alt="Sofa"
            className="w-[349px] h-[132px] object-cover rounded-md transition-all duration-700"
          />
        </Link>
        <div className="flex justify-center mt-3 gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-1 rounded transition-all duration-300 ${
                index === currentIndex ? "bg-[#000]" : "bg-[#F4C1AF]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;
