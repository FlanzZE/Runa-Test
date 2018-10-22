import {ProductSearch} from './components/productSearch'
const loadProducts = () => {
  const products = ProductSearch;
  console.log(products)
  return { type: "REPLACE_PRODUCTS", products: products };
};

const removeLoader = (product) => {
  return { type: "REMOVE_LOADER", product };
};
const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};

const removeFromCart = (product) => {
  return { type: "REMOVE_FROM_CART", product };
};

export { loadProducts, addToCart, removeFromCart,removeLoader };
