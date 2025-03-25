import {apiLink, homeLink} from "../../app/global"
import { Link } from "react-router-dom"
import { USDollar } from "../../app/global"
import { useSelector, useDispatch } from "react-redux"
import {getMenuitemById, getMilkById, sugarMap} from "../menuitem/menuitemSlice"
import {triggerMenuItem, triggerCustomizeModal} from '../menuitem/menuitemSlice'

const SingleOrderItem = ({item}) =>{
    const dispatch = useDispatch();
    console.log(item)
    const menuitem = useSelector(state=>getMenuitemById(state, item.menuitem.id))
    const handleClick =() =>{
        // dispatch(triggerMenuItem({cartitem: item} ))
        // dispatch(triggerCustomizeModal(
        //     {
        //         menuitem_pk: item.menuitem_id,
        //         milk_pk: item.milk_id,
        //         temperature: item.temperature,
        //         sweetness: item.sweetness,
        //         size: item.size,
        //         price: item.price,
        //         quantity: 1
        //     }
        // ))
    }
    return(
        <div className='singleorder_item'>

             {/*<Link to={`${homeLink}/menuitems/${item.menuitem_id}`} className='orderhistory_order_img_container'> */}
            <div className='orderhistory_order_img_container' onClick={handleClick}>
                <img src={`${apiLink}/images/${menuitem.imageUrl}`} className="orderhistory_order_img" alt="{item.title}"></img>
                <div className="qty_circle">{item.quantity}</div>
            </div>
            {/*/!* </Link> *!/*/}
            <div style={{width: '100%'}}>
                <Link to={`${homeLink}/menuitems/${item.menuitem.id}`} className="solid_link">
                    <b>{item.menuitem.title}</b>
                </Link>
                <div>
                    {item.size.title} | {item.temperature}
                    {item.milk.title === "NA" ? null : ` | ${item.milk.title}`}
                    {item.sugar === "NA" ? null: ` | ${sugarMap.get(item.sugar)}`}


                </div>
                 <div>Price: {USDollar.format(item.price)}</div>

            </div>
            <div style={{textAlign: 'right'}}><b>{USDollar.format(item.price * item.quantity)}</b></div>
        </div>
    )
}
export default SingleOrderItem