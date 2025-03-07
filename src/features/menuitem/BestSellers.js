import {useSelector} from "react-redux";
import {getMenuitemsByCategoryId} from "./menuitemSlice";
import {homeLink} from "../../app/global";
import Menuitem from "./Menuitem";
import {Col, Row} from "react-bootstrap";
import SingleBestSeller from "./SingleBestSeller";


const BestSellers = () =>{
   const {array, status} = useSelector(state => state.menuitem.bestSellers)


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
            <div className='menuitems_wrapper'>

                <Row className='menuitem_row'>
                    {
                        array.map((menuitem) => {
                            return (
                                <SingleBestSeller key={menuitem.menuitemId} menuitemId={menuitem.menuitemId} />
                            )
                        })
                    }

                </Row>
            </div>
        </div>
    )
}
export default BestSellers