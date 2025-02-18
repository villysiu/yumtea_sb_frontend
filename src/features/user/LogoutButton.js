import {Button} from "react-bootstrap";
import {logoutUser} from "./userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user)
    const handleClick = () =>{
        dispatch(logoutUser());
        if(!currentUser)
            navigate("http://127.0.0.1:8001/");

    }
    return (
        <Button className='signin_button' onClick={handleClick}>
            Logout
        </Button>
    )
}
export default LogoutButton