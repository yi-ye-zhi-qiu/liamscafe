import { createContext, useContext, useState } from "react";

const Context = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={[cart, setCart]}>{children}</Context.Provider>
  );
}

export function useCartContext() {
  return useContext(Context);
}
