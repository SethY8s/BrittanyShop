import React, { useState, useEffect } from 'react';
import Intro from './intro/Intro';
import Products from './product/Products';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  toast.success("Oh wait there's more ;)", {
    toastId: 'your-id',
  });

  const [message, setMessage] = useState();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('canceled')) {
      setMessage(true);
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
