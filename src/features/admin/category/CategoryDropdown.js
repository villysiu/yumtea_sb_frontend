import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";

const CategoryDropdown = ({newMenuitem, setNewMenuitem}) =>{
    const categories = useSelector(state=>state.menuitem.category.array)
    const handleChange = (e) =>{
        setNewMenuitem({
            ...newMenuitem,
            "categoryId": e.target.value,
        })
    }
    return (
        <Form.Select >
            <option>Pick Category</option>
            {
                categories.map(c=>(
                    <option value={c.id}
                            onChange={handleChange}
                            selected={c.id === newMenuitem.categoryId}>
                        {c.title}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default CategoryDropdown