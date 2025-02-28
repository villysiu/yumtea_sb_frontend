import { Link } from "react-router-dom"
import { homeLink } from '../../app/global';

const Title = () => {

    return (
        <Link to={`${homeLink}`} className="header_brand_container">
            <div className="mask">
                <div className="logoBg" ></div>
            </div>
        </Link>


    )
}
export default Title