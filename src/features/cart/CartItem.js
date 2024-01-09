import { useState } from "react"
import PlusButton from "./PlusButton"
import MinusButton from "./MinusButton"
import QtyInputBox from "./QtyInputBox"
import {  Row, Col } from "react-bootstrap"
const CartItem = ({item}) => {
    const [error, setError] = useState("")

   
    return(
        <Row key={item.pk} className="borderSecondary border-bottom pb-5 cart_h">
                                            
            <Col md className="cart_h">
                <Col xs={3}>a pic</Col>
                <Col xs={9} className='cart_f'>
                    <div>{item.title}</div>
                    <div>remove button</div>
                </Col>
            </Col>
            <Col md className='cart_g'>
                <div className="cart_e">
                    <div className='cart_f'>
                        
                        <div className='cart_h'>
                            
                            <MinusButton itemId={item.pk} qty={item.quantity} setError={setError}/>
                            <QtyInputBox itemId={item.pk} qty={item.quantity} />
                            <PlusButton itemId={item.pk} qty={item.quantity} />
                        </div>
                        <div className="error_message">
                            {error}
                        </div>
                    </div>
                    <div>(${item.price} each)</div>
                </div>
            </Col>
        </Row>
    )
}
export default CartItem