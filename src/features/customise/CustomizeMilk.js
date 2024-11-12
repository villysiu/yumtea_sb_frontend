import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form} from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
import { getMilks } from "../menuitem/menuitemSlice"
import { useState } from 'react'
const CustomizeMilk = ({menuitem, milkId, setMilkId, setPrice}) =>{
    
    const milksArray = useSelector(state=>getMilks(state))
    console.log(milksArray)
    // {8: No Milk}
    

    const handleChange = (milk) => {
        console.log(milk)
        if(milk.id === milkId){
            setPrice(p=>p-milk.price)
            setMilkId(8)
        }
        else{
            setMilkId(prevMilkId=>{
                if(prevMilkId){
            
                    const prevMilkPrice = milksArray.find(m=>m.id===prevMilkId).price
                    setPrice(p=>p-prevMilkPrice)
                }
                
                setPrice(prevPrice=>prevPrice+milk.price)
                return milk.id
            })
        }
    };
    if(milksArray.length === 0)
        return null

    if(milkId === 6 )
        return null


    return (

        <div className='customize_item not_required'>
            <b>Milk</b>
            <div> Optional, choose 1 </div>
            
            <Form className='customize_item_choices'>

                {milksArray.map((milk, idx)=>{
                    if(milk.slug==='NA' || milk.id === 8) return null
                 
                    const addCost = milk.price > 0 ? `+$${milk.price}.00` : ""
                    const content = `${milk.title}  ${addCost}`
                    return(
                        
                        <Form.Check key={idx}
                        className='customize_item_choice'
                        onChange={()=>handleChange(milk)} 
                        inline 
                        type="checkbox" 
                        // defaultChecked = {milk.id===milkId}
                        checked = {milk.id===milkId}
                        name="milk" 
                        label={content} 
                        id={`milk-radio-${idx}`}
                        disabled = {menuitem.milk_id !== 8}
                        />
                        
                    )
                })
            }
            
            </Form>    
     
            </div>
            
        
        
    )
}
export default CustomizeMilk