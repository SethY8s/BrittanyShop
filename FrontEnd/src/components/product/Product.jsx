import React, { useContext } from 'react';
import productCSS from './product.module.css';

// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import ShoppingContext from '../../context/shopping-context';

export default function Product({ productData }) {
  const { addToCart, loadCurrentItem } = useContext(ShoppingContext);
  return (
    
      <div className={productCSS.productContainer}>
        {/* <div className="d-flex flex-column align-items-center"> */}
        <div className={productCSS.actualproductContainer}> 
          <div className={productCSS.imagebox}>
            <img
              className={productCSS.productImage}
              src={productData.image}
              alt="Paintings"
            />
          </div>
          <h6 className={productCSS.productTitle}>
            {productData.title}(${productData.price})
          </h6>
          <p className='text-center'>{productData.description}</p>
          
            <Link to={`/product:${productData.id}`}>
              <button onClick={() => loadCurrentItem(productData)} className={productCSS.btn}>View Item</button>
            </Link>

            <button onClick={() => addToCart(productData.id)} className={productCSS.btn}>
              Add to Cart
            </button>
          
        </div>
      </div>
    
  );
}
