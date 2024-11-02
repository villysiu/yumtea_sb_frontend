import { Modal, Button } from "react-bootstrap"
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
// import CustomizeMilk from "./CustomizeMilk"
// import CustomizeSweetness from "./CustomizeSweetness"
import PurchaseButton from "./PurchaseButton"
import UpdateQuantity from "./UpdateQuantity"
import { useState } from "react"

const CustomizeContainer = ({setShow, menuitem}) =>{
    console.log(menuitem)
    const [price, setPrice] = useState(menuitem.price)
    const [temp, setTemp] = useState(menuitem.temp)
    const [size, setSize] =useState(null)
    // const [milk_id, setMilkID] = useState(null)
    
    const [sweetness, setSweetness] = useState(null)
    const [quantity, setQuantity] = useState(1)
    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
                <CustomizeTemp temp={temp} setTemp={setTemp} />
                <CustomizeSize size={size} setSize={setSize} setPrice={setPrice} />
                
                {/* <CustomizeMilk milk_id={milk_id} setMilkID={setMilkID} />
                
                <CustomizeSweetness sweetness={sweetness} setSweetness={setSweetness} /> */}
                
                
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} setPrice={setPrice}/>
            
                <PurchaseButton 
                    price = {price}
                    quantity = {quantity}
                    menuitem_id={menuitem.pk} 
                    // milk_id = {milk_id}
                    temp = {temp}
                    size={size}
                    // sweetness = {sweetness}
                    setShow={setShow} 
                />
                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer