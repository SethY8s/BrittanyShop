import React, { useContext } from 'react';
import viewCSS from './viewItem.module.css';

import { Link } from 'react-router-dom';

import shoppingContext from '../../context/shopping-context';


export default function ViewItem() {
  const { currentItem, addToCart } = useContext(shoppingContext);

  // chose to do it this way to avoid dangerouseInsertHTML
      const {title, image, description} = currentItem

      
       
          
    
  return (
    // <div className="d-flex justify-content-center">
      <div className={viewCSS.viewItemContainer}>
        <div className={viewCSS.imagecontainer}>
          <img
            className={viewCSS.image}
            src={image}
            alt="current painting"
          />
        </div>
        <div className={viewCSS.viewText}>
          <h2>{title}</h2>
         
            <p>
             {description}
            {/* <div dangerouslySetInnerHTML={{__html: descriptionLong}} /> */}
            {/* If I switch to a DB make sure to use DomPurify */}
            </p>
          
          <span className={`d-flex justify-content-center m-3 ${viewCSS.buttons}`}>
            <Link to="/">
              <button className={viewCSS.btn}>Home</button>
            </Link>
            <button className={viewCSS.btn} onClick={() => addToCart(currentItem.id)}>
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    // </div>
  );
}
