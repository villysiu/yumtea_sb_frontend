import { Modal, Button } from "react-bootstrap"
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
// import CustomizeMilk from "./CustomizeMilk"
// import CustomizeSweetness from "./CustomizeSweetness"
import PurchaseButton from "./PurchaseButton"
import { useState } from "react"

const CustomizeContainer = ({setShow, menuitem}) =>{
    console.log(menuitem)

    const [temp, setTemp] = useState(menuitem.temp)
    const [size, setSize] =useState(null)
    // const [milk_id, setMilkID] = useState(null)
    
    const [sweetness, setSweetness] = useState(null)
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
                <CustomizeTemp temp={temp} setTemp={setTemp} />
                <CustomizeSize size={size} setSize={setSize} />
                
                {/* <CustomizeMilk milk_id={milk_id} setMilkID={setMilkID} />
                
                <CustomizeSweetness sweetness={sweetness} setSweetness={setSweetness} /> */}
                
                
            </Modal.Body>
            <Modal.Footer>
                Quantity: 1
            
                {/* <PurchaseButton 
                    menuitem_id={menuitem.pk} 
                    milk_id = {milk_id}
                    temp = {temp}
                    sweetness = {sweetness}
                    setShow={setShow} 
                /> */}
                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer