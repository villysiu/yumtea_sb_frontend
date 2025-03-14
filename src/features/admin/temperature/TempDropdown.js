import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";

const TempDropdown = ({newMenuitem, setNewMenuitem}) =>{
    const temps = ["FREE", "Hot", "Iced" ]
    const handleChange = (e) =>{
        setNewMenuitem({
            ...newMenuitem,
            "temperature": e.target.value,
        })
    }
    return (
        <Form.Select >
            <option>Pick Temperature</option>
            {
                temps.map(t=>(

                    <option value={t} key={t}
                            onChange={handleChange}
                            selected={t === newMenuitem.temperature}>
                        {t}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default TempDropdown