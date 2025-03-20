import './home.css'
import { useState, useEffect } from 'react'

import GetMenuitems from '../menuitem/GetMenuitems'
import GetCarts from '../cart/GetCarts'
import GetUser from '../user/GetUser'
import {Outlet, useLocation} from 'react-router-dom';
import GetTaxRate from "../order/GetTaxRate";
import LoadingPage from "./LoadingPage";

const GetData = () =>{
    console.log("ENTER PAGE")

    const [getUser, setGetUser] = useState(false);
    const [getMenuitem, setGetMenuitem] = useState(false);
    const location = useLocation()
    console.log(location)
    console.log("getUser " +getUser)
    console.log("getMenuitem" + getMenuitem)
    return(
        <>
            <GetMenuitems setGetMenuitem={setGetMenuitem} />
            <GetUser setGetUser={setGetUser} />
            <GetCarts />
            <GetTaxRate />


            {!getUser || !getMenuitem ?
                <LoadingPage />
                :
                <Outlet/>
            }


        </>
    )

}
export default GetData