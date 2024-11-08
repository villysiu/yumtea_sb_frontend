import { Cart } from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react'
import {Modal} from 'react-bootstrap'
import CartModal from './CartModal'
import {useSelector, useDispatch} from 'react-redux'
import {resetCartBanner} from './cartSlice'


const CartButton =() =>{
    const dispatch = useDispatch();
    // const addToCartStatus = useSelector(state => state.cart.addToCartStatus)
    const message = useSelector(state => state.cart.cartBannerMessage)
    const cart = useSelector(state=>state.cart.cart.cart_arr)
    const [cartShow, setCartShow] = useState(false);

    const ref = useRef()
    
    const handleClick = () => {
        console.log('clicked')
        setCartShow(!cartShow);
    }
    
    useEffect(()=>{
        // show maodal when item added to cart
        if(message !== ""){
            setCartShow(true)
        }
    }, [message])

    

    useEffect(()=>{
        const clickOutside = e =>{
            console.log(e.target)
            if(ref.current && !ref.current.contains(e.target) 
                && e.target.id!=='cartButton' 
                && !e.target.classList.contains('remove_button')
            
            ){
                console.log('clicked outside')
                setCartShow(false)
                dispatch(resetCartBanner())
            }
        }
        document.addEventListener('click', clickOutside);
        
        return () => {
            document.removeEventListener("click", clickOutside);
        };

    },[])

    
    return (
        <div className="cart_button_wrapper">
        {
            cartShow && 
            <div ref={ref} className='cart_dropdown'>
                <CartModal setCartShow={setCartShow} /> 
            </div>
        
        }
        <Cart id='cartButton' className="cart_button" onClick={handleClick}/>
        </div>
    )
}
export default CartButton