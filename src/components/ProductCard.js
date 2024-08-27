import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { cartContext } from "../Context";
import { Toaster } from "sonner";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(cartContext);
  return (
    <div className="product-card">
      <Toaster richColors position="top-right" />

      <figure key={product.id}>
        <img className="img-back" src={product.imageBack} alt={product.name} />
        <img
          className="img-front"
          src={product.imageFront}
          alt={product.name}
        />
      </figure>
      <div class="perks">
        <span class="one">{product.perk_one}</span>
        <span class="two">{product.perk_two}</span>
      </div>

      <div class="a-prod-info">
        <div class="brand">{product.brand}</div>
        <div class="name">{product.name}</div>
        <div class="price">
          <p>{product.discount}</p>
          <span>${product.price}</span>
        </div>
        <div className="overlay">
          <button class="add-to-cart" onClick={() => handleAddToCart(product)}>
            ADD TO CART
          </button>
        </div>
        <div className="go-to-single-product">
          {/* <div className='tooltip'>Go to product page</div> */}
          <Link to={`${product.id}`}>
            <AiOutlineEye className="view-detail" size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
