import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const CustomizeTemp = ({menuitem, temperature, setTemperature}) => {
    
    const tempArr =  ["H", "I"]

    return (
        <div className='customize_item required'>
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
                        onChange={()=>setTemperature(t)} 
                        inline 
                        type="radio" 
                        defaultChecked = {temperature===t}
                        name="temp" 
                        label={t==="H"? "Hot" : "Iced"} 
                        id={`temp-radio-${idx}`}
                        disabled = {menuitem.temperature !== ""}
                        />
                        
                    )
                })
                        
            }

            </Form>     
                
               
        </div>
    )
}
export default CustomizeTemp