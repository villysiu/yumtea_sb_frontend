import { InfoCircle } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Info = () => {
    return (


        <div  className="flex_row_center">
            <Link to={"/about"}>
                <InfoCircle className="circle_button"  />
            </Link>
            <div className='d-none d-lg-block'>
                <Link to={"/about"} className="link_black " >        
                        About
                </Link>
            </div>
        </div>
    )
}
export default Info