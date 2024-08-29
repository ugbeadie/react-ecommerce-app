import { useContext } from "react";
import { shopContext } from "../../Context";
import "./Shop.css";
import FilterButton from "../FilterButtons";
import ProductCard from "../ProductCard";
import Social from "../Social";
import Footer from "../Footer";

const Shop = () => {
  const { handleAddToCart, items } = useContext(shopContext);

  return (
    <>
      <div className="shop-header">SHOP</div>
      <div class="product-head">
        <h3>
          <span>OUR PRODUCTS</span>
        </h3>
        <p>Find the right fit for you</p>
      </div>
      <div className="filter-btn">
        <FilterButton />
      </div>
      <section className="shop-imgs">
        <ProductCard items={items} handleAddToCart={handleAddToCart} />
      </section>
      <Social />
      <Footer />
    </>
  );
};

export default Shop;
