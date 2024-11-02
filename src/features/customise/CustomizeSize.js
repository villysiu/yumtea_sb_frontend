import InputGroup from "react-bootstrap/esm/InputGroup"
import { Form } from "react-bootstrap"

const CustomizeSize = ({setSize, setPrice}) => {

    // const sizeMap =  [[12, 0], [16, 1]]
    const sizeMap = new Map([[12, 0], [16, 1]])
    const handleChange = (vol, cost) =>{
        console.log(vol, cost)
         setSize(prevSize=>{
            console.log(prevSize)
            if(prevSize!==null){
                setPrice(p=>p-sizeMap.get(prevSize))
            }
            setPrice(p=>p+cost)
            return vol
         })
        
    }
    // if(temp==="N")
    //     return null
    return (
        <div className='customize_item'>
            <b>Drink Size</b>
            <div>Required - Choose 1. </div>
            
            <Form className='customize_item_choices'>
            {
                Array.from(sizeMap).map((s, idx)=>{
                    const [vol, cost] = s
                    const addCost = cost > 0 ? `+$${cost}.00` : ""
                    const l = `${vol}oz ${addCost}`
                    return(
                        
                        <Form.Check 
                        className='customize_item_choice'
                        onChange={()=>handleChange(vol, cost)} 
                        inline 
                        type="radio" 
                        
                        name="size" 
                        label={l} 
                        id={`size-radio-${idx}`}
                        />
                        
                    )
                })
                        
            }

            </Form>     
            </div>
    )
}
export default CustomizeSize       
                {/* //         // <div className='customize_item_choice'> */}
                //         {/* <input type="radio" name='size' value={vol} />
                //         {" "}
                //         <label>{vol}oz
                //         { cost > 0 && <span> + ${cost}</span>} */}

                //         <Form.Check
                //                     inline
                //                     label={vol}
                //                     name="size"
                //                     type='radio'
                //         />
                //         // </label>
                //         // </div>
                  
                
               
        