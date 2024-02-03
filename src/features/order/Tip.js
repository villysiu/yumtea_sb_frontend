import { Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { USDollar } from "../../app/global"
import {Button} from "react-bootstrap"

const Tip = ({tip, setTip}) =>{
    const subtotal = useSelector(state=>state.cart.cart.subtotal)
    const handleChange = (e) =>{
        // console.log(e.target.value)
        setTip(e.target.value)
    }
    return (
        <div>
            <div className='tipbox_container'>
                <Button className='tipbox' variant="light" onClick={()=>setTip(subtotal * 0.1)}>
                    <div className="tip_font">10%</div>
                    <div>{USDollar.format(subtotal * 0.1)}</div>
                </Button>
          
                <Button className='tipbox' variant="light" onClick={()=>setTip(subtotal * 0.15)}>
                    <div className="tip_font">15%</div>
                    <div>{USDollar.format(subtotal * 0.15)}</div>
                </Button>

                <Button className='tipbox' variant="light" onClick={()=>setTip(subtotal * 0.2)}>
                    <div className="tip_font">20%</div>
                    <div>{USDollar.format(subtotal * 0.2)}</div>
                </Button>
                <div className='tipbox' style={{'position': 'relative'}}> 
                    <div className="custom_tip_font">Custom</div>
                    
                        <Form.Control type="text"
                        className='custom_tip_input' 
                        defaultValue={tip} 
                        onChange={handleChange}
                        min="0"
                        />
          
                </div>

            </div>
            
            <Button variant="link" onClick={()=>setTip(0)}>No Tip</Button>
        </div>
    )
}
export default Tip