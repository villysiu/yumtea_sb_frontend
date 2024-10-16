import { Link } from "react-router-dom"
import { homeLink } from '../../app/global';

const Title = () => {
    return (
        <Link to={`${homeLink}`} 
            className="nav_brand header_title" 
            // onClick={()=>setShow(false)}
            >
                Yum Cha 
        </Link>
                
        
    )
}
export default Title