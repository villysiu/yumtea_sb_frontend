import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form} from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
import { getMilks } from "../menuitem/menuitemSlice"
import { useState } from 'react'
const CustomizeMilk = ({defaultMilk, milk, setMilk}) =>{
    
    const milkChoices = useSelector(state=>getMilks(state));


    if(milkChoices.length === 0 || defaultMilk.title === "NA" )
        return null;


    return (

        <div className='customize_item not_required'>
            <b>Milk</b>
            <div> Optional, default choice - No milk</div>
            
            <Form className='customize_item_choices'>

                {milkChoices.map(mk =>{

                    const price = mk.price > 0 ? `+$${mk.price}` : ""
                    const mkTitle = `${mk.title}  ${price}`
                    return(
                        
                        <Form.Check key={mk.id}
                            className='customize_item_choice'
                            onChange={()=>setMilk(mk)}
                            inline
                            type="radio"
                            defaultChecked = {milk.id=== mk.id}
                            // checked = {milk.id===milkId}
                            name="milk"
                            label={mkTitle}
                            id={`milk-radio-${mk.id}`}
                        />
                        
                    )
                })
            }
            
            </Form>    
     
            </div>
            
        
        
    )
}
export default CustomizeMilk