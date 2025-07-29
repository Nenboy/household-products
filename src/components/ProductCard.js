import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export const ProductCard = ({ product, onAddToCart, onToggleWishlist, isInWishlist }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="aspect-square bg-gray-50 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isInWishlist ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400'
          } hover:bg-red-100 hover:text-red-500 transition-colors`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-orange-100 text-orange-600 p-2 rounded-full hover:bg-orange-200 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
