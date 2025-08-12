import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartWishlistContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  wishlistItems: JSON.parse(localStorage.getItem('wishlistItems')) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.cartItems.find(item => item.id === action.payload.id)) return state;
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    case 'ADD_TO_WISHLIST':
      if (state.wishlistItems.find(item => item.id === action.payload.id)) return state;
      return { ...state, wishlistItems: [...state.wishlistItems, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
}

export const CartWishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems));
  }, [state.cartItems, state.wishlistItems]);

  return (
    <CartWishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => useContext(CartWishlistContext);
