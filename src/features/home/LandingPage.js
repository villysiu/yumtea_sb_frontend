import '../../App.css';
import React from 'react';

import {Outlet} from 'react-router-dom';

import Header from '../headerNav/Header';
import Footer from './Footer'
import { useSelector} from 'react-redux';

import Messages from "../message/Messages";

import OrderSuccessModal from "../order/OrderSuccessModal";
import CustomizeModal from "../customise/CustomizeModal";
import LoadingOverlay from "./LoadingOverlay";

function LandingPage() {
  console.log("in APP")


  const cartStatus = useSelector((state) => state.cart.cart.status);
  const cartAction = useSelector((state) => state.cart.cart.action);
  const {userStatus} = useSelector((state) => state.user);
  const {fetchOrdersStatus, checkoutStatus} = useSelector(state=>state.order);

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
        // ((fetchUserStatus === 'loading' && ["/user/signin", "/user/signup"].includes(location.pathname)) || 
        (userStatus === 'loading' || 
         fetchOrdersStatus === 'loading' || checkoutStatus === 'loading')
        ) && <LoadingOverlay />
       }
          
     
      </>
     
  );
}

export default LandingPage;
