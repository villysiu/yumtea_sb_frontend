import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import CustomizeContainer from "./CustomizeContainer"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import { getMenuitemById } from "./menuitemSlice"
import AddedOverlay from "./AddedOverlay"

const SingleMenuitem = () =>{
    let {itemId} = useParams()
    const [message, setMessage] = useState("")
    let singleMenuitem = useSelector(state => getMenuitemById(state, parseInt(itemId)))

    const [show, setShow] = useState(false);
   
    const Title = () => {
        return(
            <div className='singlewine_title '> 
                {singleMenuitem.title}
            </div>
        )
    }
    const ItemImage = () =>{
        return(
        <div className="singlewine_img_wrapper">
            <img src={`${homeLink}/IMG_0210.PNG`} className="singlewine_img" alt={singleMenuitem.title}></img>
        </div>
        )
    }
    const Desc = () =>{
        return (
            <>
                {singleMenuitem.description}
                {singleMenuitem.description}
            </>
        )
    }
    const Props = () =>{
        return (
            <ul className='singlewine_props_wrapper'>
                <li className='singlewine_prop pe-3'>
                    <span>Hot / Cold</span>
                    
                </li>
                <li className='singlewine_prop ps-3 pe-3'>
                    <span>Sweetness</span>
                </li>
                { 
                    singleMenuitem.milk_id !== 1 && 
                    <li className='singlewine_prop ps-3'>
                        <span>Milk Alternative</span>
                    </li>
                }
                <li className='singlewine_prop ps-3' style={{borderRight: '0px'}}>
                    <span>Topping</span>
                </li>

            </ul>
        )
    }
    const Price =() =>{
        return(
            <div className='singlewine_cart mb-3'>
                <span className="singlewine_price pe-4 ">{USDollar.format(singleMenuitem.price)}</span>
               
                {/* <PurchaseButton setShow={setShow} /> */}
                <Button className='gold_button short' onClick={()=>setShow(true)}>Customize</Button>
                {message && <AddedOverlay message={message} setMessage={setMessage}/>}
            </div>
        )
    }
    if(singleMenuitem===undefined)
        return( <div>cannot find item, not existed? </div>
    )
    
    return(
        <>
        {
            <Modal show={show} onHide={()=>setShow(false)}>
                <CustomizeContainer singleMenuitem={singleMenuitem} setShow={setShow} setMessage={setMessage} /> 
            </Modal>
        }
        <div className="singlewine_wrapper">
            
            <div className="singlewine_bg_wrapper" >
                {/* <div className='singlewine_bg'></div> */}
                <img src={`${homeLink}/IMG_0216.JPG`} className="singlewine_bg" alt={singleMenuitem.title}
                
                ></img>
                
          
                <div className="singlewine_img_pos_wrapper app_width d-none d-sm-block">
                    <ItemImage />
                </div>
                <div className="singlewine_title_pos_wrapper app_width d-none d-sm-block">
                    <div className="singlewine_title_cart_props_wrapper">
                        
                        <Title />
                        <Price />
                        <Props />
                        
                    </div>
                </div>
                <div className=" d-block d-sm-none singlewine_title_img_visibility_wrapper">
                    <div className="singlewine_title_img_sm_wrapper">
                        
                            <Title />
                        
                        <ItemImage />
                        
                         
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none" style={{marginTop: "8rem"}}>
                <Price />
                <Props />
            </div>
            <div className="singlewine_desc_wrapper app_width">
                <Desc />
            </div>
           
         </div>
         </>
    )
}
export default SingleMenuitem