import { Link } from "react-router-dom"
import { homeLink } from '../../app/global';
import Brand from '../home/Brand'
const Title = () => {
    return (
        <Link to={`${homeLink}`} className = "header_brand_container">
            <Brand />
        </Link>
                
        
    )
}
export default Title