import {useSelector} from "react-redux";
import {getMenuitemsByCategoryId} from "./menuitemSlice";
import {homeLink} from "../../app/global";
import {Col, Row} from "react-bootstrap";
import Menuitem from "./Menuitem";

const BestSellers = () =>{
   const bestsellers = []

    return (
        <div className='category'>
            <div className='category_wrapper'>
                <img src={`${homeLink}/category/12typestea.jpg`}
                     className="category_img" alt="Best Sellers"
                />
                <div className='category_label'>
                    Best Sellers
                </div>

            </div>
        </div>
    )
}
export default BestSellers