import React, { useReducer, useEffect } from 'react';
import ShoppingContext from './shopping-context';
import shoppingReducer from './shopping-reducer';
import image from '../images/fox1.jpg';
// can import images here and manually put them in state
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  // ADJUST_QTY,
  LOAD_CURRENT_ITEM,
  REMOVE_ALL_FROM_CART,
} from './shopping-types';

export default function ShoppingState(props) {
  const initialState = {
    products: [
      {
        id: 1,
        title: 'Rubix Cube',
        description:
          'This cube will keep you busy the entire day and it is very fun to play with',
        price: 15.0,
        image: image,
      },
      {
        id: 2,
        title: 'Large Coffee Cup',
        description:
          'Get a big cup of coffee every morning before the day starts',
        price: 20.0,
        image:
          'https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      },
      {
        id: 3,
        title: '10 Books',
        description:
          'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
        price: 150.0,
        image:
          'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80',
      },
    ],
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    currentItem: JSON.parse(localStorage.getItem('currentItem') || '[]'),
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

  const removeAllFromCart = () => {
    dispatch({
      type: REMOVE_ALL_FROM_CART,
      
    });
  };

  // const adjustItemQty = (itemID, qty) => {
  //   dispatch({
  //     type: ADJUST_QTY,
  //     payload: itemID,
  //     qty,
  //   });
  // };

  const loadCurrentItem = (itemID, qty) => {
    dispatch({
      type: LOAD_CURRENT_ITEM,
      payload: itemID,
      qty,
    });
  };

  const value = {
    shopping: state.products,
    cart: state.cart,
    currentItem: state.currentItem,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    // adjustItemQty,
    loadCurrentItem,
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('currentItem', JSON.stringify(state.currentItem));
  }, [state.currentItem]);

  return (
    <ShoppingContext.Provider value={value}>
      {props.children}
    </ShoppingContext.Provider>
  );
}
