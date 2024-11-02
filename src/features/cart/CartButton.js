import { Cart } from 'react-bootstrap-icons';
import { useState, useEffect, useRef } from 'react'
import {Modal} from 'react-bootstrap'
import CartModal from './CartModal'
import {useSelector, useDispatch} from 'react-redux'


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

    

    useEffect(()=>{
        const clickOutside = e =>{

            if(ref.current && !ref.current.contains(e.target) 
                && e.target.id!=='cartButton' && !e.target.classList.contains('remove_button')){
                console.log('clicked outside')
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
                <CartModal /> 
            </div>
        
        }
        <Cart id='cartButton' className="cart_button" onClick={handleClick}/>
        </div>
    )
}
export default CartButton