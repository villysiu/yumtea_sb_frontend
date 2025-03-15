import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";

const MilkDropdown = ({menuitem, setMenuitem}) =>{
    const milks = useSelector(state=>state.menuitem.milk.array)
    const handleChange = (e) =>{
        setMenuitem(prev=>({
            ...prev,
            "milkId": parseInt(e.target.value),
        }))
    }

    return (
        <Form.Select onChange={handleChange}>
            <option>Pick Milk</option>
            {
                milks.map(m=>(
                    <option value={m.id} key={m.id}

                            selected={m.id === menuitem.milkId}>
                        {m.title}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default MilkDropdown