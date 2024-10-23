import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
const HeaderVisitButton = ({current, setCurrent}) =>{
    return(
        <Link to={`${homeLink}/visit-taste`} 
            className={current === "visit-taste" ? "header_home_button active" : "header_home_button"}
            onClick={()=>setCurrent("visit-taste")}
        >
            Visit & Taste
        </Link>   
    )
}
export default HeaderVisitButton