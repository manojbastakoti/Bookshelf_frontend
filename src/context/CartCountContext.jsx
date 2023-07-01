import React, { createContext, useState } from "react";

export const CartCountContext = createContext();

export const CartCountProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
 

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <CartCountContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartCountContext.Provider>
  );
};