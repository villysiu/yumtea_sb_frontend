import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './features/user/userSlice';
import Header from './features/headerNav/Header';

import { Outlet } from 'react-router-dom';
import Messages from './features/message/Messages';

function App() {
  console.log("in APP")
    const dispatch=useDispatch();
    const {current_user} = useSelector(state => state.user)

    useEffect(()=>{

      if(localStorage.getItem("token"))
        dispatch(fetchCurrentUser())

    }, [dispatch])
  return (
    <>
      {console.log(current_user)}
      <div className="App">
          <Header />
          <Messages />
          <div>
              <Outlet />
              
          </div>
      </div>
      </>
  );
}

export default App;
