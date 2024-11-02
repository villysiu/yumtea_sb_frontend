import {Trash} from 'react-bootstrap-icons'
import { useDispatch} from 'react-redux'
import {useRef, useState, useEffect} from 'react'

import {Button} from 'react-bootstrap'
import {removeItem} from './cartSlice'
const CartModalItemRemove =({menuitem_title, idx}) =>{
    const dispatch = useDispatch()
    const ref = useRef();
    const [remove, setRemove] = useState(false)

    const handleClick = () =>{
        console.log('click ttach')
        setRemove(true);
    }
    const handleRemove = () =>{
        dispatch(removeItem(idx))
        setRemove(false);
    }
    useEffect(()=>{
        const clickOutside = e =>{
            if(ref.current && !ref.current.contains(e.target)){
                setRemove(false)
            }
        }
        document.addEventListener('click', clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    },[])

    return (
        <div ref={ref}>
            {remove &&
                <div className='remove'  > 
                    <Button className='remove_button' onClick={handleRemove}>Remove {menuitem_title}? </Button>
                </div>
            }
            <div className='cart_modal_item_remove' onClick={handleClick}>
                <Trash /> 
            </div>
        </div>
    )

}
export default CartModalItemRemove