import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { useCartWishlist } from "../../context/CartWishlistContext";

const WishlistSvg = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto mb-4"
  >
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="#D98A76"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Wishlist = () => {
  const { state, dispatch } = useCartWishlist();
  const { wishlistItems, cartItems } = state;

  const onAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    }
  };

  const onToggleWishlist = (product) => {
    if (wishlistItems.find((item) => item.id === product.id)) {
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <h1 className="text-lg text-[#D98A76] text-center font-semibold mb-4">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <WishlistSvg />
          <p className="text-gray-500 text-center">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlistItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isInWishlist={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
