import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
} from './shopping-types';



const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );
        console.log(item)
      return {
        
        ...state,
        
        cart : inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };


    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case ADJUST_QTY:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingReducer;
