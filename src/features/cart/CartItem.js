import { useState } from "react"
import PlusButton from "./PlusButton"
import MinusButton from "./MinusButton"
import QtyInputBox from "./QtyInputBox"
import RemoveButton from "./RemoveButton"
import {  Row, div } from "react-bootstrap"
import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const CartItem = ({cartItem}) => {
    const [error, setError] = useState("")
    // console.log(cartItem)
    const [quantity, setQuantity] = useState(cartItem.quantity)
    
    const menuItem = useSelector(state=>{
        let ww = state.wine.wines.wine_arr.filter(wine=>wine.pk === cartItem.menuitem_id)[0]
        // console.log(ww)
        return ww
    })
    
    return(
        <div className="borderSecondary border-bottom pb-5 cartitem_container">
            <div className="cartitem_img_wrapper">
                <Link to={`${homeLink}/wines/${menuItem.pk}`}>
                    <img src={`${homeLink}/ASC_websize.png`} className="cartitem_img" alt={menuItem.title}></img>  
                </Link>
            </div>
            
            <div className='cartitem_info pt-4 ms-5'>
                <div className='cartitem_title'>
                    <Link to={`${homeLink}/wines/${menuItem.pk}`} className="solid_link">
                        {menuItem.year} {menuItem.title}
                    </Link>
                </div>
                <div className='cartitem_qty'>
                    <div className="cartitem_qty_input">
                        <MinusButton cartitemId={cartItem.pk} qty={quantity} setQuantity={setQuantity} setError={setError}/>
                        <QtyInputBox itemId={cartItem.pk} qty={quantity} />
                        <PlusButton menuitemId={menuItem.pk} qty={quantity} setQuantity={setQuantity} inventory={menuItem.inventory} setError={setError} />
                    </div>    
                    {
                        error.length>0 &&
                        <div className="error_message">
                            {error}
                        </div>
                    }
                    {
                        menuItem.inventory <5 && 
                        <div className="mt-2 low_inventory">
                            Only a few left
                        </div>
                    }
                    <div className='cartitem_other_width'>
                        <RemoveButton cartitemId={cartItem.pk} />
                    </div>
                </div>
                <div className='cartitem_price'>                       
                    <div>{USDollar.format(cartItem.unit_price)}</div>
                    <div><b>Total {USDollar.format(cartItem.linetotal)}</b></div>
                </div>
            </div>

        </div>
    )
}
export default CartItem