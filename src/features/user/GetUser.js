import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const GetUser = ({setGetUser}) =>{
    console.log("GET USER")
    const dispatch = useDispatch()
    const {currentUser, fetchUserStatus} = useSelector(state => state.user)

    useEffect(()=>{
        if(!currentUser && fetchUserStatus==='idle')
            dispatch(fetchCurrentUser());

        if(fetchUserStatus === 'loading') {
            setGetUser(false);
        }
        else {
            // when fetchUser process completed, either result succeeded or failed
            setGetUser(true);
        }
    }, [fetchUserStatus, dispatch])


    return null
}
export default GetUser