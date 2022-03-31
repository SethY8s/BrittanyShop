import React from 'react'
import cartCSS from './cart.module.css'
import { Button } from 'react-bootstrap'

export default function Cart() {
  return (
    <div className={cartCSS.checkoutContainer}>
          <h4>
            {' '}
            <b>Cart Summary</b>
          </h4>

          <span>
            Total: ()items{' '}
            <span className="m-3">
              <b>$13</b>
            </span>
          </span>
          <Button>Proceed to Checkout</Button>
        </div>
  )
}
