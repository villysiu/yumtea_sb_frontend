import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
const CustomizeTemp = ({temp, setTemp}) => {
    const tempArr =  ["Hot", "Cold"]

    // const handleChange = e =>{
        
    //     setTemp(e.target.value)
    // }
    if(temp==="N")
        return null
    return (
        <div className='customize_item'>
            <b>Hot Or Cold</b>
            <div>Required - Choose 1. </div>
            <Form className='customize_item_choices'>
            {
                tempArr.map((t, idx)=>{
                    
                    return(
                        
                        <Form.Check 
                        className='customize_item_choice'
                        onChange={()=>setTemp(t)} 
                        inline 
                        type="radio" 
                        
                        name="size" 
                        label={t} 
                        id={`inline-radio-${idx}`}
                        />
                        
                    )
                })
                        
            }

            </Form>     
                
               
        </div>
    )
}
export default CustomizeTemp