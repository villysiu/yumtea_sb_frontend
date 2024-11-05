import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const CustomizeTemp = ({temp, setTemp}) => {
    
    const tempArr =  ["Hot", "Iced"]
    console.log(temp)
    if(temp==="N")
        return null
    return (
        <div className='customize_item'>
            <b>Hot Or Iced</b>
            <div>Required - Choose 1. </div>
            <Form className='customize_item_choices'>
            {
                tempArr.map((t, idx)=>{
                    // console.log(temp, t, t[0], t[0]===temp)
                    return(
                        
                        <Form.Check 
                        key={idx}
                        className='customize_item_choice'
                        onChange={()=>setTemp(t)} 
                        inline 
                        type="radio" 
                        defaultChecked = {temp===t}
                        name="temp" 
                        label={t} 
                        id={`temp-radio-${idx}`}
                        />
                        
                    )
                })
                        
            }

            </Form>     
                
               
        </div>
    )
}
export default CustomizeTemp