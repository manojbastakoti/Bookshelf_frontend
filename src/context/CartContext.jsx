import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // You can add functions to manipulate the cart if needed

  return (
    <CartContext.Provider value={{cart,setCart}}>
      {children}
    </CartContext.Provider>
  );
};