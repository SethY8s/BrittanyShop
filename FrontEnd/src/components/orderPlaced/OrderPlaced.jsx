import React,{ useContext, useEffect, useState } from 'react'
import shoppingContext from '../../context/shopping-context'
import orderCSS from './order.module.css'
// import CartAction from '../cart/CartAction'

export default function OrderPlaced() {
    const { cart, removeAllFromCart } = useContext(shoppingContext)
    const[products, setProducts] = useState()
    console.log(cart)

    useEffect(()=>{
        setProducts(cart)
        removeAllFromCart()
        
    },[])

    console.log(products)


  return (
    // <CartAction />
    <>
    <div className={orderCSS.orderContainer}>

        
        <button onClick={removeAllFromCart}>button</button>

    </div>
    
    
    </>
  )
}
