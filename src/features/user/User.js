import { useSelector } from "react-redux"
import { Outlet, useLocation } from "react-router-dom"
import { Navigate } from "react-router-dom"

const User = () => {
    console.log("in user")
    const location = useLocation()
    console.log(location)
    const path=location.state ? `..${location.state.from}` : "../secure/account"

    const current_user = useSelector(state => state.user.current_user)
    
    if(current_user.username !== null){
        return(
            <Navigate replace={true} to={path} />
        )
    }
    return(
        <Outlet />
    )
}
export default User