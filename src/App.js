import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './features/user/userSlice';
import Header from './features/headerNav/Header';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';
// import { addItemToCart } from './features/cart/cartSlice';
import { fetchCart } from './features/cart/cartSlice';

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

          // if(cart.cart_arr.length > 0){
              
          //     for(let item of cart.cart_arr){
          //         console.log(item)
          //         dispatch(addItemToCart({'menuitem': item.menuitem_id, 'quantity': item.quantity}) )
          // }}
          // dispatch(fetchCart())
      }
  }, [dispatch, current_user.username, cart.cart_arr])
    
  return (
   
      <div id="App">
        <div className='appbody border border-danger'>
        
           <Header />
          <div style={{height: '6rem'}}></div>
         <Messages />
         
          <Outlet />
              
      
        </div>
      </div>
     
  );
}

export default App;
