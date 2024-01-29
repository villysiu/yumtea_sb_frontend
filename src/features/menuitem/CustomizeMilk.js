import InputGroup from "react-bootstrap/esm/InputGroup"
import { Clock } from "react-bootstrap-icons"
import { Form } from "react-bootstrap"
const CustomizeMilk = ({milk, setMilk}) =>{
    const milkArray = {
        "W":"Whole Milk",
        "T":"2% Milk",
        "N": "Non-fat Milk",
        "A": "Almond Milk",
        "O": "Oat Milk",
        "S": "Soy Milk",
        // {"X": "Not Changable"}
    }
    const handleChange = e =>{
        setMilk(e.target.value)
    }
    return (
        <InputGroup className='customize_milk'>
        
            <InputGroup.Text id="basic-addon1">
                <Clock />
            </InputGroup.Text>
            <Form.Select className='customize_milk_select'
            onChange={handleChange}
            defaultValue={milk}
            >
                {
                    Object.keys(milkArray).map(key =>{
    
                        return(
    
                            <option key={key} value={key}>
                                {milkArray[key]}
                            </option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default CustomizeMilk