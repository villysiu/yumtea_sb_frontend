import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { Row, Col } from "react-bootstrap"
const SingleOrder = ({order, show, setShow}) =>{
   
    const handleOpen = e =>{
        setShow(order.pk)
    }
    const handleClose = e =>{
        setShow(null)
    }

    const SingleOrderItem = ({item}) =>{
        return(
            <Col className='orderhistory_order_img_container'>
                <img src={`${homeLink}/ASC_websize.png`} className="orderhistory_order_img" alt="{item.menuitem}"></img>
                {/* {item.menuitem} <br/> */}
                <div className="qty_circle">{item.quantity}</div>
            </Col>
        )
    }
    return(
        <>
        <div className='orderhistory_order' >
            <div className='orderhistory_order_header'>
                <div className='orderhistory_order_header_l'>
                    <div className='orderhistory_order_col'>{order.date}</div>
                    <div className='orderhistory_order_col'>Order #{order.pk}</div>
                </div>
                <div className='orderhistory_order_header_c'>
                    <div className='orderhistory_order_col'>{USDollar.format(order.total)}</div>
                    <div className='orderhistory_order_col'>{order.order_status}</div>
                </div>
                {
                    show && show === order.pk ? 
                    <div className='orderhistory_order_header_r' onClick={handleClose}>
                       -
                    </div>
                    :
                    <div className='orderhistory_order_header_r' onClick={handleOpen}>
                       +
                    </div>
                }
            </div>

            {show && show === order.pk &&
            <Row className='orderhistory_order_details'>
                {
                order.orderitems.map(item=>{
                    return (<SingleOrderItem item={item}/>)
                })}
            </Row>
        }
        </div>
        

        </>

    )
}
export default SingleOrder