import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';
import { useCartWishlist } from '../../context/CartWishlistContext';

const diningRoomProducts = [
  {
    id: 'dining-1',
    name: 'Modern Dining Set',
    price: 350.00,
    image: '/Modern-dinig-table.png',
    category: 'Dining Table',
    description: 'Contemporary dining table with 6 chairs.',
  },
  {
    id: 'dining-2',
    name: 'Glass Top Dining Table',
    price: 220.00,
    image: '/Glasstop-dining-table.png',
    category: 'Dining Table',
    description: 'Sleek dining table with glass surface and metal legs.',
  },
  {
    id: 'dining-3',
    name: 'Rustic Wood Dining Table',
    price: 280.00,
    image: '/Rusticwood-dining-table.png',
    category: 'Dining Table',
    description: 'Rustic charm with premium finish.',
  },
];

const DiningRoom = () => {
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
