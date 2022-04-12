import React, { useContext, useEffect, useState } from 'react';
import shoppingContext from '../../context/shopping-context';
import orderCSS from './order.module.css';
import { Link } from 'react-router-dom'
// import CartAction from '../cart/CartAction'
import foxLogo from './Fox2.jpg';
import { ToastContainer, toast } from 'react-toastify';

export default function OrderPlaced() {
  const { cart, removeAllFromCart } = useContext(shoppingContext);
  const [products, setProducts] = useState();
  console.log(cart);

  useEffect(() => {
    setProducts(cart);
    removeAllFromCart();
  }, []);

  toast.success("Confirmed!", {
    toastId: '1',
    autoClose: 2000,
  });

  console.log(products);

  return (
    // <CartAction />
    <>
      <div className={orderCSS.OrderContainer}>
        <img className={orderCSS.orderImg} src={foxLogo} alt="Fox Painting" />
        <h3 className={orderCSS.Thankyou}>Thank you</h3>
        <p className={orderCSS.text}>Order placed! You will receive an email confirmation shortly.</p>
        <Link to='/'><button id={orderCSS.home} className='mt-2'>Home</button></Link>
        <ToastContainer />
      </div>
    </>
  );
}
