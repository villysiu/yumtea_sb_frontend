import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
const HeaderHomeButton = ({current, setCurrent}) =>{
    return(
        <Link to={`${homeLink}/`} 
            className={current === "home" ? "header_home_button active" : "header_home_button"}
            onClick={()=>setCurrent("home")}
        >
            Home
        </Link>   
    )
}
export default HeaderHomeButton