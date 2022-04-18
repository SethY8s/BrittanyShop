import React, { useContext } from 'react';
import ShoppingContext from '../../context/shopping-context';

import cartItemCSS from './cart.module.css';

export default function CartItem({ itemData }) {
  const { removeFromCart } = useContext(ShoppingContext);

  return (
    <div className={cartItemCSS.cartItemContainer}>
      <div className={cartItemCSS.imageText}>
      <img
        className={` ms-2 ${cartItemCSS.itemImage}`}
        src={itemData.image}
        alt="painting"
      />
      
        <div className={`ms-1 ${cartItemCSS.nameDesc}`}>
        <h6 className={cartItemCSS.title}>{itemData.title}</h6>
        <p className={cartItemCSS.description}>{itemData.description}</p>
        {/* <div className='d-flex justify-content-between'> */}
        <p className={cartItemCSS.priceItemUnderDes}>${itemData.price}</p>
        <p className={`ms-5 ${cartItemCSS.removeItemUnderDes}`}><svg 
          onClick={() => removeFromCart(itemData.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg></p>
        {/* </div> */}
        </div>
        </div>
        <p className={cartItemCSS.priceInItem}>${itemData.price}</p>

        
       <p className={cartItemCSS.removeItem}><svg 
          onClick={() => removeFromCart(itemData.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-trash3-fill"
          viewBox="0 0 16 16"
        >
          <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
        </svg></p>
      </div>
    
  );
}
