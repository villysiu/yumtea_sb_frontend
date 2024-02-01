import { useState } from "react"
import PlusButton from "./PlusButton"
import MinusButton from "./MinusButton"
import QtyInputBox from "./QtyInputBox"
import RemoveButton from "./RemoveButton"
import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getMenuitemTitleById, getMilkTitleById, getMenuitemById } from "../menuitem/menuitemSlice"
import EditButton from "./EditButton"
// import { Modal } from "react-bootstrap"
// import CustomizeContainer from "../menuitem/CustomizeContainer"

const CartItem = ({cartId, cartItem}) => {
    const [error, setError] = useState("")
    console.log(cartItem)
    const [quantity, setQuantity] = useState(cartItem.quantity)
    const [show, setShow] = useState(false)
    const milkTitle = useSelector(state=>getMilkTitleById(state, cartItem.milk_id))
    const menuitemTitle = useSelector(state=>getMenuitemTitleById(state, cartItem.menuitem_id))
    const menuitem = useSelector(state=>getMenuitemById(state, cartItem.menuitem_id))

    return(
        <>
            
            <div className="borderSecondary border-bottom pb-5 cartitem_container">
                <div className="cartitem_img_wrapper">
                    <Link to={`${homeLink}/menuitems/${cartItem.menuitem_id}`}>
                        <img src={`${homeLink}/IMG_0210.png`} className="cartitem_img" alt={menuitemTitle}></img>  
                    </Link>
                </div>
                
                <div className='cartitem_info pt-4 ms-5'>
                    <div className='cartitem_title_options'>
                        <div className='cartitem_title'>
                            <Link to={`${homeLink}/menuitems/${cartItem.menuitem_id}`} className="solid_link">
                                <b>{menuitemTitle}</b>
                            </Link>
                            
                        </div>
                        <div className='cartitem_options'>
                            {milkTitle}
                        </div>
                    </div>
                    <div className='cartitem_qty'>
                        <div className="cartitem_qty_input">
                            <MinusButton cartId={cartId} cartItem={cartItem} setQuantity={setQuantity} setError={setError}/>
                            <QtyInputBox itemId={cartItem.pk} qty={quantity} />
                            <PlusButton cartitem={cartItem} setQuantity={setQuantity} 
                            // inventory={menuItem.inventory}  
                            inventory={100}
                            setError={setError} />
                        </div>    
                        {
                            error.length>0 &&
                            <div className="error_message">
                                {error}
                            </div>
                        }
                        {/* {
                            menuItem.inventory <5 && 
                            <div className="mt-2 low_inventory">
                                Only a few left
                            </div>
                        } */}
                        <div className='cartitem_other_width'>
                            <EditButton cartId={cartId} cartItem={cartItem} />
                        </div>
                        <div className='cartitem_other_width'>
                            <RemoveButton cartId={cartId} cartItem={cartItem} title={menuitemTitle} />
                        </div>
                    </div>
                    <div className='cartitem_price'>                       
                        <div>{USDollar.format(cartItem.unit_price)}</div>
                        <div><b>Total {USDollar.format(cartItem.linetotal)}</b></div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default CartItem