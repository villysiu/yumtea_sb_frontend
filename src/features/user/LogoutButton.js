import {Button} from "react-bootstrap";
import {logoutUser} from "./userSlice";
import {useDispatch} from "react-redux";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(logoutUser());
    }
    return (
        <Button className='signin_button' onClick={handleClick}>
            Logout
        </Button>
    )
}
export default LogoutButton