import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import { useState } from 'react';
import { getCategories } from "../menuitem/menuitemSlice";
import CategoryDropdown from './CategoryDropdown'
import {Modal} from 'react-bootstrap'
const Header_Drinks_Button =({current, setCurrent}) => {

    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setCurrent("menuitems");
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
            <div className="header_drinks" id="Drinks" 
                // onMouseOver={()=>setShow(true)}
                // onMouseLeave={()=>setShow(false)}
                onClick={handleClick}
            >
                
                <div className={`header_home_button ${current === "menuitems" ? " active" : ""}`}>
                    Drinks
                </div>   
                
            </div>
        </>
    )
}
export default Header_Drinks_Button