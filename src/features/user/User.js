import { useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const User = () => {
    console.log("in user")
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const path=location.state ? `../..${location.state.from.pathname}` : "../secure/account"

    
    const {loginStatus} = useSelector(state => state.user)
    
    
    useEffect(()=>{
        console.log('in user effect?')
        
        if(loginStatus === 'succeeded'){
            navigate(path, { state: { from: location } })
        }
    }, [loginStatus])


    return(
        <Outlet />
    )
}
export default User