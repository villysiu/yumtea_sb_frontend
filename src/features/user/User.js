
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
const User = () => {
    console.log("in user")
    const current_user = useSelector(state => state.user.current_user)
    console.log(current_user.username)
    if(current_user.username !== null){
        return(
        <Navigate replace={true} to="../secure/account" />
        )
    }
    return(
        <Outlet />
    )
}
export default User