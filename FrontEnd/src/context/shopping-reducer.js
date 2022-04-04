import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOAD_CURRENT_ITEM,
  ADJUST_QTY,
} from './shopping-types';

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
          
      };
    case REMOVE_FROM_CART:
      return {};
    case LOAD_CURRENT_ITEM:
      return {};
    case ADJUST_QTY:
      return {};
    default:
      return state;
  }
};

export default shoppingReducer;
