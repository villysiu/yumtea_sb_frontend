import './home.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Brand from './Brand'
import MenuitemApp from '../menuitem/MenuitemApp'
import CartApp from '../cart/CartApp'
import UserApp from '../user/UserApp'
import ResetApp from './ResetApp'
import Spinner from 'react-bootstrap/Spinner';
import { Outlet } from 'react-router-dom';

const EnterPage = () =>{
    console.log("in Enter Page")

    const [show, setShow] = useState(true);
    const [spinner, setSpinner] = useState(false);

    return(
        <>
            
            <MenuitemApp setSpinner={setSpinner}/>
            <UserApp />
            {/* <CartApp /> */}
            <ResetApp />

            <Outlet />
        
            
        </>
    )
    
}
export default EnterPage