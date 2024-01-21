import { USDollar } from "../../app/global"
import { homeLink } from "../../app/global"
import { useSelector } from "react-redux"

const SingleOrder = ({order, show, setShow}) =>{
    
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
                    <img src={`${homeLink}/ASC_websize.png`} className="orderhistory_order_img" alt="{item.menuitem}"></img>
                    {/* {item.menuitem} <br/> */}
                    <div className="qty_circle">{item.quantity}</div>
                </div>
                <div style={{width: '100%'}}>
                    <b>{item.title}</b>
                    <div>Price: {USDollar.format(item.unit_price)}</div>
                    <div style={{textAlign: 'right'}}><b>{USDollar.format(item.line_total)}</b></div>
                </div>
            </div>
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
            <div className='orderhistory_order_details'>
                {
                order.orderitems.map(item=>{
                    return (<SingleOrderItem item={item}/>)
                })}
            </div>
        }
        </div>
        

        </>

    )
}
export default SingleOrder