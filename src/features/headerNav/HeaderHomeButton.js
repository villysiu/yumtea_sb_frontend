import { Link, useLocation } from 'react-router-dom';

const HeaderHomeButton = ({current, setCurrent}) =>{
    const location = useLocation()
    return(
        <Link to="/" state={location.pathname}>
            Home
        </Link>  
    )
}
export default HeaderHomeButton