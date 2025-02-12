import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const UserApp = () =>{
    console.log("in user app?")
    const dispatch = useDispatch()
    const current_user_status = useSelector(state => state.user.current_user.status)



    useEffect(()=>{
        if(current_user_status==='idle')
            dispatch(fetchCurrentUser())
    }, [current_user_status, dispatch])


    return null
}
export default UserApp