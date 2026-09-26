import React, { useState, useEffect } from 'react';
import Intro from './intro/Intro';
import Products from './product/Products';
// CHECKOUT DISABLED
// import { ToastContainer, toast } from 'react-toastify';
import Footer from './footer/Footer';
import HomeAboutMe from './aboutMe/HomeAboutMe';

export default function Home() {
  const [message, setMessage] = useState();

  useEffect(() => {
    // CHECKOUT DISABLED — redirect back from Stripe Checkout (canceled)
    // const query = new URLSearchParams(window.location.search);
    //
    // if (query.get('canceled')) {
    //   setMessage(true);
    //
    //   toast.success(" 🦄 Oh wait there's more ;)", {
    //     toastId: '1',
    //     autoClose: 2500,
    //     pauseOnHover: false,
    //   });
    //   // addeed toast in useEffect so it didn't render in cart on refresh
    // }
  }, [message]);

  return (
    <>
      {/* CHECKOUT DISABLED */}
      {/* {message && <ToastContainer position="top-center" />} */}
      <Intro />
      <HomeAboutMe />
      <Products />
      <Footer />
    </>
  );
}
