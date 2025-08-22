import { Link, useLocation } from 'react-router-dom';

const HeaderSupportButton = ({current, setCurrent}) =>{
    const location = useLocation()
    return(
        <Link to="/support" state={location.pathname}
            className={`header_buttons ${location.pathname === '/support' ? 'active' : ""}`}
        >
            Support
        </Link>  
    )
}
export default HeaderSupportButton