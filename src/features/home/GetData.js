import './home.css'
import { useState, useEffect } from 'react'

import GetMenuitems from '../menuitem/GetMenuitems'
import GetCarts from '../cart/GetCarts'
import GetUser from '../user/GetUser'
import Spinner from 'react-bootstrap/Spinner';
import { Outlet } from 'react-router-dom';
import GetTaxRate from "../order/GetTaxRate";

const GetData = () =>{
    console.log("ENTER PAGE")

    const [getUser, setGetUser] = useState(false);
    const [getMenuitem, setGetMenuitem] = useState(false);

    console.log("getUser " +getUser)
    console.log("getMenuitem" + getMenuitem)
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
export default GetData