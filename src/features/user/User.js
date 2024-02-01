import { useSelector } from "react-redux"
import { Outlet, useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"
const User = () => {
    console.log("in user")
    const location = useLocation()
    console.log(location)
    const path=location.state ? `..${location.state.path}` : "../secure/account"
    // console.log( path)
    const current_user = useSelector(state => state.user.current_user)
    console.log(current_user.username)
    if(current_user.username !== null){
        return(
            // <Navigate replace={true} to="../secure/account" />
            <Navigate replace={true} to={path} />
        )
    }
    return(
        <Outlet />
    )
}
export default User