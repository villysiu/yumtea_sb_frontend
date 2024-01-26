import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { homeLink } from "../../app/global";
import { Link } from "react-router-dom";
import { Clock } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { PeopleFill } from "react-bootstrap-icons"
const ReservationSuccess = () =>{
    let {state} = useLocation();
    console.log(state)
    // prohibited direct access this page
   
    // if(!location.state || state.from !== '/secure/reservation')
    //     return <Navigate to="../../" replace={true} />

    
    const {reservation} = state
    return (
        <div className="reserve_wrapper">
            <div className="reserve_bg_wrapper">
                <img src={`${homeLink}/2018-CK-lifestyle.jpeg`} alt="" className="singlewine_bg"></img>
            
                <div className='reserve_title_container'>
                    <div className='reserve_title'><b>Little D Tasting Reservations </b></div>
                </div>
            </div>
            <div className='reservation_success_container'>
                <div className='reservation_success_title mb-3'>Your reservaiotn is confirmed.</div>
                <div key={reservation.pk} className='reservation_success_details_container'>
                                
                    <div className='reservation_success_date'>
                        <Calendar3 className='me-2'/>{reservation.reservation_date}
                    </div>
                
                    <div className='reservation_success_time'>
                        <Clock className='me-2'/>{reservation.reservation_time.slice(0,5)}
                    </div>
                
                    <div className='reservation_success_guests'>
                        <PeopleFill className='me-2'/>{reservation.no_of_guests}
                    </div>
                </div>
                <Link to={`${homeLink}/secure/reservations`} className=''>
                    <Button className='gold_button'>Back to reservations</Button>
                </Link>
            </div>
            
        </div>
    )
}
export default ReservationSuccess