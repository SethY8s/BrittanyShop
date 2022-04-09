import React, { useState, useEffect, useContext } from 'react';
import shoppingContext from '../../context/shopping-context';
import axios from 'axios';

// const cart = [
//   {
//     id: 1,
//   },
//   {
//     id: 2,
//   },
//   {
//     id: 3,
//   },
// ];

const ProductDisplay = () => {
  const { cart } = useContext(shoppingContext);
  const [loading, setLoading] = useState(false);

//   const carts = [
//     {
//       id: cart[0].id,
//     },
//   ];

const carts = cart.map(el =>{
    return {id: el.id}
})

  console.log(carts);

  async function postCart() {
    setLoading(true);

    try {
      const resp = await axios.post(
        'http://localhost:4000/create-checkout-session',
        {
          carts,
        }
      );
      console.log(resp);

      const { url_ } = resp.data;
      window.location.href = url_;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <button disabled={loading} onClick={postCart}>
        my button
      </button>
    </section>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CartAction() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.');
      console.log(message);
    }

    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      console.log(message);
    }
  }, [message]);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
