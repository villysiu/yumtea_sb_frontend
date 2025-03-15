import { USDollar } from "../../app/global"
// import { useRef } from "react"
import SingleOrderItem from "./SingleOrderItem"

const SingleOrder = ({order, show, setShow}) =>{


    // const ref=useRef()
    const handleOpen = e =>{
        setShow(order.id)
    }
    const handleClose = e =>{
        setShow(null)
    }
console.log(order.purchaseDate)
    console.log(new Date(order.purchaseDate).toLocaleString())
    
    return(
        <>
        <div className='orderhistory_order'
             // ref={ref}
             id={order.id} >
            <div className='orderhistory_order_container'>
                <div className='orderhistory_order_header' onClick={handleOpen}>
                    <div className='orderhistory_order_header_l'>
                        <div className='orderhistory_order_col'>{order.purchaseDate.slice(0, 10)}</div>
                        <div className='orderhistory_order_col'>{new Date(order.purchaseDate).toLocaleDateString()}</div>
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