import './home.css'
import { useState, useEffect } from 'react'

import GetMenuitems from '../menuitem/GetMenuitems'
import GetCarts from '../cart/GetCarts'
import GetUser from '../user/GetUser'
import Spinner from 'react-bootstrap/Spinner';
import { Outlet } from 'react-router-dom';
import GetTaxRate from "../taxRate/GetTaxRate";

const EnterPage = () =>{
    console.log("ENTER PAGE")

    const [getUser, setGetUser] = useState(false);
    const [getMenuitem, setGetMenuitem] = useState(false);

    return(
        <>
            
            <GetMenuitems setGetMenuitem={setGetMenuitem} />
            <GetUser setGetUser={setGetUser} />
            <GetCarts />
            <GetTaxRate />

            {!getUser || !getMenuitem ?
                <Spinner animation="border" className="spinner"/>
                :
                <Outlet />
            }
        
            
        </>
    )
    
}
export default EnterPage