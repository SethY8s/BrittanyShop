import React, { useContext } from 'react';
import viewCSS from './viewItem.module.css';
import image from '../../images/foxMandala.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import shoppingContext from '../../context/shopping-context';

export default function ViewItem() {
  const { currentItem, addToCart } = useContext(shoppingContext);


  // chose to do it this way to avoid dangerouseInsertHTML
  const descriptionChecker = () => {
    switch (currentItem.id) {
      case 1:
        return <h5>hello</h5>;
      case 2:
        return <h5>there</h5>;
      case 3:
        return <h5>hello</h5>;
      case 4:
        return <h5>hello</h5>;
      case 5:
        return <h5>hello</h5>;
      case 6:
        return <h5>hello</h5>;
      default:
    }
  };

  return (
    <div className={viewCSS.viewItemContainer}>
      <img className={viewCSS.image} src={image} alt="nlkk" />
      <div>
        <h2>{currentItem.title}</h2>
        <h4>${currentItem.price}</h4>
        <div>
          {/* {currentItem.description} */}
          {descriptionChecker()}
        </div>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
        <Button onClick={() => addToCart(currentItem.id)}>Add to Cart</Button>
      </div>
    </div>
  );
}
