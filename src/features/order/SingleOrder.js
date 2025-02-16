import { USDollar } from "../../app/global"
import { useRef } from "react"
import SingleOrderItem from "./SingleOrderItem"
import {useSelector} from 'react-redux'
import {convertTimestampToDatetime, getSubtotal} from './orderSlice'
const SingleOrder = ({order, show, setShow}) =>{

    // 1739731901066
    console.log(typeof order.purchaseDate)
    const orderDate = useSelector(state=>convertTimestampToDatetime(order.purchaseDate))
    const ref=useRef()
    const handleOpen = e =>{
        setShow(order.id)
    }
    const handleClose = e =>{
        setShow(null)
    }

    
    return(
        <>
        <div className='orderhistory_order' ref={ref} id={order.id} >
            <div className='orderhistory_order_container'>
                <div className='orderhistory_order_header' onClick={handleOpen}>
                    <div className='orderhistory_order_header_l'>
                        <div className='orderhistory_order_col'>{orderDate}</div>
                        <div className='orderhistory_order_col'>Order #{order.id}</div>
                    </div>
                    <div className='orderhistory_order_header_c'>

                        <div className='orderhistory_order_col'>{USDollar.format(order.total)}</div>

                    </div>
                </div>
                {
                    show && show === order.id ?
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

            {show && show === order.id &&
            <div className='orderhistory_order_details pt-4'>
                {
                    order.purchaseLineitemList.map(item=>{
                        return (<SingleOrderItem key={item.id} item={item}/>)
                    })
                }
                <div className="orderhistory_order_tip_wrapper" >
                    <div className="orderhistory_order_tip">
                        <div >Tip: </div>
                        <div><b>{USDollar.format(order.tip)}</b></div>
                    </div>
                    <div className="orderhistory_order_tip">
                        <div>Tax:</div>

                        <div><b>{USDollar.format(order.tax)}</b></div>
                    </div>
                    <div className="orderhistory_order_tip">
                        <div >Total: </div>
                        <div><b>{USDollar.format(order.total)}</b></div>

                    </div>
               
                </div>
            </div>
        }
        </div>
        

        </>

    )
}
export default SingleOrder