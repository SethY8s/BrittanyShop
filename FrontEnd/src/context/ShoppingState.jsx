import React, { useReducer, useEffect } from 'react';
import ShoppingContext from './shopping-context';
import shoppingReducer from './shopping-reducer';
import bear from '../images/bear.jpg'
import stillPond from '../images/stillPond.jpg'
import foxInWoods from '../images/foxInWoods.jpg'
import autumn from '../images/autumnAtGlacial.jpg'
import foxMandala from '../images/foxMandala.jpg';
import yellowStone from '../images/yellowStoneFalls.jpg'

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
        title: 'Mama Bear and Cubs',
        description: 'Get a big cup of coffee every morning before the day starts',
        price: 420.0,
        image: bear,
      },
      {
        id: 2,
        title: 'Still Pond and Pine',
        description:
          'Get a big cup of coffee every morning before the day starts',
        price: 220.0,
        image:
          stillPond,
      },
      {
        id: 3,
        title: 'Fox in Woods',
        description:
          'These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people',
        price: 280.0,
        image:
          foxInWoods,
      },
      {
        id: 4,
        title: 'Autumn at Glacial',
        description:
          'This cube will keep you busy the entire day and it is very fun to play with',
        price: 295.0,
        image: autumn,
      },
      {
        id: 5,
        title: 'Fox Mandala',
        description:
          'This cube will keep you busy the entire day and it is very fun to play with',
        price: 120.0,
        image: foxMandala,
      },
      {
        id: 6,
        title: 'YellowStone Falls',
        description:
          'This cube will keep you busy the entire day and it is very fun to play with',
        price: 496.0,
        image: yellowStone,
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
