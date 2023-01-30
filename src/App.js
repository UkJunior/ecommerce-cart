import React from 'react';
import './App.css';
import {cartItem} from './data';
import {useReducer, useState, useEffect} from 'react';

const url = 'https://course-api.com/react-useReducer-cart-project';

const reducer = (state, action) => {

if(action.type === 'DISPLAY'){
  return {...state, cart: action.payload}
} 
if(action.type === 'CLEAR-ITEMS'){
  return {...state, cart: []}
}



}



const initialState = {
  total: 0,
  cart: [],
  price:0,
  loading: false,
}


function App() {
const [state, dispatch] = useReducer(reducer, initialState)
const cartitem =  state.cart

console.log('cartitem :>> ', cartitem);

console.log('state.cart :>> ', state.cart);

const fetchData = async () => {
const response = await fetch(url);
const data = await response.json();
console.log("testing",data);

dispatch({type: 'DISPLAY', payload:data})
}

useEffect(()=>{
  fetchData()
},[])



const removeItem = () =>{
  
}
const increase = (e) =>{
dispatch({type: 'INCREASE', payload: })
}
const decrease = (id) =>{
dispatch({type: 'DECREASE', payload: id})
}
const clearCart = () =>{
dispatch({type: 'CLEAR-ITEMS'})
}



  return (
    <div className="App">
    <div className="Navbar">
    <h1 className='header-title'>useReducer</h1>
    <div className="cart-container">
    <i></i>
    <div className="cart-count">0</div>
    </div>
    </div>
<h1>your bag</h1>

    <main>
    {cartitem.map((cart)=>{
      const {id,price,title,img,amount} = cart;
      return (
      <article key={id} className=''>
      <img src={img} alt={title} style={{maxWidth: 300}}/>
    <div className="item-desc">
    <div>
    <h4>{title}</h4>
    <p>${price}</p>
    <button className="remove-btn" onClick={removeItem}></button>
    </div>

    <div className="item-control">
    <button className='control' onClick={increase}>increase icon</button>
    <h2>{amount}</h2>
    <button className='control' onClick={decrease}>decrease</button>
    </div>
    </div>
      </article>
      )
    })}

   
    <div className="divider-line"></div>

    <div className="price-container">
    <h3>Total</h3>
    <h3 className="total-price">
    $10000
    </h3>
    </div>

    <button className='clear-btn' onClick={clearCart}>clear cart</button>
    </main>
    </div>
  );
}

export default App;
