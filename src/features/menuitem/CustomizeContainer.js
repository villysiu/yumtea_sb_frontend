import { Modal, Button } from "react-bootstrap"
import CustomizeList from "./CustomizeList"
import PurchaseButton from "./PurchaseButton"
import { useState } from "react"
// import CustomizeMilk from "./CustomizeMilk"
// import CustomizeTemp from "./CustomizeTemp"
const CustomizeContainer = ({setShow, menuitem}) =>{
    console.log(menuitem)
    const [milk, setMilk] = useState(menuitem.milk_id)
    const [temp, setTemp] = useState(menuitem.temperature)
    return (
        <>
            <Modal.Header closeButton>
            <Modal.Title>Customize {menuitem.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomizeList menuitem={menuitem} 
                    milk={milk} setMilk={setMilk} 
                    temp={temp} setTemp={setTemp}
                />
                
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>setShow(false)}>
                    Cancel
                </Button>
            
                <PurchaseButton singleMenuitem={menuitem} 
                    milkId = {milk}
                    temp = {temp}
                    setShow={setShow} 
                />
                        
        
            </Modal.Footer>
      </>
    )
}
export default CustomizeContainer