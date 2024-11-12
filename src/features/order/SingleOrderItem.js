import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector } from "react-redux"
import { getMenuitemTitleById, getMilkById } from "../menuitem/menuitemSlice"

const SingleOrderItem = ({item}) =>{
    const menuitem_title = useSelector(state=>getMenuitemTitleById(state, item.menuitem_id))
    const milkTitle = useSelector(state=>getMilkById(state, item.milk_id))
 
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
                    {item.size}oz | {item.temperature === "H"? "Hot": "Iced"} | {milkTitle} | {item.sweetness===0? "No Sugar" : `${item.sweetness}%`}
                    
                </div>
                <div>Price: {USDollar.format(item.price)}</div>
                
            </div>
            <div style={{textAlign: 'right'}}><b>{USDollar.format(item.price * item.quantity)}</b></div>
        </div>
    )
}
export default SingleOrderItem