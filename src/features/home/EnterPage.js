import './home.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Brand from './Brand'
import GetMenuitems from '../menuitem/GetMenuitems'
import GetCarts from '../cart/GetCarts'
import GetUser from '../user/GetUser'
import ResetApp from './ResetApp'
import Spinner from 'react-bootstrap/Spinner';
import { Outlet } from 'react-router-dom';
import GetTaxRate from "../taxRate/GetTaxRate";

const EnterPage = () =>{
    console.log("ENTER PAGE")

    // const [show, setShow] = useState(true);

    const [getUser, setGetUser] = useState(false);
    const [getMenuitem, setGetMenuitem] = useState(false);

    const [spinner, setSpinner] = useState(!getUser || !getMenuitem);

    useEffect(()=>{
        setSpinner(!getUser || !getMenuitem);

    }, [getUser, getMenuitem])
    return(
        <>
            
            <GetMenuitems setGetMenuitem={setGetMenuitem} />
            <GetUser setGetUser={setGetUser} />
            <GetCarts />
            <GetTaxRate />
            <ResetApp />

            {spinner ?
                <Spinner animation="border" className="spinner"/>
                :
                <Outlet />
            }
        
            
        </>
    )
    
}
export default EnterPage