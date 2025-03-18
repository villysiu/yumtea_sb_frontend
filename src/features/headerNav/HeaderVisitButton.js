import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'

const HeaderVisitButton = () =>{
    const location = useLocation()

    return(
        <Link to="/visit-taste" state={location.pathname}
            className={`header_buttons me-3 ${location.pathname === '/visit-taste' ? 'active' : ""}`}
        >
            Visit
        </Link>   
    )
}
export default HeaderVisitButton