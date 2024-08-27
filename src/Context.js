import { useState, createContext } from "react";
import { Toaster, toast } from "sonner";

export const cartContext = createContext();

const Context = ({ children }) => {
  <Toaster richColors position="top-right" />;

  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1)
      toast.error(<div style={{ padding: "20px" }}>ALREADY IN CART</div>);
    else {
      setCart([...cart, product]);
      toast.success(<div style={{ padding: "20px" }}>ADDED TO CART</div>);
    }
  };
  return (
    <cartContext.Provider value={{ cart, setCart, handleAddToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default Context;
