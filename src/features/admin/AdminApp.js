import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Spinner from "react-bootstrap/Spinner";
import {fetchCurrentUser} from "../user/userSlice";
import {setMessage} from "../message/messageSlice";
import "./admin.css"
import AdminOffcanvas from "./AdminOffcanvas";
import Messages from "../message/Messages";
const AdminApp = () =>{

    // if current user is admin role, redirect to control panel
    // if no user redirect to signin, upon successful sign in, logout/remove current user

    const dispatch = useDispatch()
    const {currentUser, fetchUserStatus} = useSelector(state=>state.user)
    console.log(currentUser)
    const location = useLocation();
    console.log(location)

    useEffect(()=>{
        if(fetchUserStatus === 'idle'){
            dispatch(fetchCurrentUser())
        }
    }, [fetchUserStatus])

    if(fetchUserStatus === "loading")
        return <Spinner />

    if(currentUser === null){
       return  <Navigate to="/user/signin" state={location.pathname}/>
    }
    if(!currentUser.isAdmin){
        // how to dispatch message you are not admin
        dispatch(setMessage(
            {
                type: "danger",
                content: "You are not Admin"
            }
        ))
        return  <Navigate to="/" />
    }
    return (
        <>

            <div className="admin_full_wrapper">

                <div className="admin_wrapper">

                    <div className="admin_left">
                        <AdminOffcanvas/>
                    </div>
                    <div className="admin_right">
                        <Outlet/>
                    </div>

                </div>
            </div>
            <div className="fixed-msgbox">
                <Messages/>
            </div>
        </>

    )
}
export default AdminApp