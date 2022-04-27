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
  LOAD_CURRENT_ITEM,
  REMOVE_ALL_FROM_CART,
} from './shopping-types';

export default function ShoppingState(props) {
  const initialState = {
    products: [
      {
        id: 1,
        title: 'Mama Bear and Cubs',
        description: '24"x12" inch, Acrylic Painting,  on Canvas.',
        descriptionLong: '<h2>hello</h2>',
        price: 450.0,
        image: bear,
      },
      {
        id: 2,
        title: 'Still Pond and Pine',
        description:
          '14"x14" inch, Oil Painting, on Canvas.',
        price: 295.0,
        image:
          stillPond,
      },
      {
        id: 3,
        title: 'Fox in Woods',
        description:
          '18"x14" inch, Oil Painting, on Canvas.',
        price: 340.0,
        image:
          foxInWoods,
      },
      {
        id: 4,
        title: 'Autumn at Glacial',
        description:
          '20"x16" inch, Oil Painting, on Canvas.',
        price: 460.0,
        image: autumn,
      },
      {
        id: 5,
        title: 'Fox Mandala',
        description:
          '10"x10" inch, Acrylic Painting, on Canvas.',
        price: 160.0,
        image: foxMandala,
      },
      {
        id: 6,
        title: 'YellowStone Falls',
        description:
          '16"x20" inch, Oil Painting, on Canvas',
        price: 520.0,
        image: yellowStone,
      },
    ],
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    currentItem: JSON.parse(localStorage.getItem('currentItem') || '{}'),
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
