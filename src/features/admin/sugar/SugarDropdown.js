import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";

const SugarDropdown = ({newMenuitem, setNewMenuitem}) =>{
    const sugars = useSelector(state=>state.menuitem.sugar.array)
    const handleChange = (e) =>{
        setNewMenuitem({
            ...newMenuitem,
            "sugar": e.target.value,
        })
    }
    return (
        <Form.Select onChange={handleChange}>
            <option>Pick Sugar</option>
            {
                sugars.map(s=>(
                    <option value={s} key={s}
                            selected={s === newMenuitem.sugar}>
                        {s}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default SugarDropdown