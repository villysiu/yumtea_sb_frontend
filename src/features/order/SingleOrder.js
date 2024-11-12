import { USDollar } from "../../app/global"
import { useRef } from "react"
import SingleOrderItem from "./SingleOrderItem"
import {useSelector} from 'react-redux'
import {getSubtotal} from './orderSlice'
const SingleOrder = ({order, show, setShow}) =>{
    const subtotal = useSelector(state=>getSubtotal(order.orderitems))
    const ref=useRef()
    const handleOpen = e =>{
        setShow(order.pk)
    }
    const handleClose = e =>{
        setShow(null)
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
                        <div className='orderhistory_order_col'>{USDollar.format(subtotal * 1.1 + order.tip)}</div>
                        {/* <div className='orderhistory_order_col'>{order.order_status}</div> */}
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
                <div className="orderhistory_order_tip_wrapper" >
                    <div className="orderhistory_order_tip">
                        <div >Tip: </div>
                        <div><b>{USDollar.format(order.tip)}</b></div>
                    </div>
                    <div className="orderhistory_order_tip">
                        <div >Tax: </div>
                        <div><b>{USDollar.format(subtotal * 0.1)}</b></div>
                    </div>
                    <div className="orderhistory_order_tip">
                        <div >Total: </div>
                        <div><b>{USDollar.format(subtotal*1.1 + order.tip)}</b></div>
                    </div>
               
                </div>
            </div>
        }
        </div>
        

        </>

    )
}
export default SingleOrder