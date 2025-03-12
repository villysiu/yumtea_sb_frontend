import {Outlet} from "react-router-dom";

const AdminApp = () =>{

    // if current user is admin role, redirect to control panel
    // if no user redirect to signin, upon successful sign in, logout/remove current user
    return (

        <Outlet />
    )
}
export default AdminApp