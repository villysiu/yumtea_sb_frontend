import './customize.css'
import {getMenuitemById} from '../menuitem/menuitemSlice'
import {useSelector} from 'react-redux'
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSize from "./CustomizeSize"
import CustomizeMilk from "./CustomizeMilk"
import CustomizeSugar from "./CustomizeSugar"
import AddtocartButton from "./AddtocartButton"
import UpdateCartButton from './UpdateCartButton'
import UpdateQuantity from "./UpdateQuantity"
import AddCartButton from './AddCartButton'
import { useState } from "react"
import { Modal } from 'react-bootstrap'
import  {homeLink} from '../../app/global'
import menuitem from "../menuitem/Menuitem";

const CustomizeModal = ({handleHide}) =>{
    const itemToCustomize = useSelector(state=>state.menuitem.customize.itemToCustomize)
    const task = useSelector(state=>state.menuitem.customize.task)

    // console.log(itemToCustomize)
    // const task = !itemToCustomize.pk  ? "add" : "update"
    // console.log(task)
//item data sent from menu and order history is menutitem_pk 
//item data sent from shopping cart is menuitem_id instead of menutitem_pk 
//     const menuitem = useSelector(state=>getMenuitemById(state, itemToCustomize.menuitemId))

    const [temperature, setTemperature] = useState(itemToCustomize.temperature)

    const [size, setSize] =useState(itemToCustomize.size)
    const [milk, setMilk] = useState(itemToCustomize.milk)
    const [quantity, setQuantity] = useState(1)
    const [sugar, setSugar] = useState(itemToCustomize.sugar)

    const data = {
        'menuitem': itemToCustomize.menuitem,
        'quantity': quantity,
        'temperature': temperature,
        'sugar': sugar,
        'size': size,
        'milk': milk
    }

    return (
        <>
            <Modal.Header className='customize_header' closeButton>
                <Modal.Title>Customize {itemToCustomize.menuitem.title} new </Modal.Title>
            </Modal.Header>
            <Modal.Body className='customize_list'>
            {
                itemToCustomize.menuitem.image_path &&
                <div className='customize_img_wrapper'>
                    <img src={`${homeLink}/menuitem/${itemToCustomize.menuitem.image_path}`} className="customize_img" alt={itemToCustomize.menuitem.title}></img>
                </div>
            }
                
                <CustomizeTemp defaultTemperature={itemToCustomize.menuitem.temperature} temperature={temperature} setTemperature={setTemperature} />
                <CustomizeSize size={size} setSize={setSize} />
                <CustomizeMilk defaultMilk={itemToCustomize.menuitem.milk} milk={milk} setMilk={setMilk} />
                <CustomizeSugar defaultSugar={itemToCustomize.menuitem.sugar} sugar={sugar} setSugar={setSugar} />
            </Modal.Body>
            <Modal.Footer className='customize_footer'>
                <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
               
                {/*{*/}
                {/*    task === 'add' ?*/}
                        <AddCartButton 
                            data={data}
                            handleHide={handleHide} 
                        />
                {/*        :*/}
                {/*        <UpdateCartButton*/}
                {/*            data={{...data, pk: itemToCustomize.pk}}*/}
                {/*            handleHide={handleHide} */}
                {/*        />*/}
                {/*    */}

                {/*}   */}

                        
        
            </Modal.Footer>
      </>
        
    )
}
export default CustomizeModal