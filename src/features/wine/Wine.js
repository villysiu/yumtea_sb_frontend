import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import PurchaseButton from "./PurchaseButton"
const Wine = ({menuitem}) =>{
    if(menuitem.inventory === 0)
        return null
    const title = menuitem.year +" " + menuitem.title
    return (
        <Col sm={12} md={4} lg={3} className="mt-5">             
            <Link to={`${homeLink}/wines/${menuitem.pk}`} className='solid_link'>{menuitem.title}</Link>
            <div>{menuitem.year}</div>
            <div>{menuitem.varietal}</div>
            <div>{USDollar.format(menuitem.price)}</div>

            <PurchaseButton menuitemId={menuitem.pk} menuitemTitle={title} price={menuitem.price}/>
        </Col>

    )
}
export default Wine