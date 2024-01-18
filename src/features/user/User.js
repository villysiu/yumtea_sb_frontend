
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Account from "./Account"

const User = () => {
    console.log("in secure")
    const current_user = useSelector(state => state.user.current_user)
    if(current_user.username !== null){

        return <Account />

    }
    return(
        <Outlet />
    )
}
export default User