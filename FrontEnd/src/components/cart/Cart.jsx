import React, { useContext } from 'react';
import cartCSS from './cart.module.css';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

import ShoppingContext from '../../context/shopping-context';

export default function Cart() {
  
  const { cart } = useContext(ShoppingContext);
  console.log(cart)
  return (
    <>
    <div className={cartCSS.checkoutBox}>
    {cart.map((item) => (
          <CartItem key={item.id} itemData={item}/>
        ))}
      <div className={cartCSS.checkoutContainer}>
        <h4>
          {' '}
          <b>Cart Summary</b>
        </h4>

        <span>
          Total: ()items{' '}
          <span className="m-3">
            <b>$13</b>
          </span>
        </span>
        <Button>Proceed to Checkout</Button>
      </div>
        </div>
    </>
  );
}
