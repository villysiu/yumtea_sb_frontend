import { Form } from "react-bootstrap"
import { useState } from "react"
import {Button} from "react-bootstrap"
import {USDollar} from "../../app/global";

const Tip = ({tip, setTip, subtotal}) =>{
    const tipArray = [10, 15, 20, 'other']
    const [tipbox, showTipbox] = useState(false)
    

    const handleChange = (e) =>{
        const val = e.target.value;

        const regex = /^(\d+(\.\d{0,2})?)?$/;  // Allows numbers with at most 2 decimals
        if (regex.test(val) || val==="")
            setTip(val === "" ? "" : parseFloat(e.target.value))
    }

     const handleTip = p =>{
        console.log(p)

            setTip(subtotal * p / 100)
            showTipbox(false)

    }
    //

    return (
        <div className='checkout_tip'>
            <div className="checkout_summary_line">
                <div>Tip</div>
                <div>{USDollar.format(tip)}</div>

            </div>
            <div className='tipbox_wrapper'>
                <div className='tipbox_container'>
                    {
                        tipArray.map((percentage, idx) => {

                            if (percentage === 'other') {
                                return (
                                    tipbox ?
                                        <div key={idx} className="className='tipbox input-dollar">
                                            <input type="text" placeholder="0.00" value={tip}
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        :
                                        <div key={idx} className='tipbox right'
                                             onClick={() => showTipbox(true)}>Other</div>
                                )
                            }
                            return (

                                <div key={idx} className={`tipbox ${idx === 0 ? 'left' : ''}`}
                                     onClick={() => handleTip(percentage)}>{percentage}%</div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )

}
export default Tip