import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
const HeaderHomeButton = ({current, setCurrent}) =>{
    const location = useLocation()
    return(
        <Link to="/" state={location.pathname}
            // className={`header_buttons  me-3 ${location.pathname === '/' ? 'active' : ""}`}
        >
            Home
        </Link>  
    )
}
export default HeaderHomeButton