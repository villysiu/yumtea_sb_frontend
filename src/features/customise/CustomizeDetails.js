import './customize.css'
import {getMenuitemById} from '../menuitem/menuitemSlice'
import {useSelector} from 'react-redux'
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
import CustomizeMilk from "./CustomizeMilk"
import CustomizeSugar from "./CustomizeSugar"
import UpdateCartButton from './UpdateCartButton'
import UpdateQuantity from "./UpdateQuantity"
import AddCartButton from './AddCartButton'
import { useState } from "react"
import { Modal } from 'react-bootstrap'
import  {homeLink} from '../../app/global'
import menuitem from "../menuitem/Menuitem";

const CustomizeDetails = ({handleHide}) =>{

    const {itemToCustomize} = useSelector(state=>state.menuitem)

    const [temperature, setTemperature] = useState(itemToCustomize.temperature)
    const [size, setSize] =useState(itemToCustomize.size)
    const [milk, setMilk] = useState(itemToCustomize.milk)
    const [quantity, setQuantity] = useState(itemToCustomize.quantity)
    const [sugar, setSugar] = useState(itemToCustomize.sugar)


    // const customizedItem = {
    //     'menuitem': itemToCustomize.menuitem,
    //     'quantity': quantity,
    //     'temperature': temperature,
    //     'sugar': sugar,
    //     'size': size,
    //     'milk': milk
    // }

    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {itemToCustomize.menuitem.title} </Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
            {/*{*/}
            {/*    itemToCustomize.menuitem.image_path &&*/}
            {/*    <div className='customize_img_wrapper'>*/}
            {/*        <img src={`${homeLink}/menuitem/${itemToCustomize.menuitem.image_path}`} className="customize_img" alt={itemToCustomize.menuitem.title}></img>*/}
            {/*    </div>*/}
            {/*}*/}
                
                <CustomizeTemp defaultTemperature={itemToCustomize.menuitem.temperature} temperature={temperature} setTemperature={setTemperature} />
                <CustomizeSize size={size} setSize={setSize} />
                <CustomizeMilk defaultMilk={itemToCustomize.menuitem.milk} milk={milk} setMilk={setMilk} />
                <CustomizeSugar defaultSugar={itemToCustomize.menuitem.sugar} sugar={sugar} setSugar={setSugar} />
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
               
                {
                    itemToCustomize.id === null ?
                        <AddCartButton
                            customizedItem={{
                                'menuitem': itemToCustomize.menuitem,
                                'quantity': quantity,
                                'temperature': temperature,
                                'sugar': sugar,
                                'size': size,
                                'milk': milk
                            }}
                            handleHide={handleHide} 
                        />
                        :
                        <UpdateCartButton
                            customizedItem={{
                                'id':itemToCustomize.id,
                                'menuitem': itemToCustomize.menuitem,
                                'quantity': quantity,
                                'temperature': temperature,
                                'sugar': sugar,
                                'size': size,
                                'milk': milk
                            }}
                            handleHide={handleHide}
                        />


                }

                        
        
            </Modal.Footer>
      </>
        
    )
}
export default CustomizeDetails