import React from "react";
import Nav from "./Nav";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <CartItem />
    </div>
  );
}

export default App;
