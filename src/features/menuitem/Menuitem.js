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

    // console.log(cartitem_tobeUpdated)
    //  {menuitem_id: 7, quantity: 1, temperature: 'Hot', size: 16, price: 6, pk:"5c05757e-b91b-42cc-be62-348cdf400efd" }

    useEffect(()=>{
        if(menuitemClicked && cartitem_tobeUpdated.menuitem_id === menuitem.pk){
            setShow(true)
           
        }
    }, [menuitemClicked, cartitem_tobeUpdated,menuitem, setShow])
    
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
            

       
            {/* 

            { menuitem.inventory === 0 ?
                <OutOfStockButton />
                :
                <div>
                    <CustomizeButton menuitem={menuitem}/>
                    {/* <Button className='gold_button' onClick={()=>setShow(true)}>Customize</Button> */}
                    {/* {message && <AddedOverlay message={message} setMessage={setMessage}/>} */}
                {/* </div>
            } */}

        </div>
        </>
    )
}
export default Menuitem