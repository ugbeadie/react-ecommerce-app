import { useParams } from 'react-router-dom';
// import { useState } from "react";
import products from '../Data';
import rating from '../assets/rating.jpg'

const SingleProduct = ({handleAddToCart}) => {

  const { productId } = useParams();
  const product = products.find((product) => product.id == productId);
  const { imageFront, name, price } = product;
  return (
    <section className='single-product'>
      <div className='single-prod-container'>
        <div className='left'>
            <div className='big-img'>
                <img src={imageFront} alt={name}/>
            </div>
        </div>

        <div className='right'>
            <h6>Availability: <span>in stock</span></h6>
            <p class="name">{name}</p>
            <div class="rating">
            <img src={rating} alt={name}/>
                <p>(6 Reviews)</p>
            </div>
            <p class="price">{price}</p>
            <p class="desc">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.
            </p>
            <div class="color">
                <h5 class>color: <span>black</span></h5>
                <div class="black"></div>
            </div>
            <div className='cta'>                
                <button
                  onClick={() => handleAddToCart(product)}>
                  ADD TO CART</button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SingleProduct;

{/* <div className='quantity-wrapper'>
                    <button onClick={() => handleDecrement()}
                    className='minus'>-</button>
                    <input className='item-count' type='number' value={count}/>
                    <button onClick={() => setCount(count+1)}
                    className='plus'>+</button>
                </div> */}

                    // const [count, setCount] = useState(1)
    // const handleDecrement = () => {
    //     if (count<=1) {
    //         setCount(1)
    //     }
    //     else {
    //         setCount(count-1)
    //     }
    // }