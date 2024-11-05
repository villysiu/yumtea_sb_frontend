import './customize.css'
import { Modal, Button } from "react-bootstrap"
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
// import CustomizeMilk from "./CustomizeMilk"
// import CustomizeSweetness from "./CustomizeSweetness"
import AddtocartButton from "./AddtocartButton"
import UpdateCartButton from './UpdateCartButton'
import UpdateQuantity from "./UpdateQuantity"
import { useState } from "react"

const CustomizeContainer = ({cartitemPk, itemId, itemTitle, itemTemp, itemSize, itemPrice, itemQty, setShow, task}) =>{


    const [price, setPrice] = useState(itemPrice)
    const [temp, setTemp] = useState(itemTemp)
    const [size, setSize] =useState(itemSize)
    const [quantity, setQuantity] = useState(itemQty)
    console.log( price, temp, size, quantity)
    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {itemTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
                <CustomizeTemp temp={temp} setTemp={setTemp} />
                <CustomizeSize size={size} setSize={setSize} setPrice={setPrice} />
            
                
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} setPrice={setPrice}/>
                {
                    task === 'add' ?
                        <AddtocartButton 
                            
                            price = {price}
                            quantity = {quantity}
                            menuitem_id={itemId} 
                            temp = {temp}
                            size={size}
                            setShow={setShow} 
                            
                        />
                        :
                        <UpdateCartButton
                            cartitem_pk={cartitemPk}
                            price = {price}
                            quantity = {quantity}
                            menuitem_id={itemId} 
                            temp = {temp}
                            size={size}
                            setShow={setShow} 
                        />

                }   

                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer