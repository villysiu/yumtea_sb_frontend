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
    console.log("in Enter Page")

    // const [show, setShow] = useState(true);
    const [spinner, setSpinner] = useState(false);

    return(
        <>
            
            <GetMenuitems setSpinner={setSpinner} />
            <GetUser setSpinner={setSpinner} />
            <GetCarts />
            <GetTaxRate />
            <ResetApp />

            {spinner ? <Spinner animation="border" className="spinner"/> : <Outlet /> }
        
            
        </>
    )
    
}
export default EnterPage