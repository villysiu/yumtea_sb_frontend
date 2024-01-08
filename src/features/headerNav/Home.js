import { House } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Home = () => {
    return (
    <div  className="flex_row_center">
        <Link to={"/"}>
            <House className="circle_button"  />
        </Link>
        <div className='d-none d-lg-block'>
            <Link to={"/"} className="link_black " >        
                Home
            </Link>
        </div>
    </div>
    )
}
export default Home