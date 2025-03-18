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
import CustomizeModal from '../customise/CustomizeModal'
import Messages from "../message/Messages";
import {resetOrderStatus} from "../order/orderSlice";

function Home() {
  console.log("in APP")
  const [show, setShow] = useState(false);
  const {itemToCustomize} = useSelector(state=>state.menuitem)
  // console.log(task)
  const dispatch = useDispatch()
    const location = useLocation()
    console.log(location)

  useEffect(()=>{
    if(itemToCustomize !== null)
      setShow(true)
    
  }, [itemToCustomize])

    useEffect(() => {
        if(location.state === '/secure/ordersuccess'){
            console.log("reset order status")
            dispatch(resetOrderStatus())
        }

    }, [location]);

  const handleHide = () =>{
    setShow(false)
    dispatch(triggerCustomizeModal(null))
  }
  return (
      <>
        {
            show && 
             <Modal show={show} onHide={handleHide} size="lg"  >
                <CustomizeModal handleHide={handleHide} />                
            </Modal>
           
        }
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
