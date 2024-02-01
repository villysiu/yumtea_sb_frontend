import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"
import { useRef } from "react"

const SingleOrder = ({order, show, setShow}) =>{
    const ref=useRef()
    const handleOpen = e =>{
        setShow(order.pk)
    }
    const handleClose = e =>{
        setShow(null)
    }

    const SingleOrderItem = ({item}) =>{
        
        return(
            <div className='singleorder_item'>
                <div className='orderhistory_order_img_container'>
                    <Link to={`${homeLink}/wines/${item.menuitem}`} className="solid_link">
                        <img src={`${homeLink}/IMG_0210.png`} className="orderhistory_order_img" alt="{item.title}"></img>
                    </Link>
            
                    <div className="qty_circle">{item.quantity}</div>
                </div>
                <div style={{width: '100%'}}>
                    <Link to={`${homeLink}/wines/${item.menuitem}`} className="solid_link">
                        <b>{item.title}</b>
                    </Link>
                    <div>Customize: {item.milk}</div>
                    <div>Price: {USDollar.format(item.unit_price)}</div>
                    
                </div>
                <div style={{textAlign: 'right'}}><b>{USDollar.format(item.line_total)}</b></div>
            </div>
        )
    }
    return(
        <>
        <div className='orderhistory_order' ref={ref} id={order.pk} >
            <div className='orderhistory_order_container'>
                <div className='orderhistory_order_header' onClick={handleOpen}>
                    <div className='orderhistory_order_header_l'>
                        <div className='orderhistory_order_col'>{order.date}</div>
                        <div className='orderhistory_order_col'>Order #{order.pk}</div>
                    </div>
                    <div className='orderhistory_order_header_c'>
                        <div className='orderhistory_order_col'>{USDollar.format(order.total)}</div>
                        <div className='orderhistory_order_col'>{order.order_status}</div>
                    </div>
                </div>
                {
                    show && show === order.pk ? 
                    <div className='orderhistory_order_header_r' onClick={handleClose}>
                       -
                    </div>
                    :
                    <div className='orderhistory_order_header_r' 
                    onClick={handleOpen}
                    >
                       +
                    </div>
                }
            </div>

            {show && show === order.pk &&
            <div className='orderhistory_order_details pt-4'>
                {
                    order.orderitems.map(item=>{
                        return (<SingleOrderItem key={item.pk} item={item}/>)
                    })
                }
            </div>
        }
        </div>
        

        </>

    )
}
export default SingleOrder