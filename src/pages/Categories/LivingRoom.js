import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';

const livingRoomProducts = [
  {
    name: 'Luxury Sofa',
    price: 250.00, // ✅ fixed
    image: 'luxury-sofa.jpg',
    category: 'Living Room',
    description: 'A comfortable luxury sofa for your living room.',
  },
  {
    name: 'Wooden Coffee Table',
    price: 120.00, // ✅ fixed
    image: 'coffee-table.jpg',
    category: 'Living Room',
    description: 'Elegant coffee table made of solid wood.',
  },
  {
    name: 'Leather Armchair',
    price: 180.00, // ✅ fixed
    image: 'armchair.jpg',
    category: 'Living Room',
    description: 'Stylish and cozy armchair with leather finish.',
  },
];

const LivingRoom = ({ onAddToCart, onToggleWishlist, wishlistItems }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-xl font-semibold px-4 py-3">Living Room</h1>
      <ProductGrid
        products={livingRoomProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistItems={wishlistItems}
      />
    </div>
  );
};

export default LivingRoom;
