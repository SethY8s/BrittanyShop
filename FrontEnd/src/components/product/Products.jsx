import React, { useContext } from 'react'
import Product from './Product'
import productCSS from './product.module.css'

import ShoppingContext from '../../context/shopping-context';



export default function Products() {

  const {shopping} = useContext(ShoppingContext)

  return (
    <div id="art">
      <h3 className={productCSS.buyDirectly}>Buy Directly</h3>
      <div className={productCSS.parentContainer}>
     {shopping.map(product => (
       <Product key={product.id} productData={product}/>
     ))}
     </div>

    </div>
  )
}
