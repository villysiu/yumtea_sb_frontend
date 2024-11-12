const UpdateQuantity =({quantity, setQuantity})=>{
    const handleClick = (sign) =>{
        if(sign==='-')
            setQuantity(q=>q-1)
        else
            setQuantity(q=>q+1)
    }
    return(
        <div className='update_quantity'>
            <div>Quantity</div>
            <div className='update_quantity_wrapper'>
                
                <button className='minus_sign minus_sign_wrapper' onClick={()=>handleClick('-')} disabled={quantity===1}> - </button>
                <div className='qty_box'>{quantity}</div>
                <button className='plus_sign plus_sign_wrapper' onClick={()=>handleClick('+')}  disabled={quantity===6}> + </button>
                
            </div>
        </div>
    )
}
export default UpdateQuantity