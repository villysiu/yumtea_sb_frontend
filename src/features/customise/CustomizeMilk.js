import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
import { getMilks } from "../menuitem/menuitemSlice"
const CustomizeMilk = ({milk_id, setMilkID}) =>{
    
    const milksArray = useSelector(state=>getMilks(state))

    const handleChange = e =>{
        setMilkID(parseInt(e.target.value))
    }
    if(milksArray.length === 0)
        return null

    if(milk_id === 1 )
        return null
    return (
        
        <li className='single_item_customize ps-3'>
            <InputGroup className='customize_milk'>
                <span className="customize_milk_title">Milk Alternative</span>
            
                <Form.Select className='customize_milk_select'
                    onChange={handleChange} defaultValue={milk_id}
                >
                    {
                        milksArray.map(choice =>{
                            if(choice.id === 1 ) 
                                return null;

                            return(
                                <option key={choice.id} value={choice.id}>
                                    {choice.title} +{USDollar.format(choice.price)}
                                </option>
                            )
                        })
                    }
                </Form.Select>
            </InputGroup>
        </li>
    )
}
export default CustomizeMilk