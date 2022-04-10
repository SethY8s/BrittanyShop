import React, {useState, useEffect} from 'react'
import Intro from './intro/Intro'
import Products from './product/Products'

export default function Home() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);


    if (query.get('canceled')) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      console.log(message);
    }
  }, [message]);


  return (
      <>
    <Intro />
    <Products />
    </>
  )
}
