import Form from "react-bootstrap/Form";
import {toggleAdminRole} from "./accountSlice";
import {useDispatch} from "react-redux";

const UpdateAccountCheckbox = ({account}) =>{
    const dispatch = useDispatch();
    const handleChange = () =>{
        dispatch(toggleAdminRole(account.id))
    }
    return (
        <Form.Check // prettier-ignore
            type="checkbox"
            onChange={handleChange}
            checked={account.isAdmin}
        />
    )
}
export default UpdateAccountCheckbox