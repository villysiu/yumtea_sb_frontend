import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './features/user/userSlice';
import Header from './features/headerNav/Header';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';
// import { addItemToCart } from './features/cart/cartSlice';
import { fetchCart } from './features/cart/cartSlice';
import { batchAddItems } from './features/cart/cartSlice';
import Header2 from './features/headerNav/Header2';
function App() {
  console.log("in APP")
    
  
    // const cart = useSelector(state => state.cart.cart)
    
    
    

  return (
   
      <div id="App">
          <div className='appbody border border-danger'>
          
              <Header2 />
              <div style={{height: '4rem'}}></div>
              <Messages />
            
              <Outlet />
          </div>
      </div>
     
  );
}

export default App;
