import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const diningRoomProducts = [
  {
    name: 'Modern Dining Set',
    price: 350.00,
    image: 'modern-dining.jpg',
    category: 'Dining Table',
    description: 'Contemporary dining table with 6 chairs.',
  },
  {
    name: 'Glass Top Dining Table',
    price: 220.00,
    image: 'glass-table.jpg',
    category: 'Dining Table',
    description: 'Sleek dining table with glass surface and metal legs.',
  },
  {
    name: 'Rustic Wood Dining Table',
    price: 280.00,
    image: 'rustic-dining.jpg',
    category: 'Dining Table',
    description: 'Rustic charm with premium finish.',
  },
];

const DiningRoom = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="relative max-w-sm w-full mx-auto p-0">
      <h1 className="text-lg text-[#D98A76] text-center font-semibold px-4 py-3">Dining Room</h1>
      <ProductGrid
        products={diningRoomProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default DiningRoom;
