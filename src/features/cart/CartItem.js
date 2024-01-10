import { useState } from "react"
import PlusButton from "./PlusButton"
import MinusButton from "./MinusButton"
import QtyInputBox from "./QtyInputBox"
import RemoveButton from "./RemoveButton"
import {  Row, Col } from "react-bootstrap"
import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const CartItem = ({cartItem}) => {
    const [error, setError] = useState("")
    console.log(cartItem)
    // const menuItemStatus = useSelector(state=>state.wine.wines.status)
    
    const menuItem = useSelector(state=>{
        let ww = state.wine.wines.wine_arr.filter(wine=>wine.pk === cartItem.menuitem)[0]
        console.log(ww)
        return ww
    })
    
    return(
        <Row className="borderSecondary border-bottom pb-5 cart_h">
                                            
            <Col md className="cart_h">
                <Col xs={3}>a pic</Col>
                <Col xs={9} className='cart_f'>
                    <Link to={`${homeLink}/wines/${cartItem.menuitem}`} className="solid_link">
                        
                        {menuItem.year} {menuItem.title}
                        {/* {cartItem.menuitem} */}
                    </Link>
                    
                </Col>
            </Col>
            <Col md className='cart_g'>
                <div className="cart_e">
                    <div className='cart_f'>
                        
                        <div className='cart_h'>
                            
                            <MinusButton itemId={cartItem.pk} qty={cartItem.quantity} setError={setError}/>
                            <QtyInputBox itemId={cartItem.pk} qty={cartItem.quantity} />
                            <PlusButton menuitemId={menuItem.pk} qty={cartItem.quantity} inventory={menuItem.inventory} setError={setError} />
                        </div>
                        <div className="error_message">
                            {error}
                        </div>
                        {
                            menuItem.inventory <5 && 
                            <div className="mt-2 low_inventory">
                                Only a few left
                            </div>
                        }
                        <div className='mt-2'>
                            <RemoveButton itemId={cartItem.pk} />
                        </div>
                    </div>
                    <div className='cart_i'>
                        <div>{USDollar.format(cartItem.unit_price)}</div>
                       
                        <div><b>Total {USDollar.format(cartItem.linetotal)}</b></div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default CartItem