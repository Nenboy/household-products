import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';
import { useCartWishlist } from '../../context/CartWishlistContext';

const livingRoomProducts = [
  {
    id: 'livingroom-1',
    name: 'Luxury Sofa',
    price: 250.00,
    image: '/Sofa.png',
    category: 'Living Room',
    description: 'A comfortable luxury sofa for your living room.',
  },
  {
    id: 'livingroom-2',
    name: 'Wooden Coffee Table',
    price: 120.00,
    image: '/Coffee-table.png',
    category: 'Living Room',
    description: 'Elegant coffee table made of solid wood.',
  },
  {
    id:'livingroom-3',
    name: 'Leather Armchair',
    price: 180.00,
    image: '/Leatherarm-Chair.png',
    category: 'Living Room',
    description: 'Stylish and cozy armchair with leather finish.',
  },
];

const LivingRoom = () => {
  const { state, dispatch } = useCartWishlist();
  const { wishlistItems, cartItems } = state;

  const onAddToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    }
  };

  const onToggleWishlist = (product) => {
    if (wishlistItems.find(item => item.id === product.id)) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  return (
    <div className="relative max-w-sm w-full mx-auto p-0">
      <h1 className="text-lg text-[#D98A76] text-center font-semibold px-4 py-3">Living Room</h1>
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
