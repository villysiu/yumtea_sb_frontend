import { CartFill } from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react'
import {Modal} from 'react-bootstrap'
import CartModal from './CartModal'
import {useSelector, useDispatch} from 'react-redux'
import {getSubtotal, getItemsCountInCart} from './cartSlice'
import {useLocation} from 'react-router-dom'
import EmptyCart from './EmptyCart'

const CartIcon =() =>{
    const dispatch = useDispatch();
    const location = useLocation();

    const {count} = useSelector(state => getSubtotal(state))
    const {cartMessage} = useSelector(state => state.message)

    const [cartShow, setCartShow] = useState(false);

    // const ref = useRef()
    // const cartModalRef = useRef()
    const handleClick = () => {
        console.log('clicked')
        setCartShow(!cartShow);
    }
    
    useEffect(()=>{
        if(location.pathname === '/secure/checkout')
            setCartShow(false)
        // show maodal when item added to cart
        
        else if(cartMessage !== null){
            setCartShow(true)
        }
    }, [cartMessage])

    

    // useEffect(()=>{
    //     const clickOutside = e =>{
    //         console.log(e.target)
    //         // console.log(ref.current)
    //         // console.log(ref.current.contains(e.target))
    //         // console.log(cartModalRef.current)
    //         // console.log(cartModalRef.current.contains(e.target))
           
    //         if(
    //             (ref.current && !ref.current.contains(e.target))
    //             && (cartModalRef.current && !cartModalRef.current.contains(e.target))
    //             && (!e.target.classList.contains('remove_button'))
            
    //         ){
    //             console.log('clicked outside')
    //             setCartShow(false)
    //             dispatch(resetCartBanner())
    //         }
    //     }
    //     document.addEventListener('click', clickOutside);
        
    //     return () => {
    //         document.removeEventListener("click", clickOutside);
    //     };

    // },[])

    
    return (
        <>
        {
            cartShow && 
            
            <Modal show={cartShow} onHide={()=>setCartShow(false)}  dialogClassName='cart_modal' >
            
                <div className='cart_modal_content' 
                // ref={cartModalRef} 
                >
                    <CartModal setCartShow={setCartShow} /> 
                </div>
            </Modal>
            
        }
            <div 
            // ref={ref}
             className="cart_button_wrapper" onClick={handleClick}>
            
                {/* <div id='cartButton' onClick={handleClick} > */}
                    <CartFill className="cart_icon" />
                    {count > 0 && <div className='cartitem_count'> {count} </div>}
                {/* </div> */}
            </div>
        </>
    )
}
export default CartIcon