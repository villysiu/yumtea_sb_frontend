import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'

const HeaderVisitButton = () =>{
    const location = useLocation()

            // else if(location.pathname === '/collection')
            //     setCurrent("collection")

    return(
        <Link to={`${homeLink}/visit-taste`} 
            className={`header_buttons ${location.pathname === '/visit-taste' ? 'active' : ""}`}
        >
            Visit
        </Link>   
    )
}
export default HeaderVisitButton