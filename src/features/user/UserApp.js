import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const UserApp = () =>{
    console.log("in user app?")
    const dispatch = useDispatch()
    const {current_user, login_status} = useSelector(state => state.user)

    useEffect(()=>{
        if(!current_user && login_status==='idle')
            dispatch(fetchCurrentUser())
    }, [login_status, dispatch])


    return null
}
export default UserApp