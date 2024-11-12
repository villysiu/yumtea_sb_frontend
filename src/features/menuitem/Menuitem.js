import { useState, useEffect } from "react"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import OutOfStockButton from "./OutOfStockButton"
import CustomizeContainer from "../customise/CustomizeContainer"
import CustomizeButton from "../customise/CustomizeButton"
import {Modal} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import {resetMenuitemClicked} from './menuitemSlice'

const Menuitem = ({menuitem}) =>{
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const menuitemClicked = useSelector(state=>state.menuitem.menuitemButton.clicked)
    const cartitem_tobeUpdated = useSelector(state=>state.menuitem.menuitemButton.cartitem)

    const handleClick = () => {
        setShow(true);
    }
    const handleHide = () =>{
        setShow(false)
        dispatch(resetMenuitemClicked())
    }
    // console.log(menuitemClicked)
    // console.log(cartitem_tobeUpdated)
    
    // from api
    // menuitem_id: 17, milk_id: 8, pk: 7,price: 6, quantity: 1, size: 16, sweetness: 0, temperature: "I", user_id: 1
    // from not login
    // ?? {menuitem_id: 7, quantity: 1, temperature: 'Hot', size: 16, price: 6, pk:"5c05757e-b91b-42cc-be62-348cdf400efd" }

    useEffect(()=>{
        console.log(cartitem_tobeUpdated.menuitem_id)
        if(menuitemClicked && cartitem_tobeUpdated.menuitem_id === menuitem.pk){
            setShow(true)
           
        }
    }, [menuitemClicked, cartitem_tobeUpdated, menuitem])
    
    return (
        <>
        {
            show && 
            <Modal show={show} onHide={handleHide} size='lg'>
                {menuitemClicked && cartitem_tobeUpdated !== "" ?

                <CustomizeContainer 
                    cartitemPk = {cartitem_tobeUpdated.pk}
                    itemId = {menuitem.pk}
                    itemTitle={menuitem.title}
                    itemTemp = {cartitem_tobeUpdated.temperature}
                    itemSize = {cartitem_tobeUpdated.size}
                    itemMilkId = {cartitem_tobeUpdated.milk_id}
                    itemSweet = {cartitem_tobeUpdated.sweetness}
                    itemPrice = {cartitem_tobeUpdated.price}
                    itemQty={cartitem_tobeUpdated.quantity} 
                    setShow={setShow} 
                    task='update' 
                /> 
                :
                <CustomizeContainer 
                    cartitemPk ={null}
                    itemId = {menuitem.pk}
                    itemTitle={menuitem.title}
                    itemTemp = {menuitem.temperature}
                    itemSize = {menuitem.size || null}
                    itemMilkId = {menuitem.milk_id}
                    itemSweet = {0}
                    itemPrice = {menuitem.price}
                    itemQty={1} 
                    setShow={setShow} 
                    task='add' 
                /> 
                
                
                } 
            </Modal>
        
        }
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