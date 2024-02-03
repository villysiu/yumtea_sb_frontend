import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { USDollar } from "../../app/global"
const SingleOrderItem = ({item}) =>{
        
    return(
        <div className='singleorder_item'>
            <div className='orderhistory_order_img_container'>
                <Link to={`${homeLink}/wines/${item.menuitem}`} className="solid_link">
                    <img src={`${homeLink}/IMG_0210.png`} className="orderhistory_order_img" alt="{item.title}"></img>
                </Link>
        
                <div className="qty_circle">{item.quantity}</div>
            </div>
            <div style={{width: '100%'}}>
                <Link to={`${homeLink}/wines/${item.menuitem}`} className="solid_link">
                    <b>{item.title}</b>
                </Link>
                <div>Customize: {item.milk}</div>
                <div>Price: {USDollar.format(item.unit_price)}</div>
                
            </div>
            <div style={{textAlign: 'right'}}><b>{USDollar.format(item.line_total)}</b></div>
        </div>
    )
}
export default SingleOrderItem