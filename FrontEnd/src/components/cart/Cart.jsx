import React, { useContext, useState, useEffect } from 'react';
import cartCSS from './cart.module.css';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

import ShoppingContext from '../../context/shopping-context';

export default function Cart() {
  const[totalPrice, setTotalPrice] = useState(0)

  const { cart } = useContext(ShoppingContext);


  useEffect(()=>{
    let price = 0;

    cart.forEach(item => price = price + item.price)

    setTotalPrice(price)
  }, [cart, setTotalPrice, totalPrice])
  // adding these dependencies makes it so when you delete an item in cart the component refreshes showing real price

  
  
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
            <p>{totalPrice}</p>
          </span>
        </span>
        <Button>Proceed to Checkout</Button>
      </div>
        </div>
    </>
  );
}
