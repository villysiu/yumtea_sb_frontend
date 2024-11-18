import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
const HeaderHomeButton = ({current, setCurrent}) =>{
    const location = useLocation()
    return(
        <Link to={`${homeLink}/`} 
            className={`header_buttons ${location.pathname === '/' ? 'active' : ""}`}
        >
            Home
        </Link>  
    )
}
export default HeaderHomeButton