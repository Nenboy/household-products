import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const kitchenProducts = [
  {
    name: 'Modern Kitchen Island',
    price: 500.00,
    image: 'modern-kitchen-island.jpg',
    category: 'Kitchen',
    description: 'Spacious kitchen island with storage and seating.',
  },
  {
    name: 'Stainless Steel Refrigerator',
    price: 1200.00,
    image: 'stainless-fridge.jpg',
    category: 'Kitchen',
    description: 'Energy efficient fridge with modern design.',
  },
  {
    name: 'Gas Stove Range',
    price: 750.00,
    image: 'gas-stove.jpg',
    category: 'Kitchen',
    description: 'High-performance stove with five burners.',
  },
];

const Kitchen = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold px-4 py-3">Kitchen</h1>
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
