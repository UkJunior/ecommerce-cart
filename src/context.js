import React from "react";
import { useState,useReducer, useEffect, useContext } from "react";
import { cartItem } from "./data";
import { reducer } from "./reducer";

let url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  amount: 0,
  total: 0,
  cart: cartItem,
  loading: false,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = (id) =>{
      dispatch({type: 'INCREASE', payload: id})
  }
  const decrease = (id) =>{
      dispatch({type: 'DECREASE', payload: id})
  }
  const removeItem = (id) =>{
      dispatch({type: 'REMOVE-ITEM', payload: id})
  }
  const clearCart = () =>{
      dispatch({type: 'CLEAR-ITEMS'})
  }

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("testing", data);
    dispatch({ type: "DISPLAY", payload: data });

  };

  useEffect(() => {
    fetchData();  
  }, []);

  useEffect(()=>{
      dispatch({type: 'GET-TOTAL'})
  },[state.cart])

  return <AppContext.Provider value={{...state,increase,decrease,removeItem,clearCart}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export default AppProvider;
