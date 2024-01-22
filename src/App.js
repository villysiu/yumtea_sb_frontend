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
    const dispatch=useDispatch();
    const current_user = useSelector(state => state.user.current_user)
  
    const cart = useSelector(state => {
      console.log(state)
      return state.cart.cart
    })
    
    useEffect(()=>{
      console.log("user login I am in APP.ks")
      if(localStorage.getItem('token') && current_user.username===null){
          dispatch(fetchCurrentUser())
      }
      if(current_user.username && cart.status === 'idle' ){
          console.log("there is an user and api cart not fetched ('idle)")
          dispatch(fetchCart())
          .then(()=>{
             dispatch(batchAddItems())
          })
      }
  }, [dispatch, current_user.username, cart.cart_arr])
    
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
