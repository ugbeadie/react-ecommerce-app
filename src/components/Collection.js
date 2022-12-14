import React from 'react'
import { Link } from "react-router-dom";
import autumn from './assets/collection/autumn.jpg'
import collection from './assets/collection/collection.png'
import summer from './assets/collection/summer.jpg'

const Collection = () => {
  return (
    <div className='collection-container'>
        <div class="collection-head">
            <h3><span>SPEED SALES</span></h3>
            <p>Hurry and grab yours</p>
        </div>
        <div className='collections'>
            <div className='collection'>
            <Link to="/shop">
            <div className='zoom'>
                <figure>
                    <img src={autumn} alt='autumn'/>
                </figure>
                <div className='first text'>
                    <p>AUTUMN <span>2022</span></p>
                    <h6>NEW ARRIVALS</h6>  
                </div>
            </div>
            </Link>
            </div>

            <div className='collection'>
            <Link to="/shop">
                <div className='zoom'>
                <figure>
                    <img src={collection} alt='new collection'/>
                </figure>
                    <div className='second text'>
                        <p>NEW COLLECTION</p>
                        <h6><span>STREETSTYLE</span></h6>
                    </div>
                </div>
            </Link>
            </div>
            
            <div className='collection'>
                <Link to="/shop">
                <div className='zoom'>
                    <figure>
                        <img src={summer} alt='summer'/>
                    </figure>
                    <div className='third text'>
                        <p>GREAT SUMMER SALES</p>
                        <h6>GET UP <span>TO 70%</span></h6>
                    </div>
                </div>
            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Collection