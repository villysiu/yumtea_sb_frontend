import { Col } from "react-bootstrap"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import { homeLink } from "../../app/global"
import { USDollar } from "../../app/global"
import OutOfStockButton from "./OutOfStockButton"
import { useState } from "react"
import CustomizeContainer from "./CustomizeContainer"
import { Button } from "react-bootstrap"

const Menuitem = ({menuitem}) =>{
    
    const [show, setShow] = useState(false);
    return (
        <>
        {
            <Modal show={show} onHide={()=>setShow(false)}>
                <CustomizeContainer menuitem={menuitem} setShow={setShow} /> 
            </Modal>
        }
        
        <Col sm={12} md={4} lg={3} className="winelist_wine_wrapper"> 
            <Link to={`${homeLink}/menuitems/${menuitem.pk}`} className='solid_link'>
                <div className="winelist_img_wrapper">
                    <img src={`${homeLink}/IMG_0210.png`} className="winelist_img" alt={menuitem.title}></img>  
                </div>      
                <div className="winelist_wine_title">{menuitem.title}</div>
            </Link>
       

            <div className='mb-3'>{USDollar.format(menuitem.price)}</div>

            { menuitem.inventory === 0 ?
                <OutOfStockButton />
                :
                <div style={{"position": "relative"}}>
                    <Button className='gold_button' onClick={()=>setShow(true)}>Customize</Button>
                    {/* {message && <AddedOverlay message={message} setMessage={setMessage}/>} */}
                </div>
            }
        </Col>
        </>
    )
}
export default Menuitem