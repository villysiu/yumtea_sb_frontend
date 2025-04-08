import '../../App.css';
import React, {useEffect} from 'react';

import {Outlet, useLocation} from 'react-router-dom';
// import Messages from './features/message/Messages';

import Header from '../headerNav/Header';
import Footer from './Footer'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {triggerCustomizeModal} from '../menuitem/menuitemSlice'
import CustomizeDetails from '../customise/CustomizeDetails'
import Messages from "../message/Messages";
import {resetOrderStatus} from "../order/orderSlice";
import Spinner from "react-bootstrap/Spinner";
import OrderSuccessDetails from "../order/OrderSuccessDetails";
import OrderSuccessModal from "../order/OrderSuccessModal";
import CustomizeModal from "../customise/CustomizeModal";

function Home() {
  console.log("in APP")


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
      </>
     
  );
}

export default Home;
