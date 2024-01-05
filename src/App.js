// import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, loginUser } from './features/user/userSlice';

import Button from 'react-bootstrap/Button';
function App() {
  console.log("in APP")
    const dispatch=useDispatch();

    const {status, username} = useSelector(state => {
        console.log(state)
        return state.user.current_user
    })
   
    
    useEffect(()=>{
        if(localStorage.getItem("token") && status==='idle'){
            console.log('get username')
            dispatch(fetchCurrentUser())
        }
        // if(status === 'failed' ){
        //     console.log("in use effect?")
        //     dispatch(loginUser())
        // }
        
    },[dispatch, status, username])
  return (
      <div className="App">
          <header className="App-header">
              Little D Wine 
          </header>
          <div>
              <h1>Hello {username}</h1>
              <p>wine is listing here soon</p>
              
          </div>
      </div>
  );
}

export default App;
