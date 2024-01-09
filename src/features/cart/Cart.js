import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCart } from "./cartSlice"
import { Container, Row, Col, Button } from "react-bootstrap"
import { CartFill } from "react-bootstrap-icons"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
const Cart = () => {
    const dispatch = useDispatch()
    const {cart_arr, status} = useSelector(state=>{
        console.log(state)
        return state.cart.cart

    })
    const {username} = useSelector(state => state.user.current_user)

    useEffect(()=>{

        if(username && status === 'idle'){
            console.log("not to be here if no user")
            dispatch(fetchCart())
        }
    }, [dispatch, username, status])

    return (
        <Container >
            <Row className="border borderSecondary border-bottom-0">
                <Col className="cart_a m-3">
                 
                    <CartFill style={{fontSize:'2rem', marginRight: '1rem'}} /> 
                    {
                        <>Your Cart: {cart_arr.length} item(s)</>
                    }
                </Col>
            </Row>
            <Row className="border borderSecondary cart_c px-3">
                {
                    cart_arr.length === 0 ? 
                        <>
                            <Col className="cart_b">Your Cart is Empty</Col> 
                            <Col className='my-3 cart_d'>
                                <Link to={`${homeLink}/wines`}>
                                <Button className='cart_button'>Continue Shopping</Button>
                                </Link>
                            </Col>
                        </>
                        :
                        <>
                            
                            {
                                cart_arr.map(item=>{
                                    return (
                                        <Row className="borderSecondary border-bottom pb-5 cart_h">
                                            
                                                <Col md className="cart_h">
                                                    <Col xs={3}>a pic</Col>
                                                    <Col xs={9} className='cart_f'>
                                                        <div>{item.title}</div>
                                                        <div>remove button</div>
                                                    </Col>
                                                </Col>
                                                <Col md className='cart_g'>
                                                    <div className="cart_e">
                                                        <div className='cart_h'>
                                                            {/* qty: "-"{item.quantity}"+" */}
                                                            <Button className="qty_minus rounded-start" variant="light">-</Button>
                                                            {/* <button type="button" className="qty_minus rounded-start" onclick="alert('Hello world!')">+</button> */}
                                                            <Form.Control type="text" className='qty_box' value={item.quantity} />
                                                            <Button className="qty_plus rounded-end" variant="light">+</Button>
                                                        </div>
                                                        <div>(${item.price} each)</div>
                                                    </div>
                                                </Col>
                                        </Row>
                                    )
                                })
                            }
                        </>
                }
                
            </Row>
        </Container>

    )

    // if(cart_arr.length===0){
    //     <
    // }
        
    // return(
    //     <div>
    //         {
    //             cart_arr.map(item => {
    //                 return(
    //                 <>{item.title} - {item.price}</>)
    //             })
    //         }
    //     </div>
        
    // )
}
export default Cart