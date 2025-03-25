import { Form } from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const OrderFilter = ({filter, setFilter}) =>{

    const filterChoices = [
        // "All Order",
        ["Past 3 days", 3],
        ["Past 7 days", 7],
        ["Past 30 day", 30],
        ["Past 12 months", 365]

    ]
    const handleChange = e =>{
        // console.log(e.target.value)
        setFilter(e.target.value)
    }
   return (
    <FloatingLabel controlId="floatingInput" label="Order Date" className="mb-3">
        <Form.Select className='order_filter_box'
            onChange={handleChange} defaultValue={filter}>
            {
                filterChoices.map((choice)=>{
                    const [text, day] = choice
                    return (     
                        <option key={day} value={day}>
                            {text}
                        </option>
                    )})
            }
        </Form.Select>
    </FloatingLabel>
     
   )
    
}
export default OrderFilter