import { createStore } from 'redux';

const initialState = {
  products: [],
  cart: [],
  loading:true
};

const reducer = (state=initialState, action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return {
      ...state,
      products: action.products
    };
  } else if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: state.cart.concat(action.product)
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== action.product.id)
    }
  }
   else if (action.type === "REMOVE_LOADER") {
    return {
      ...state,
      loading:false
    }
  }

  return state;
};

export default createStore(reducer);
