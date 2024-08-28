import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { shopContext } from "../Context";
import { Toaster } from "sonner";

const ProductCard = () => {
  const { handleAddToCart, items } = useContext(shopContext);

  return (
    <>
      {items.map((item) => (
        <div className="product-card">
          <Toaster richColors position="top-center" />
          <Link to={`${item.id}`}>
            <figure key={item.id}>
              <img className="img-back" src={item.imageBack} alt={item.name} />
              <img
                className="img-front"
                src={item.imageFront}
                alt={item.name}
              />
            </figure>
          </Link>
          <div class="perks">
            <span class="one">{item.perk_one}</span>
            <span class="two">{item.perk_two}</span>
          </div>

          <div class="a-prod-info">
            <div class="brand">{item.brand}</div>
            <div class="name">{item.name}</div>
            <div class="price">
              <p>{item.discount}</p>
              <span>${item.price}</span>
            </div>
            <div className="overlay">
              <button class="add-to-cart" onClick={() => handleAddToCart(item)}>
                ADD TO CART
              </button>
            </div>
            <div className="go-to-single-product">
              <Link to={`${item.id}`}>
                <AiOutlineEye className="view-detail" size={40} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
