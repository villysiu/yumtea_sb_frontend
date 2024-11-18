import { useState, useEffect } from "react"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import {Modal} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import {triggerCustomizeModal} from './menuitemSlice'

const Menuitem = ({menuitem}) =>{
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    // const menuitemClicked = useSelector(state=>state.menuitem.menuitemButton.clicked)
    // const cartitem_tobeUpdated = useSelector(state=>state.menuitem.menuitemButton.cartitem)

    const handleClick = () => {
        dispatch(triggerCustomizeModal(
            {
                menuitem_pk: menuitem.pk,
                milk_pk: menuitem.milk_id,
                temperature: menuitem.temperature,
                sweetness: 0,
                size: null,
                price: menuitem.price,
                quantity: 1
            }
        ))

    }
    

    
    return (
        <>
        
        <div className='menuitem_wrapper' onClick={handleClick}>
            <div className='menuitem_text'>
                <div><b>{menuitem.title} </b></div>
                <div>{USDollar.format(menuitem.price)}</div>
            </div>
            {
                menuitem.image_path !== null &&  
          
                <div className="menuitem_img_wrapper">

                    <img src={`${homeLink}/menuitem/${menuitem.image_path}`} className="menuitem_img" alt={menuitem.title}></img>  
                </div> 
            }
            <div className='menuitem_plus_circle'>
                +
            </div>     
            

    

           

        </div>
        </>
    )
}
export default Menuitem