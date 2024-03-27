import './App.css';
import React from 'react';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';
import Header2 from './features/headerNav/Header2';

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
              
      </div>
     
  );
}

export default App;
