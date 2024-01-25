import { Button } from "react-bootstrap"
import { homeLink } from "../../app/global"

import { useState } from "react"
const Reserve = () =>{
    const today = new Date() 
    today.setHours(today.getHours()-8)
    // const y = today.getFullYear()
    // const m = today.getMonth()+1
    // const d = today.getDate()
    // const dateStr = y + "-"+m.toString().padStart(2,"0")+"-"+d
    const dateStr = today.toJSON().slice(0,10)
    const min = dateStr
    const max = new Date()
    max.setDate(today.getDate()+10)
    console.log(max)
    const maxStr = max.toJSON().slice(0,10)

    const [date, setDate] = useState(dateStr)

    const handleDate = (e) =>{
        const dateControl = document.querySelector('input[type="date"]');
        setDate(dateControl.value)
    }
    return(
        <div className="reserve_wrapper">
            <div className="reserve_bg_wrapper">
                <img src={`${homeLink}/2018-CK-lifestyle.jpeg`} className="singlewine_bg"></img>
            
                <div className='reserve_title_container'>
                    <div className='reserve_title'><b>Little D Tasting Reservations </b></div>
                </div>
            </div>
            <div className='reserve_container'>
                <div className='reserve_date_time'>
                    <div className='reserve_date' >
                        <input type="date" className='reserve_date_input'
                        value={date} 
                        min={min} max={maxStr}
                        onChange={handleDate}
                        />
    
                    </div>
                    <div className='reserve_time'>
                        <select id="hours" className='reserve_time_select'>
                            <option value="1130">11:30AM</option>
                            <option value="1200">12:00PM</option>
                            <option value="1230">12:30PM</option>
                            <option value="1300">13:00PM</option>
                        </select>
                    </div>
                
                    <div className='reserve_guest'>
                        <select id="hours" className='reserve_guest_count'>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                        </select>
                    </div>
                </div>
                <div className='reserve_button_container'>
                <Button className='gold_button'>Search</Button>
                </div>
            </div>
        </div>
    )
}
export default Reserve