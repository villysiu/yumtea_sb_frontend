import '../../App.css';
import React, {useEffect} from 'react';

import {Outlet, useLocation} from 'react-router-dom';
// import Messages from './features/message/Messages';

import Header from '../headerNav/Header';
import Footer from './Footer'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Modal} from 'react-bootstrap'

import Messages from "../message/Messages";
import {resetOrderStatus} from "../order/orderSlice";
import Spinner from "react-bootstrap/Spinner";
import OrderSuccessDetails from "../order/OrderSuccessDetails";
import OrderSuccessModal from "../order/OrderSuccessModal";
import CustomizeModal from "../customise/CustomizeModal";
import LoadingOverlay from "./LoadingOverlay";

function Home() {
  console.log("in APP")
  const cartStatus = useSelector((state) => state.cart.cart.status);
  const cartAction = useSelector((state) => state.cart.cart.action);
  // const {fetchUserStatus, loginStatus, logoutStatus, registerStatus, updateStatus} = useSelector(state=>state.user);
const {fetchUserStatus, userStatus} = useSelector((state) => state.user);

  return (
      <>
       <CustomizeModal />
        <OrderSuccessModal />


      <div id="App">
          <div className='appbody border border-danger'>
              <Header />
              <Messages />
              <div className="content" >
                    <Outlet />
              </div>
               <Footer />
          </div>
      </div>
      {
        // Show loading overlay if any of the following conditions are met:
       (
        (cartStatus === 'loading' && cartAction !== 'remove') || 
        (fetchUserStatus === 'loading' || userStatus === 'loading')
        ) && <LoadingOverlay />
       }
              {/* // || loginStatus=== 'loading' ||
              // logoutStatus === 'loading' ||registerStatus === 'loading' ||
              // updateStatus=== 'loading'
        // ) 
      
      // && <LoadingOverlay /> */}
     
      </>
     
  );
}

export default Home;
