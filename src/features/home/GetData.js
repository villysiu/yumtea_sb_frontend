import './home.css'
import { useState, useEffect } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import GetMenuitems from '../menuitem/GetMenuitems'
import GetCarts from '../cart/GetCarts'
import GetTaxRate from '../order/GetTaxRate'
import {Outlet, useLocation} from 'react-router-dom';
import {fetchCurrentUser} from '../user/userSlice'
import LoadingPage from "./LoadingPage";

const GetData = () =>{
    console.log("ENTER PAGE")
    const dispatch = useDispatch();

    const [getMenuitem, setGetMenuitem] = useState(false);
    const location = useLocation()
    const {fetchTaxRateStatus} = useSelector(state => state.order);

    const {currentUser, fetchUserStatus} = useSelector(state => state.user);

    useEffect(()=>{
        if(!currentUser && fetchUserStatus==='idle')
            dispatch(fetchCurrentUser());
    }, [fetchUserStatus, dispatch, currentUser])

    return(
        <>
            <GetMenuitems getMenuitem={getMenuitem} setGetMenuitem={setGetMenuitem} />
            <GetCarts />
            {fetchTaxRateStatus !== 'succeeded' && <GetTaxRate /> }
            {
                ["/", "/visit-taste", "/support"].includes(location.pathname) ?
                    <Outlet/> :
                    (fetchUserStatus === 'loading' || !getMenuitem) ? <LoadingPage />:<Outlet/>
            }


        </>
    )

}
export default GetData