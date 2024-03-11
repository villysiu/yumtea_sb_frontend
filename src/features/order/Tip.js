import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
import {Button} from "react-bootstrap"

const Tip = ({tip, setTip, subtotal}) =>{
    const tipArray = [0, 10, 15, 20]
    
    const handleChange = (e) =>{
        // console.log(e.target.value)
        setTip(e.target.value)
    }


    return (
        <div>
            <div className='tipbox_container'>

                {
                    tipArray.map(percentage=>{
                        return (
                            <Button className='tipbox' variant="light" 
                                onClick={()=>setTip(subtotal*percentage/100)}>
                                    {percentage===0 ? "None" : `${percentage}%`}
                            </Button>
                        )
                    })
                }
                <div className='custom_tip_box'> 
                    <div className="custom_tip_dollar">$</div>
                    <div className="custom_tip_font">Custom</div>
                    
                    <Form.Control type="text"
                    className='custom_tip_input' 
                    defaultValue={tip} 
                    onChange={handleChange}
                    min="0"
                    />
          
                </div>

            </div>
            
        </div>
    )
}
export default Tip