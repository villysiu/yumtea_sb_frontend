import {useDispatch} from "react-redux";
import {toggleAdminRole} from "../account/accountSlice";
import Form from "react-bootstrap/Form";
import {toggleActive} from "../adminSlice";

const ActiveCheckbox = ({menuitem}) =>{
        const dispatch = useDispatch();
        const handleChange = () =>{
            dispatch(toggleActive(menuitem.id))
        }
        return (
    <Form.Check // prettier-ignore
        type="checkbox"
        onChange={handleChange}
        checked={menuitem.active}
    />
)

}
export default ActiveCheckbox