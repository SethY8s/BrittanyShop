import React, { useContext, useState, useEffect } from 'react';
import cartCSS from './cart.module.css';
import CartItem from './CartItem';
import CartAction from './CartAction';
// import Footer from '../footer/Footer';

import ShoppingContext from '../../context/shopping-context';

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useContext(ShoppingContext);

  useEffect(() => {
    let price = 0;

    cart.forEach((item) => (price = price + item.price));

    setTotalPrice(price);
  }, [cart]);
  // [cart, setTotalPrice, totalPrice] was this but delted state to make it render only twice instead of three times
  // adding these dependencies makes it so when you delete an item in cart the component refreshes showing real price

  // console.log(cart)

  return (
    <>
      <div className={cartCSS.checkoutBox}>
        {/* div below is for text under cart summary */}
        <div className={cartCSS.textUnderCart}>
        <div className={cartCSS.checkoutContainer}>
          <h4 className={cartCSS.cartSummaryText}>
            <b>Cart Summary</b>
          </h4>

          {cart.map((el) => (
            <div className={cartCSS.itemsinCheckoutCart}>
              <p>{el.title}</p>

              <p>
                <b>${el.price}</b>
              </p>
            </div>
          ))}

          <div className={cartCSS.cartActionAndPrice}>
            <div className=" w-100 d-flex justify-content-between mb-2">
              <p><b>({cart.length} items) Total Price:</b></p>
              <p><b>${totalPrice}</b></p>
            </div>
            <CartAction />
          </div>
        </div>
        <p className={cartCSS.stripeText}>CheckOut is Through Stripe Payment</p>
        </div>
        {/* items */}
        <div className={cartCSS.EditCart}>
          <h4>Edit Cart</h4>
          <span className={cartCSS.priceRemove}>
            <p className="m-0">Edit Cart Beofore CheckOut</p>
            <p className={cartCSS.priceAdjustment}>Price ($USD)</p>
            <p className="m-0 me-3">Remove</p>
          </span>
          {cart.map((item) => (
            <CartItem key={item.id} itemData={item} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
