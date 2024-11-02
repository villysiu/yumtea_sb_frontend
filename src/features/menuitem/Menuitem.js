import { useState } from "react"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import OutOfStockButton from "./OutOfStockButton"
import CustomizeContainer from "../customise/CustomizeContainer"
import CustomizeButton from "../customise/CustomizeButton"
import {Modal} from "react-bootstrap"
const Menuitem = ({menuitem}) =>{

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true);
    }
    
    return (
        <>
        {
            show && 
            <Modal show={show} onHide={()=>setShow(false)}>
                <CustomizeContainer menuitem={menuitem} setShow={setShow} /> 
            </Modal>
        
        }
        <div className='menuitem_wrapper' onClick={handleClick}>
            <div className='menuitem_text'>
                <div><b>{menuitem.title} </b></div>
                <div>{USDollar.format(menuitem.price)}</div>
            </div>
            <div className="menuitem_img_wrapper">
                <img src={`${homeLink}/chai.jpg`} className="menuitem_img" alt={menuitem.title}></img>  
            </div> 

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