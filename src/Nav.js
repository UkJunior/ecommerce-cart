import React from 'react';
import { useGlobalContext } from './context';


const Nav = () => {
const {amount} = useGlobalContext()
console.log('amount', amount)
  return (
    <nav >
    <div className="Navbar">
    <h1 className="header-title">useReducer</h1>
    <div className="cart-container">
      <i></i>
      <div className="cart-count">{amount}</div>
    </div>
  </div>
  <h1>your bag</h1>
    </nav>
  )
}

export default Nav;