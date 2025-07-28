import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const bedroomProducts = [
  {
    name: 'Queen Size Bed',
    price: 650.00,
    image: 'queen-bed.jpg',
    category: 'Bedroom',
    description: 'Comfortable queen size bed with solid wood frame.',
  },
  {
    name: 'Nightstand',
    price: 120.00,
    image: 'nightstand.jpg',
    category: 'Bedroom',
    description: 'Classic nightstand with drawer and shelf.',
  },
  {
    name: 'Wardrobe Closet',
    price: 850.00,
    image: 'wardrobe-closet.jpg',
    category: 'Bedroom',
    description: 'Spacious wardrobe with sliding doors.',
  },
];

const Bedroom = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold px-4 py-3">Bedroom</h1>
      <ProductGrid
        products={bedroomProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default Bedroom;
