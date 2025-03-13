import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import AdminSignin from "./AdminSignin";
import ControlPanel from "./ControlPanel";

const AdminApp = () =>{

    // if current user is admin role, redirect to control panel
    // if no user redirect to signin, upon successful sign in, logout/remove current user
    const {currentAdmin} = useSelector(state=>state.admin)
    console.log(currentAdmin)
    const location = useLocation();
    console.log(location)

    if(currentAdmin === null){
        {console.log("no admin")}
       return  <AdminSignin />
    }
    return (
        // <div>
        //     <h1>Admin Dashboard</h1>
        //                 {/* Admin dashboard content */}
        // </div>
        // <Outlet />
        <ControlPanel />

    )
}
export default AdminApp