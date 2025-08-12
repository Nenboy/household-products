import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';
import { useCartWishlist } from '../../context/CartWishlistContext';

const officeProducts = [
  {
    id: 'office-1',
    name: 'Ergonomic Desk',
    price: 200.00,
    image: '/Ergonomic-Desk.png',
    category: 'Desk',
    description: 'Adjustable desk perfect for long hours of work.',
  },
  {
    id: 'office-2',
    name: 'Standing Desk Converter',
    price: 150.00,
    image: '/Standing-Desk.png',
    category: 'Desk',
    description: 'Easily convert your normal desk into a standing one.',
  },
  {
    id: 'office-3',
    name: 'Compact Office Desk',
    price: 180.00,
    image: '/Office-Desk.png',
    category: 'Desk',
    description: 'Minimalist desk ideal for small office spaces.',
  },
];

const Office = () => {
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
      <h1 className="text-lg text-[#D98A76] text-center font-semibold px-4 py-3">Office</h1>
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
