import { Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { Clock } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const ReserveTime = ({time, setTime, date}) =>{
    // const dispatch = useDispatch()
    console.log(time)
    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00"]

    const reservations_array = useSelector(state=>state.reservation.reservations.array)
    // const reservations_status = useSelector(state=>state.reservation.reservations.status)

    // useEffect(()=>{
    //     if(reservations_status === 'idle')
    //         dispatch(fetchAllReservations())
    // }, [dispatch, all_reservations.status])

    const blocked = reservations_array.map(res=>{
        if(res.reservation_date === date){
            return res.reservation_time.slice(0,5)
        }
        return null
          
    })
    const expired = timeArray.findIndex(t=>t===time)

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
                    timeArray.map((time, idx) =>{
                        return(
                            blocked.includes(time) || idx < expired?
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