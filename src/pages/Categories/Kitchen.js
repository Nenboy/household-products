import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const kitchenProducts = [
  {
    name: 'Modern Kitchen Island',
    price: 500.00,
    image: '/Kitchen-Island.png',
    category: 'Kitchen',
    description: 'Spacious kitchen island with storage and seating.',
  },
  {
    name: 'Stainless Steel Refrigerator',
    price: 1200.00,
    image: '/Steel-refridgerator.png',
    category: 'Kitchen',
    description: 'Energy efficient fridge with modern design.',
  },
  {
    name: 'Gas Stove Range',
    price: 750.00,
    image: '/Gas-stove.png',
    category: 'Kitchen',
    description: 'High-performance stove with five burners.',
  },
];

const Kitchen = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="relative max-w-sm w-full mx-auto p-0">
      <h1 className="text-lg text-[#D98A76] text-center font-semibold px-4 py-3">Kitchen</h1>
      <ProductGrid
        products={kitchenProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default Kitchen;
