import React, { useState, useReducer } from 'react';

import ShopContext from './shop-context';
import appReducer, { ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = (props) => {
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 },
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(appReducer, { cart: [] });

  const addProductToCart = (product) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product });
    }, 700);
  };

  const removeProductFromCart = (productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
