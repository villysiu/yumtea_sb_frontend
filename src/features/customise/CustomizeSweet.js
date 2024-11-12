import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"

const CustomizeSweet = ({sweetness, setSweetness}) =>{
    const sweetArr =  [100, 75, 50 ,25, 0]
   
    const handleChange = s =>{
        setSweetness(s)
    }
    return (
        <div className='customize_item not_required'>
            <b>Sweetness</b>
            <div>Optional </div>
            <Form className='customize_item_choices'>
            {
                sweetArr.map((s, idx)=>{
                   
                    return(
                        
                        <Form.Check key={idx}
                        className='customize_item_choice'
                        onChange={()=>handleChange(s)} 
                        inline 
                        type="radio" 
                        checked = {s===sweetness}
                        name="sweet" 
                        label={s===0? 'No sugar' : `${s}%`}
                        id={`size-radio-${idx}`}
                        />
                        
                    )
                })
                        
            }

            </Form>     
            </div>
    )
}
export default CustomizeSweet