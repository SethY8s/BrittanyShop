import React from 'react'
import Product from './Product'

export default function Products() {
  return (
    <div>
      <h3>Buy Directly</h3>
      <div className='d-flex justify-content-around'>
     <Product />
     <Product />
     <Product />
     </div>

    </div>
  )
}
