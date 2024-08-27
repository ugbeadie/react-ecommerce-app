import React, { useContext } from "react";
import { cartContext } from "../Context";
import { Link } from "react-router-dom";
import "../App.css";
import products from "./Data";
import ProductCard from "./ProductCard";
import { Toaster, toast } from "sonner";

const Products = () => {
  const { cart, setCart } = useContext(cartContext);

  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1)
      toast.error(<div style={{ padding: "20px" }}>ALREADY IN CART</div>);
    else {
      setCart([...cart, product]);
      toast.success(<div style={{ padding: "20px" }}>ADDED TO CART</div>);
    }
  };

  return (
    <>
      <Toaster richColors position="top-right" />
      <div className="products">
        <div className="product-container">
          <div className="product-head">
            <h3>
              <span>TRENDING</span>
            </h3>
            <p>Top view this week</p>
          </div>
          <div className="product-imgs">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="go-to-shop">
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <button>go to shop</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
