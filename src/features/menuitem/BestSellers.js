import {useSelector} from "react-redux";

import { Row} from "react-bootstrap";
import SingleBestSeller from "./SingleBestSeller";


const BestSellers = () =>{
   const {array} = useSelector(state => state.menuitem.bestSellers)


    return (
        <div className='category'>

            <div className='bestSeller_label'>
                Best Sellers
            </div>



            <Row className='menuitem_row'>
                {
                    array.map((menuitem, idx) => {
                        return (
                            <SingleBestSeller key={menuitem.menuitemId} idx={idx} menuitemId={menuitem.menuitemId} />
                        )
                    })
                }

            </Row>
           
        </div>
    )
}
export default BestSellers