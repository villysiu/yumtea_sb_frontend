import { Form } from "react-bootstrap"
import InputGroup from 'react-bootstrap/InputGroup';
import { Clock } from "react-bootstrap-icons";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchAllReservations from "./reservationSlice"

const ReserveTime = ({resDate, resTime, setResTime}) =>{
    const dispatch = useDispatch()
    const [blocked, setBlocked]= useState([])

    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00"]

    const {reservations, fetchResStatus} = useSelector(state=>state.reservation)
    // const reservations_status = useSelector(state=>state.reservation.reservations.status)

    useEffect(()=>{
        if(fetchResStatus === 'idle'){
            console.log('fetch again')
            dispatch(fetchAllReservations())}
    }, [dispatch, fetchResStatus])

    
    useEffect(()=>{
        console.log("date changed")
        setBlocked(reservations
            .filter(res=>res.resDate === resDate)
            .map(res=>res.resTime.slice(0,5)
        )
        

    )
    }, [resDate, reservations])

    

    const handleChange = e =>{
        setResTime(e.target.value)
    }
    return (
        <InputGroup className='reserve_time'>
        
            <InputGroup.Text id="basic-addon1">
                <Clock />
            </InputGroup.Text>
            <Form.Select className='reserve_time_select'
            onChange={handleChange}
            value={resTime}
            >
                {
                    timeArray.map((time, idx) =>{
                        return(

                            <option key={time} value={time} 
                                disabled={blocked.includes(time) ? true : false}
                            >
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