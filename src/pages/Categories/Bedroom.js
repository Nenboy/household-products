import React from 'react';
import { ProductGrid } from '../../components/ProductGrid';
import { useCartWishlist } from '../../context/CartWishlistContext'; // Adjust path

const bedroomProducts = [
  {
    id: 'bedroom-1',
    name: 'Queen Size Bed',
    price: 650.00,
    image: '/Queen-sized-bed.png',
    category: 'Bedroom',
    description: 'Comfortable queen size bed with solid wood frame.',
  },
  {
    id: 'bedroom-2',
    name: 'Nightstand',
    price: 120.00,
    image: '/Nightstand.png',
    category: 'Bedroom',
    description: 'Classic nightstand with drawer and shelf.',
  },
  {
    id:'bedroom-3',
    name: 'Wardrobe Closet',
    price: 850.00,
    image: '/Wardrobe-closet.png',
    category: 'Bedroom',
    description: 'Spacious wardrobe with sliding doors.',
  },
];

const Bedroom = () => {
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
      <h1 className="text-lg text-[#D98A76] text-center font-semibold px-4 py-3">Bedroom</h1>
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
