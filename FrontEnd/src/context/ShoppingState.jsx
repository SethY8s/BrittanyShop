import React, { useReducer } from 'react';
import ShoppingContext from './shopping-context';
import shoppingReducer from './shopping-reducer';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
} from './shopping-types';

export default function ShoppingState(props) {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(shoppingReducer, initialState);

  const addToCart = (itemID) => {
    dispatch({
      type: ADD_TO_CART,
      payload: itemID,
    });
  };

  const removeFromCart = (itemID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: itemID,
    });
  };

  const adjustItemQty = (itemID, qty) => {
    dispatch({
      type: ADJUST_QTY,
      payload: itemID,
      qty,
    });
  };

  const loadCurrentItem = (itemID, qty) => {
    dispatch({
      type: LOAD_CURRENT_ITEM,
      payload: itemID,
      qty,
    });
  };

  const value = {
    addToCart,
    removeFromCart,
    adjustItemQty,
    loadCurrentItem,
  };

  return (
    <ShoppingContext.Provider value={{ shopping: state.shopping, value }}>
      {props.children}
    </ShoppingContext.Provider>
  );
}
