import React, { useContext } from 'react';
import viewCSS from './viewItem.module.css';

import { Link } from 'react-router-dom';

import shoppingContext from '../../context/shopping-context';

export default function ViewItem() {
  const { currentItem, addToCart } = useContext(shoppingContext);

  // chose to do it this way to avoid dangerouseInsertHTML
  const descriptionChecker = () => {
    switch (currentItem.id) {
      case 1:
        return (
          <>
            <h6>24"x12" inch</h6>
            <p>
              On a permium canvas, Shipped securely on cardboard and bublewrap.
            </p>
            <h6>Acrylic Paint</h6>
            <p>
              I only use the finnest Arcylic paint. Colors used:
              blablablablabsadmldsl, dasmlsd, dsakldsa, daskmsda, adssad dsadsa
            </p>
            <p>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Debitis, perferendis ea? Dolore iure aut minima, eveniet vel
              cupiditate amet dolor. Quam pariatur qui perspiciatis velit
              repellat. Eaque dolores neque eum!Description: Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Debitis, perferendis ea?
              Dolore iure aut minima, eveniet vel cupiditate amet dolor. Quam
              pariatur qui perspiciatis velit repellat. Eaque dolores neque
              eum!Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, perferendis ea? Dolore iure aut minima,
              eveniet vel cupiditate amet dolor. Quam pariatur qui perspiciatis
              velit repellat. Eaque dolores neque eum!Description: Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Debitis, perferendis
              ea? Dolore iure aut minima, eveniet vel cupiditate amet dolor.
              Quam pariatur qui perspiciatis velit repellat. Eaque dolores neque
              eum!Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, perferendis ea? Dolore iure aut minima,
              eveniet vel cupiditate amet dolor. Quam pariatur qui perspiciatis
              velit repellat. Eaque dolores neque eum!
            </p>
          </>
        );
      case 2:
        return (
          <>
            <h6>24"x12" inch</h6>
            <p>
              On a permium canvas, Shipped securely on cardboard and bublewrap.
            </p>
            <h6>Acrylic Paint</h6>
            <p>
              I only use the finnest Arcylic paint. Colors used:
              blablablablabsadmldsl, dasmlsd, dsakldsa, daskmsda, adssad dsadsa
            </p>
            <p>
              Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Debitis, perferendis ea? Dolore iure aut minima, eveniet vel
              cupiditate amet dolor. Quam pariatur qui perspiciatis velit
              repellat. Eaque dolores neque eum!Description: Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Debitis, perferendis ea?
              Dolore iure aut minima, eveniet vel cupiditate amet dolor. Quam
              pariatur qui perspiciatis velit repellat. Eaque dolores neque
              eum!Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, perferendis ea? Dolore iure aut minima,
              eveniet vel cupiditate amet dolor. Quam pariatur qui perspiciatis
              velit repellat. Eaque dolores neque eum!Description: Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Debitis, perferendis
              ea? Dolore iure aut minima, eveniet vel cupiditate amet dolor.
              Quam pariatur qui perspiciatis velit repellat. Eaque dolores neque
              eum!Description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Debitis, perferendis ea? Dolore iure aut minima,
              eveniet vel cupiditate amet dolor. Quam pariatur qui perspiciatis
              velit repellat. Eaque dolores neque eum!
            </p>
          </>
        );
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
    <div className=" d-flex justify-content-center">
      <div className={viewCSS.viewItemContainer}>
        <div className={viewCSS.imagecontainer}>
          <img
            className={viewCSS.image}
            src={currentItem.image}
            alt="current painting"
          />
        </div>
        <div className={viewCSS.viewText}>
          <h2>{currentItem.title}</h2>
          {descriptionChecker()}
          <span className='d-flex justify-content-center m-3'>
            <Link to="/">
              <button className={viewCSS.btn}>Home</button>
            </Link>
            <button className={viewCSS.btn} onClick={() => addToCart(currentItem.id)}>
              Add to Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
