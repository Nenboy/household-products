import React from 'react';
import { Link } from 'react-router-dom';

const BedroomCategory = () => {
  return (
    <div className="max-w-md w-full mx-auto pb-20 p-4">
      {/* Header */}
      <div className="flex w-full items-center justify-between mb-6">
        {/* Back Button */}
        <button className="p-1">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
              d="M11.909 1.44531L1 9.94197M1 9.94197L11.909 18.4453M1 9.94197H20.62"
              stroke="#4B4544"
              strokeWidth="1.29"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h1 className="text-center text-lg font-semibold text-[#F4B5A4]">
          Categories
        </h1>

        {/* Search Button */}
        <button className="w-8 h-8 rounded-full border border-[#E6C2B5] bg-[#F4B5A4] flex items-center justify-center">
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

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          <Link to="/assets/categories/bedroom">
            <div className="flex justify-center items-center bg-[#F4B5A4] rounded-[15px] h-24 text-sm text-white text-center">
              Bedroom
            </div>
          </Link>

          <Link to="/assets/categories/kitchen">
            <div className="flex justify-center items-center bg-[#F4B5A4] rounded-[15px] h-60 text-sm text-white text-center">
              Kitchen
            </div>
          </Link>

          <Link to="/assets/categories/office">
            <div className="flex justify-center items-center bg-[#F4B5A4] rounded-[15px] h-36 text-sm text-white text-center">
              Office
            </div>
          </Link>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          <Link to="/assets//categories/livingroom">
            <div className="flex justify-center items-center bg-[#F4B5A4] rounded-[15px] h-36 text-sm text-white text-center">
              Living Room
            </div>
          </Link>

          <Link to="/assets/categories/diningroom">
            <div className="flex justify-center items-center bg-[#F4B5A4] rounded-[15px] h-36 text-sm text-white text-center">
              Dining Room
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BedroomCategory;
