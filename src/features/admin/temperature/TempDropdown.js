import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";
import {getTemperatures} from "../../menuitem/menuitemSlice";

const TempDropdown = ({menuitem, setMenuitem}) =>{
    // const temps = ["FREE", "Hot", "Iced" ]
    const temps = useSelector(state => state.menuitem.temperature.array);
    const handleChange = (e) =>{
        setMenuitem({
            ...menuitem,
            "temperature": e.target.value,
        })
    }
    return (
        <Form.Select onChange={handleChange}>
            <option>Pick Temperature</option>
            {
                temps.map(t=>(

                    <option value={t} key={t}
                            selected={t === menuitem.temperature}>
                        {t}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default TempDropdown