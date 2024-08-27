import { useState, createContext } from "react";
import { toast } from "sonner";

export const cartContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1)
      toast.error(<p className="toast">ALREADY IN CART</p>);
    else {
      setCart([...cart, product]);
      toast.success(<p className="toast">ADDED TO CART</p>);
    }
  };
  return (
    <cartContext.Provider value={{ cart, setCart, handleAddToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default Context;
