import React, { useReducer, useEffect } from 'react';
import ShoppingContext from './shopping-context';
import shoppingReducer from './shopping-reducer';
import bear from '../images/bear.jpg';
import autumn from '../images/autumnAtGlacial.jpg';
import ocean from '../images/ocean.jpg';
import owl from '../images/owl.jpg';
import lake from '../images/lake.jpg';
import faces from '../images/faces.jpg';
import snail from '../images/snail.jpg';
import vermont from '../images/vermont.jpg';
import fox from '../images/fox.jpg';
import stars from '../images/stars.jpg';
import vermontWaterfall from '../images/vermontWaterfall.jpg';
import togetherAgain from '../images/togetherAgain.jpg';
import eyes from '../images/eyes.jpg';
import cosmosSeeker from '../images/cosmosSeeker.jpg';
import roundOwl from '../images/roundOwl.jpg';

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
        title: 'Autumn at Glacial',
        description: '20"x16" inch, Oil Painting, on Canvas.',
        price: 460.0,
        image: autumn,
      },
      {
        id: 3,
        title: 'Ocean',
        description:
          '20"x30" inch, Oil on canvas mounted on wood. $700 original. Prints available, shipping included: 12x18 inches $110, 16x24 inches $115, 20x30 inches $120.',
        price: 700.0,
        image: ocean,
      },
      {
        id: 4,
        title: 'Owl',
        description:
          '8"x17" inch, Oil on wood with natural elements: bark, drift wood, lichen, moss, leaves, crystals. Built in frame. Original $300.',
        price: 300.0,
        image: owl,
      },
      {
        id: 5,
        title: 'Lake',
        description:
          '24"x18" inch, Oil on canvas. $400 original. Prints available, shipping included: 12x18 inches $110, 16x24 inches $115, 20x30 inches $120.',
        price: 400.0,
        image: lake,
      },
      {
        id: 6,
        title: 'Faces',
        description:
          '8.5"x12.5" inch, Oil on canvas on wood. Prints available, shipping included: 12x18 inches $110, 16x24 inches $115, 20x30 inches $120.',
        price: 0,
        image: faces,
      },
      {
        id: 7,
        title: 'Snail',
        description:
          '8.25"x12" inch, Oil on wood with natural elements: flower, smoky quartz, fern epoxy. Original $200.',
        price: 200.0,
        image: snail,
      },
      {
        id: 8,
        title: 'Vermont',
        description:
          '14"x26" inch with frame, Oil on canvas on wood with natural elements: river rocks from Vermont. Frame built in. Original $500.',
        price: 500.0,
        image: vermont,
      },
      {
        id: 9,
        title: 'Fox',
        description:
          '12.5"x12" inch, Oil on wood with natural elements: ferns, marigolds, smoky quartz, epoxy. Original $300.',
        price: 300.0,
        image: fox,
      },
      {
        id: 10,
        title: 'Stars',
        description: '30"x24" inch.',
        price: 0,
        image: stars,
      },
      {
        id: 11,
        title: 'Vermont Waterfall',
        description:
          '16"x20" inch, Oil on canvas with gold leaf. Original $300.',
        price: 300.0,
        image: vermontWaterfall,
      },
      {
        id: 12,
        title: 'Together Again',
        description:
          'Oil on canvas. Prints available, shipping included: 12x18 inches $110, 16x24 inches $115, 20x30 inches $120.',
        price: 0,
        image: togetherAgain,
      },
      {
        id: 13,
        title: 'Eyes',
        description:
          '11"x14" inch, Oil on canvas. Original $300. Prints available.',
        price: 300.0,
        image: eyes,
      },
      {
        id: 14,
        title: 'Cosmos Seeker',
        description:
          '12"x18" inch, Oil on canvas on wood. Original $700. Prints available, shipping included: 12x18 inches $110, 16x24 inches $115, 20x30 inches $120.',
        price: 700.0,
        image: cosmosSeeker,
      },
      {
        id: 15,
        title: 'Round Owl',
        description:
          'Approx 12" diameter, Acrylic and oil on canvas and wood. Original $250.',
        price: 250.0,
        image: roundOwl,
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
