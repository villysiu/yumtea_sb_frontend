import { useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const User = () => {
    console.log("in user")
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const path=location.state ? `..${location.state.path}` : "../secure/account"

    
    const current_user_status = useSelector(state => state.user.current_user.status)
    
    
    useEffect(()=>{
        console.log('in user effect?')
        
        if(current_user_status === 'succeeded'){
            

            navigate(path, {state: location.state})
        }
    }, [current_user_status])


    // if(current_user_status === 'succeeded'){
    //     return(
    //         <Navigate replace={true} to={path} />
    //     )
    // }
    return(
        <Outlet />
    )
}
export default User