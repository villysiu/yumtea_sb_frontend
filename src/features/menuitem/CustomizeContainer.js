import { Modal, Button } from "react-bootstrap"
import CustomizeList from "./CustomizeList"
import PurchaseButton from "./PurchaseButton"
import { useState } from "react"

const CustomizeContainer = ({setShow, menuitem}) =>{
    console.log(menuitem)
    
    const [milk_id, setMilkID] = useState(menuitem.milk_id)
    const [temp, setTemp] = useState(menuitem.temperature)
    const [sweetness, setSweetness] = useState(menuitem.sweetness)
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomizeList 
                    milk_id={milk_id} setMilkID={setMilkID} 
                    temp={temp} setTemp={setTemp}
                    sweetness={sweetness} setSweetness={setSweetness}
                />
                
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Cancel
                </Button>
            
                <PurchaseButton 
                    menuitem_id={menuitem.pk} 
                    milk_id = {milk_id}
                    temp = {temp}
                    sweetness = {sweetness}
                    setShow={setShow} 
                />
                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer