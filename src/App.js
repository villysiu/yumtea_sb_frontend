import './App.css';
import React, {useEffect} from 'react';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';
// import Header2 from './features/headerNav/Header2';
import Header from './features/headerNav/Header';
import Footer from './features/home/Footer'

function App() {
  console.log("in APP")

  return (
   
      <div id="App">
          <div className='appbody border border-danger'>
            
              <Header />
              
              <Messages />
              {/* <div style={{'height': '6rem'}}></div> */}
              <div className="content" >
              <Outlet />
              
              </div>
              <Footer />
          </div>

          
              
      </div>
     
  );
}

export default App;
