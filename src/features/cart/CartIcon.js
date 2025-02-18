import { CartFill } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react'
import {Modal} from 'react-bootstrap'
import CartModal from './CartModal'
import {useSelector} from 'react-redux'
import {getSubtotal} from './cartSlice'
import {useLocation} from 'react-router-dom'

const CartIcon =() =>{

    const location = useLocation();
    const {count} = useSelector(state => getSubtotal(state))
    const {cartMessage} = useSelector(state => state.message)

    const [cartShow, setCartShow] = useState(false);

    const handleClick = () => {
        setCartShow(!cartShow);
    }
    
    useEffect(()=>{
      if(cartMessage !== null){
            setCartShow(true)
        }
    }, [cartMessage])

    // Do not show cart icon in header navbar whrn in the following pages
    if(location.pathname === '/secure/checkout')
        return null

    return (
        <>
            {
                cartShow &&
                <Modal show={cartShow} onHide={()=>setCartShow(false)}  dialogClassName='cart_modal' >
                    <div className='cart_modal_content'>
                        <CartModal setCartShow={setCartShow} />
                    </div>
                </Modal>

            }
            <div  className="cart_button_wrapper ms-2" onClick={handleClick}>
                <CartFill className="cart_icon " />
                {count > 0 && <div className='cartitem_count'> {count} </div>}
            </div>
        </>
    )
}
export default CartIcon