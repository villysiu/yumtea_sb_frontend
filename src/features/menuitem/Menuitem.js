import { useState, useEffect } from "react"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import {Modal} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import {triggerCustomizeModal} from './menuitemSlice'

const Menuitem = ({menuitem}) =>{

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(triggerCustomizeModal(
            {
                id: null,
                menuitem: menuitem,
                milk: menuitem.milk,
                temperature: menuitem.temperature,
                sugar: menuitem.sugar,
                size: null,
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
                menuitem.imageUrl !== null &&
          
                <div className="menuitem_img_wrapper">
                    <img src={`${homeLink}/menuitem/${menuitem.imageUrl}`} className="menuitem_img" alt={menuitem.title}></img>
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