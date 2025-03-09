import {useSelector} from "react-redux";
import {getMenuitemById} from "./menuitemSlice";
import Menuitem from "./Menuitem";
import {Col} from "react-bootstrap";
import {StarFill, BookmarkFill} from "react-bootstrap-icons";

const SingleBestSeller = ({menuitemId}) =>{
    const menuitem = useSelector(state=>getMenuitemById(state, menuitemId))
    return (
        <Col xs={12} md={4} className="mb-3" key={menuitem.id} style={{"position": "relative"}}>

            <Menuitem menuitem={menuitem}/>
            <StarFill className="yellowbookmark" />

        </Col>

    )
}
export default SingleBestSeller