import { logoutUser } from "./userSlice"
import { useDispatch } from "react-redux"
const Logout = () =>{
    const dispatch = useDispatch()
    const handleClick = e =>{
        console.log("logging out")
        dispatch(logoutUser())
    }
    return(
        <div className="solid_link  mb-3" style={{'cursor': 'pointer'}} onClick={handleClick}>Sign out</div>
    )
}
export default Logout