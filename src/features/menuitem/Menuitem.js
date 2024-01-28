import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import PurchaseButton from "./PurchaseButton"
import OutOfStockButton from "./OutOfStockButton"
const Wine = ({menuitem}) =>{
    
    const title = menuitem.year +" " + menuitem.title
    return (
        <Col sm={12} md={4} lg={3} className="winelist_wine_wrapper"> 
            <Link to={`${homeLink}/menuitems/${menuitem.pk}`} className='solid_link'>
                <div className="winelist_img_wrapper">
                    <img src={`${homeLink}/ASC_websize.png`} className="winelist_img" alt={menuitem.title}></img>  
                </div>      
                <div className="winelist_wine_title">{menuitem.year} {menuitem.title}</div>
            </Link>
       
            <div>{menuitem.varietal}</div>
            <div className='mb-3'>{USDollar.format(menuitem.price)}</div>

            { menuitem.inventory === 0 ?
                <OutOfStockButton />
                :

                <PurchaseButton menuitemId={menuitem.pk} menuitemTitle={title} price={menuitem.price}/>
            }
        </Col>

    )
}
export default Wine