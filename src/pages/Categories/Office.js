import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const officeProducts = [
  {
    name: 'Ergonomic Desk',
    price: 200.00,
    image: 'ergonomic-desk.jpg',
    category: 'Desk',
    description: 'Adjustable desk perfect for long hours of work.',
  },
  {
    name: 'Standing Desk Converter',
    price: 150.00,
    image: 'standing-desk.jpg',
    category: 'Desk',
    description: 'Easily convert your normal desk into a standing one.',
  },
  {
    name: 'Compact Office Desk',
    price: 180.00,
    image: 'compact-desk.jpg',
    category: 'Desk',
    description: 'Minimalist desk ideal for small office spaces.',
  },
];

const Office = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold px-4 py-3">Office</h1>
      <ProductGrid
        products={officeProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default Office;
