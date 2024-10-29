import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const CustomizeSize = ({size, setSize}) => {

    const sizeArr =  [[12, 0], [16, 1]]

    const handleChange = e =>{
        
        setSize(e.target.value)
    }
    // if(temp==="N")
    //     return null
    return (
        <div className='customize_item'>
            <b>Drink Size</b>
            <div>Required - Choose 1. </div>
            <div className='customize_item_choices'>
            {
                sizeArr.map(s=>{
                    const [size, cost] = s
                    return(
                        <div className='customize_item_choice'>
                        <input type="radio" id={size} value={size} />
                        {" "}
                        <label for="html">{size}oz
                        { cost > 0 && <span> + ${cost}</span>}

                        </label>
                        </div>
                    )
                })
            } 
            </div>
                
               
        </div>
    )
}
export default CustomizeSize