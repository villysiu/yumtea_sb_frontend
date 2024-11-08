import { Form } from "react-bootstrap"
import { useState } from "react"
import {Button} from "react-bootstrap"

const Tip = ({tip, setTip, subtotal}) =>{
    const tipArray = [10, 15, 20, 'other']
    const [tipbox, showTipbox] = useState(false)
    

    const handleChange = (e) =>{
        setTip(Number(e.target.value))

    }
    const handleOther = () =>{
        showTipbox(true)

    }
     const handleTax = p =>{
        console.log(p)
            
            setTip(subtotal*p/100)
            showTipbox(false)
            
    }
    

    return (
        <div className='tipbox_wrapper'>
            <div className='tipbox_container'>

                {
                    tipArray.map((percentage, idx)=>{

                        if(percentage === 'other'){
                            return (
                                tipbox ? 
                                <div key={idx} class="className='tipbox input-dollar">
                                    <input type="text" value={tip} onChange={handleChange}/>
                                </div>
                                :
                                <div key={idx} className='tipbox right' onClick={handleOther}>Other</div>    
                            )
                        }
                        return (
                
                            <div key={idx} className={`tipbox ${idx===0 ? 'left':''}`} onClick={()=>handleTax(percentage)}>{percentage}%</div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tip