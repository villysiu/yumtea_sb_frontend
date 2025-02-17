import { useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const User = () => {
    console.log("in user")
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const path=location.state ? `..${location.state}` : "../secure/account"

    
    const {currentUser} = useSelector(state => state.user)
    
    
    useEffect(()=>{
        console.log('in user effect?')
        
        if(currentUser !== null){
            navigate(path, { state: location.pathname })
        }
    }, [currentUser])


    return(
        <Outlet />
    )
}
export default User