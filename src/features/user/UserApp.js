import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const UserApp = () =>{
    console.log("in user app?")
    const dispatch = useDispatch()
    const {current_user, fetch_user_status} = useSelector(state => state.user)

    useEffect(()=>{
        if(!current_user && fetch_user_status==='idle')
            dispatch(fetchCurrentUser())
    }, [fetch_user_status, dispatch])


    return null
}
export default UserApp