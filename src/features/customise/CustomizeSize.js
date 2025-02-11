import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"
import {useSelector} from "react-redux";
import {getSizes} from "../menuitem/menuitemSlice";

const CustomizeSize = ({size, setSize}) => {


    const sizeChoices = useSelector(state=>getSizes(state));

    return (
        <div className='customize_item required'>
            <b>Drink Size</b>
            <div>Required - Choose 1. </div>
            
            <Form className='customize_item_choices'>
            {
                sizeChoices.map(sz=>{
                    const priceText = sz.price > 0 ? `+$${sz.price}.00` : ""
                    const content = `${sz.title} ${priceText}`
                    return(
                        
                        <Form.Check key={sz.id}
                            className='customize_item_choice'
                            onChange={()=>setSize(sz)}
                            inline
                            type="radio"
                            defaultChecked = {sz.title===size}
                            name="size"
                            label={content}
                            id={`size-radio-${sz.id}`}
                        />
                        
                    )
                })
                        
            }

            </Form>     
        </div>
    )
}
export default CustomizeSize
                
               
        