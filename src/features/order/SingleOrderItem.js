import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getMenuitemTitleById } from "../menuitem/menuitemSlice"
import ItemCustomizationList from "../cart/ItemCustomizationList"

const SingleOrderItem = ({item}) =>{
    const menuitem_title = useSelector(state=>getMenuitemTitleById(state, item.menuitem_id))
    // const milk = useSelector(state=>getMilkById(state, item.milk_id))

    return(
        <div className='singleorder_item'>
            <div className='orderhistory_order_img_container'>
                <Link to={`${homeLink}/menuitems/${item.menuitem_id}`} className="solid_link">
                    <img src={`${homeLink}/IMG_0210.png`} className="orderhistory_order_img" alt="{item.title}"></img>
                </Link>
        
                <div className="qty_circle">{item.quantity}</div>
            </div>
            <div style={{width: '100%'}}>
                <Link to={`${homeLink}/menuitems/${item.menuitem_id}`} className="solid_link">
                    <b>{menuitem_title}</b>
                </Link>
                <div>
                    <ItemCustomizationList milk_id={item.milk_id} temperature={item.temperature} sweetness={item.sweetness} />
                </div>
                <div>Price: {USDollar.format(item.unit_price)}</div>
                
            </div>
            <div style={{textAlign: 'right'}}><b>{USDollar.format(item.line_total)}</b></div>
        </div>
    )
}
export default SingleOrderItem