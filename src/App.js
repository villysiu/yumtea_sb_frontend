import './App.css';
import React, {useEffect} from 'react';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';
import Header2 from './features/headerNav/Header2';
import HomeBackground from './features/home/HomeBackground';
function App() {
  console.log("in APP")

  return (
   
      <div id="App">
          <div className='appbody border border-danger'>
            
              <Header2 />
              
              <Messages />
              <div style={{'height': '4rem'}}></div>
             
              <Outlet />
          </div>
          <HomeBackground />
          
              
      </div>
     
  );
}

export default App;
