
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const Secure = () => {
    console.log("in secure")
    const current_user = useSelector(state => {
        console.log(state.user)
        return state.user.current_user
    })
    if(!current_user.username){
        // return <Login />
        return (
            <Navigate replace={true} 

            to="../user/signin"
            />
        )
    }
    return(
        <Outlet />
    )
}
export default Secure