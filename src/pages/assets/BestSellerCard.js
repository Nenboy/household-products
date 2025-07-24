import React from "react";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

function BestSellerCard() {
  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <h2 className="text-[18px] font-semibold text-[#D98A76] mb-4">
        Best Seller
      </h2>

      <div className="bg-[#F4B5A4] h-[132px] top-[75] rounded-[20px] flex justify-between items-center px-6 py-6 max-w-[700px]">
        <div className="flex flex-col gap-4 text-white">
          <div>
            <h3 className="text-[15px] h-[17px] top-[97px] font-medium text-[#4B4544]">Kitchen Cart</h3>
            <p className="text-sm text-[#6B6B6B] max-w-[220px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-[8.96px] bg-white text-[#F4B5A4] px-3 py-1 rounded-full text-sm font-medium gap-1">
              <FaStar className="text-sm" />
              <p className="text-black">4.5</p>
            </div>
            <Link to="/categories/kitchen">
              <button className="px-3 w-[50.65] py-1 text-[8.96px] rounded-full cursor-pointer bg-white text-sm text-[#2C2C2C] font-medium">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[171px] h-[171px] -scale-x-100 sm:w-[180px] md:w-[220px]">
          <img
            src="/imagee.png"
            alt="Kitchen Cart"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BestSellerCard;
