import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    CLEAR_CART,
    TOGGLE_CART,
    VIEW_CART
  } from "./actions";
import { VIEW_CART } from "./queries";
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
        case VIEW_CART:
          return {
            ...state,
            cart: [...state.cart]
          }
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter(product => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: []
        };
  
      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen
        };
  
      default:
        return state;
    }
  };