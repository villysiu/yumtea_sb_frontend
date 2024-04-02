import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"

const CustomizeSweetness = ({sweetness, setSweetness}) =>{
    const sweetnessArr =  {'100':'100%', '75': "75%", '50': "50%", "25": "25%", '0': "No Sugar"}
    console.log(sweetness)
    const handleChange = e =>{
        // console.log(e.target)
        setSweetness(e.target.value)
    }
    if(sweetness==="N")
        return null
    return (
        <li className='single_item_customize ps-3'>
            <InputGroup className='customize_milk'>
                <span className="customize_milk_title">Sweetness</span>
            
                <Form.Select className='customize_milk_select'
                    onChange={handleChange}
  
                    defaultValue={sweetness}
                >
                    {
                        Object.entries(sweetnessArr).map(([key,val])=>{
                            console.log(`${key} :${val}`)
                            return(
                                <option key={key} value={key}>
                                    {val}
                                </option>
                            )
                            
                            })
                    
                    }
                </Form.Select>
            </InputGroup>
        </li>
    )
}
export default CustomizeSweetness