import {Button} from "react-bootstrap";
import {logoutAdmin} from "./adminSlice";
import {useDispatch} from "react-redux";
import {logoutUser} from "../user/userSlice";

const ControlPanel = () =>{
    const dispatch = useDispatch()
    const handleLogout = () =>{
        dispatch(logoutAdmin())
    }

    return (
        <div>
            Control Panel where ONLY admin can visit
            <Button onClick={handleLogout} > Logout </Button>
        </div>
    )
}
export default ControlPanel