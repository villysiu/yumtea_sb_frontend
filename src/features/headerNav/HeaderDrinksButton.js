import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import { useState } from 'react';
import { getCategories } from "../menuitem/menuitemSlice";
import CategoryDropdown from './CategoryDropdown'
import {Modal} from 'react-bootstrap'
const Header_Drinks_Button =() => {
    const location = useLocation()
    const [show, setShow] = useState(false);
    
    const handleClick = () =>{
        setShow(!show);
    }

    return (
        <>
        {
            show && 
             <Modal show={show} onHide={()=>setShow(false)}  dialogClassName='category_dropdown_modal' >
                <CategoryDropdown setShow={setShow} />
                
            </Modal>
           
        }

            
            <div className={`header_buttons ${location.pathname === '/collection' ? 'active' : ""}`}
            onClick={handleClick}>
                Drinks
            </div>   
                
        </>

    )
}
export default Header_Drinks_Button