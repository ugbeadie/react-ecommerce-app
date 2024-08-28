import { useState, createContext } from "react";
import { toast } from "sonner";
import products from "./components/Data";

export const shopContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(products);
  const uniqueCategory = [...new Set(products.map((value) => value.category))];

  const filterItems = (category) => {
    const filteredProducts = products.filter(
      (currentItem) => currentItem.category === category
    );
    setItems(filteredProducts);
  };

  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1)
      toast.error(<p className="toast">ALREADY IN CART</p>);
    else {
      setCart([...cart, product]);
      toast.success(<p className="toast">ADDED TO CART</p>);
    }
  };
  return (
    <shopContext.Provider
      value={{
        items,
        setItems,
        uniqueCategory,
        filterItems,
        cart,
        setCart,
        handleAddToCart,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};

export default Context;
