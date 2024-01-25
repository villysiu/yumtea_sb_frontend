import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const ReservationSuccess = () =>{
    let location = useLocation();
    console.log(location)
    // prohibited direct access this page
   
    // if(!location.state || state.from !== '/secure/reservation')
    //     return <Navigate to="../../" replace={true} />

    let state={
        data: {pk: 41, user_id: 2, no_of_guests: 2, reservation_date: '2024-01-25', reservation_time: '15:30:00'},

    }
    const reservation = state.data
    return (
        <div className='reservation_success_container'>Your reservaiotn is confirmed. 
            <div className="reservation_success_date">
                <div className="reservation_success_left_column">Date: </div>
                <div>{reservation.reservation_date}</div>
            </div>
            <div className="reservation_success_date">
                <div className="reservation_success_left_column">Time: </div>
                <div>{reservation.reservation_time}</div>
            </div>
            <div className="reservation_success_date">
                <div className="reservation_success_left_column">Guests: </div>
                <div>{reservation.no_of_guests}</div>
            </div>
            <Button className='gold_button'>See your reservations</Button>
        </div>
    )
}
export default ReservationSuccess