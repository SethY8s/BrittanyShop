import React, { useContext } from 'react';
import productCSS from './product.module.css';

// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ShoppingContext from '../../context/shopping-context';

export default function Product({ productData }) {
  const { addToCart, loadCurrentItem } = useContext(ShoppingContext);
  return (
    
      <div className={productCSS.productContainer}>
        <div className="d-flex flex-column align-items-center">
          <div className={productCSS.imagebox}>
            <img
              className={productCSS.productImage}
              src={productData.image}
              alt="nlkk"
            />
          </div>
          <h6>
            {productData.title}(${productData.price})
          </h6>
          <p>{productData.description}</p>
          
            <Link to={`/product:${productData.id}`}>
              <button onClick={() => loadCurrentItem(productData)} className={productCSS.btn}>View Item</button>
            </Link>

            <button className={productCSS.btn} onClick={() => addToCart(productData.id)}>
              Add to Cart
            </button>
          
        </div>
      </div>
    
  );
}
