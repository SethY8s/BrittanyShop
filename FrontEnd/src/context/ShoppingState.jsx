import React from 'react'
import ShoppingContext from './shopping-context';

export default function ShoppingState(props) {
  return (
    <ShoppingContext.Provider value={}>
        {props.children}

    </ShoppingContext.Provider>
  )
}
