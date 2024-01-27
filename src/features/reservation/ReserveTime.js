import { Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { Clock } from "react-bootstrap-icons";
import { useEffect } from "react";
import { fetchAllReservations } from "./reservationSlice";
import { useDispatch, useSelector } from "react-redux";
const ReserveTime = ({time, setTime, date}) =>{
    const dispatch = useDispatch()
    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00"]

    const all_reservations = useSelector(state=>state.reservation.all_reservations)

    useEffect(()=>{
        if(all_reservations.status === 'idle')
            dispatch(fetchAllReservations())
    }, [dispatch, all_reservations.status])

    const blocked = all_reservations.array.map(res=>{
        if(res.reservation_date === date){
            return res.reservation_time.slice(0,5)
        }
          
    })

    const handleChange = e =>{
        setTime(e.target.value)
    }
    return (
        <InputGroup className='reserve_time'>
        
            <InputGroup.Text id="basic-addon1">
                <Clock />
            </InputGroup.Text>
            <Form.Select className='reserve_time_select'
            onChange={handleChange}
            defaultValue={time}
            >
                {
                    timeArray.map(time =>{
                        return(
                            blocked.includes(time) ?
                            <option key={time} value={time} disabled>
                                {time}PM
                            </option>
                            :
                            <option key={time} value={time}>
                                {time}PM
                            </option>
                        )
                    })
                }
            </Form.Select>
        </InputGroup>
    )
}
export default ReserveTime