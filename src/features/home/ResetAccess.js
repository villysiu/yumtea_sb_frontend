import {useEffect} from "react";
import {clearNewestOrder} from "../order/orderSlice";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
const ResetAccess = () =>{
    console.log("RESET")

    const dispatch = useDispatch();
    const location = useLocation()

    useEffect(() => {
        if(location.state === '/secure/ordersuccess')
            dispatch(clearNewestOrder())
    }, [dispatch, location]);
    return null;
}
export default ResetAccess