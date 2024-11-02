import { Cart } from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react'
import {Modal} from 'react-bootstrap'
import CartModal from './CartModal'
import {useSelector, useDispatch} from 'react-redux'
import {resetAddToCart} from './cartSlice'

const CartButton =() =>{
    const dispatch = useDispatch();
    const addToCartStatus = useSelector(state => state.cart.addToCartStatus)
    const [show, setShow] = useState(false);
    

    const cart = useSelector(state=>state.cart.cart.cart_arr)
    const ref = useRef()
    
    const handleClick = () => {
        console.log('clicked')
        setShow(!show);
    }
    
    useEffect(()=>{
        // show maodal when item added to cart
        if(addToCartStatus === 'succeeded'){
            setShow(true)
        }
    }, [addToCartStatus])

    useEffect(() => {
        if(addToCartStatus === 'succeeded'){
            const itemAddedTimer = setTimeout(() => {
                dispatch(resetAddToCart());
                
            }, 3000);
            return () => clearTimeout(itemAddedTimer);
        }
        if(show){
            const closeCart = setTimeout(() => {
                setShow(false)
                
            }, 10000);
            return () => clearTimeout(closeCart);
        }
        
    }, [addToCartStatus, resetAddToCart, dispatch, show]);

    useEffect(()=>{
        const clickOutside = e =>{
            console.log('clicked outside')
            console.log(e.target.id)

            if(ref.current && !ref.current.contains(e.target) && e.target.id!=='cartButton'){
               setShow(false)
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
            show && 
            <div  ref={ref} className='cart_dropdown'>
                <CartModal addToCartStatus = {addToCartStatus} /> 
            </div>
        
        }
        <Cart id='cartButton' className="cart_button" onClick={handleClick}/>
        </div>
    )
}
export default CartButton