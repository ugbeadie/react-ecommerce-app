import { useContext } from "react";
import { shopContext } from "../../Context";
import { useParams } from "react-router-dom";
import { Toaster } from "sonner";
import "./SingleProduct.css";
import products from "../Data";
import rating from "../assets/rating.jpg";
import Social from "../Social";
import Footer from "../Footer";

const SingleProduct = () => {
  const { handleAddToCart } = useContext(shopContext);

  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const { imageFront, name, brand, discount, price, save, reviews, color } =
    product;
  return (
    <>
      <Toaster richColors position="top-center" />
      <section className="single-product">
        <div className="single-prod-container">
          <div className="left">
            <div className="big-img">
              <img src={imageFront} alt={name} />
            </div>
          </div>

          <div className="right">
            <h6>
              Availability: <span>in stock</span>
            </h6>
            <p class="name">{name}</p>
            <p className="brand">
              Brand: <span>{brand}</span>
            </p>
            <div class="rating">
              <img src={rating} alt={name} />
              <p>({reviews} Reviews)</p>
            </div>
            <div class="price">
              <p>{discount}</p>
              <span>${price}</span>
            </div>
            <p class="save">{save}</p>
            <p class="desc">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis
            </p>
            <div class="color">
              <h5 class>
                color: <span>{color}</span>
              </h5>
            </div>
            <div className="cta">
              <button onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <Social />
      <Footer />
    </>
  );
};

export default SingleProduct;
