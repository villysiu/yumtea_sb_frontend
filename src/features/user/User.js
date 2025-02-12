import { useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const User = () => {
    console.log("in user")
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const path=location.state ? `..${location.state.path}` : "../secure/account"

    
    const {login_status} = useSelector(state => state.user)
    
    
    useEffect(()=>{
        console.log('in user effect?')
        
        if(login_status === 'succeeded'){
            navigate(path, {state: location.state})
        }
    }, [login_status])


    return(
        <Outlet />
    )
}
export default User