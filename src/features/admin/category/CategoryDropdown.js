import Form from "react-bootstrap/Form";
import {useSelector} from "react-redux";

const CategoryDropdown = ({menuitem, setMenuitem}) =>{
    console.log(menuitem)
    const categories = useSelector(state=>state.menuitem.category.array)
    const handleChange = (e) =>{
        setMenuitem({
            ...menuitem,
            "categoryId": parseInt(e.target.value),
        })
    }
    return (
        <Form.Select onChange={handleChange} >
            <option>Pick Category</option>
            {
                categories.map(c=>(
                    <option value={c.id} key={c.id}
                            selected={c.id === menuitem.categoryId}>
                        {c.title}
                    </option>
                ))
            }
        </Form.Select>
    )
}
export default CategoryDropdown