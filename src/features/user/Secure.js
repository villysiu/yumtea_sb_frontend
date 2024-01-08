
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Login from "./Login"

const Secure = () => {
    console.log("in secure")
    const {username} = useSelector(state=>state.user.current_user)

    if(username === "Guest"){
        return <Login />
    }
    return(
        <Outlet />
    )
}
export default Secure