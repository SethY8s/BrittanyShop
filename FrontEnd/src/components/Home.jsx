import React, { useState, useEffect } from 'react';
import Intro from './intro/Intro';
import Products from './product/Products';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  

  const [message, setMessage] = useState();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('canceled')) {
      setMessage(true);

      toast.success("Oh wait there's more ;)", {
        toastId: '1',
      });
      // addeed toast in useEffect so it didn't render in cart on refresh
    }
  }, [message]);

  return (
    <>
      <Intro />
      <Products />
      {message && <ToastContainer />}
    </>
  );
}
