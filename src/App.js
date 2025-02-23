import './App.css';
import React, {useEffect} from 'react';

import { Outlet } from 'react-router-dom';
// import Messages from './features/message/Messages';

import Header from './features/headerNav/Header';
import Footer from './features/home/Footer'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {Modal} from 'react-bootstrap'
import {triggerCustomizeModal} from './features/menuitem/menuitemSlice'
import CustomizeModal from './features/customise/CustomizeModal'
import Messages from "./features/message/Messages";

function App() {
  console.log("in APP")
  const [show, setShow] = useState(false);
  const {itemToCustomize} = useSelector(state=>state.menuitem)
  // console.log(task)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(itemToCustomize !== null)
      setShow(true)
    
  }, [itemToCustomize])

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

export default App;
