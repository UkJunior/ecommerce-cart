import React from "react";
import Nav from "./Nav";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import FadeLoader
from "react-spinners/FadeLoader";

function App() {
  const { loading } = useGlobalContext();

 if(loading){
   return (
     <div className="loading">
     <FadeLoader
     color={'#2680c0'}
     loading={loading}
     size={20}
     aria-label="Loading Spinner"
     data-testid="loader"
   />
     </div>
   )
 }

  return (
        <main>
          <Nav />
          <CartContainer />
        </main>
  );
}

export default App;
