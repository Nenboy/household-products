import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({ products, onAddToCart, onToggleWishlist, wishlistItems = [] }) => {
  const isInWishlist = (product) =>
    wishlistItems.some((item) => item.id === product.id);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={isInWishlist(product)}
        />
      ))}
    </div>
  );
};
