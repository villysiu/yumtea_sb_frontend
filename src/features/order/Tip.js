import { Form } from "react-bootstrap"
import { useState } from "react"
import {Button} from "react-bootstrap"

const Tip = ({setTip, subtotal}) =>{
    const tipArray = [0, 10, 15, 20, 100]
    const [customTip, setCustomTip] = useState(0)
    const [isSelected, setSelected] = useState(0)
    const [custombox, showCustombox] = useState(false)
    
    const handleChange = (e) =>{
        setCustomTip(e.target.value)
        setTip(e.target.value)

    }
    const handleClick = percentage =>{
        if(percentage === 100){
            showCustombox(true)
            setSelected(percentage)
            setTip(0)
        }
        else{
            setCustomTip(0)
            setTip(subtotal*percentage/100)
            setSelected(percentage)
            showCustombox(false)
        }
    }

    return (
        <div className='tipbox_wrapper'>
            <div className='tipbox_container'>

                {
                    tipArray.map(percentage=>{
                        return (
                            <Button variant="light" 
                            className={percentage === isSelected ? 'tipbox selected': 'tipbox' }
                                onClick={()=>handleClick(percentage)}>
                                    {percentage===0 ? "None" : 
                                        percentage===100? "Custom" :`${percentage}%`}
                                
                            </Button>
                        )
                    })
                }
            </div>
            {
                custombox && 
                <div className='custom_tip_box'> 
                    <div className="custom_tip_dollar">$</div>
                    <div className="custom_tip_font">Custom</div>
                    
                    <Form.Control type="number"
                    className='custom_tip_input' 
                    value={customTip} 
                    onChange={handleChange}
                    min="0"
                    />
                </div>
            }
        </div>
    )
}
export default Tip