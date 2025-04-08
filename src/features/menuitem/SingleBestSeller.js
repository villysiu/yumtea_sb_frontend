import {useDispatch, useSelector} from "react-redux";
import {getMenuitemById, triggerCustomizeModal} from "./menuitemSlice";
import Menuitem from "./Menuitem";
import {Col} from "react-bootstrap";
import {StarFill, BookmarkFill} from "react-bootstrap-icons";
import {apiLink, USDollar} from "../../app/global";

const SingleBestSeller = ({idx, menuitemId}) =>{
    const menuitem = useSelector(state=>getMenuitemById(state, menuitemId))
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(triggerCustomizeModal(
            {
                id: null,
                menuitem: menuitem,
                milk: menuitem.milk,
                temperature: menuitem.temperature,
                sugar: menuitem.sugar,
                size: null,
                quantity: 1
            }
        ))

    }
    return (
        <Col xs={12} md={4} className="mb-3" key={menuitem.id}>

            <div className="single_bestSeller_img_wrapper" onClick={handleClick}>
                <img src={`${apiLink}/images/${menuitem.imageUrl}`} className="single_bestSeller_img" alt={menuitem.title}></img>

                <div className="single_bestSeller_whitebox">
                    <div className="single_bestSeller_text"><b>{menuitem.title} </b></div>
                    <div>{USDollar.format(menuitem.price)}</div>
                </div>

                <div className="yellow_container">
                    <StarFill className="yellowbookmark"/>
                    <div className="yellowtext">{idx + 1}</div>
                </div>

                <div className='single_bestSeller_plus_circle'>
                    +
                </div>
            </div>


        </Col>

    )
}
export default SingleBestSeller