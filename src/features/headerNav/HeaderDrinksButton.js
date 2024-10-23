import { Link } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import { useState } from 'react';
import { getCategories } from "../menuitem/menuitemSlice";
import CategoryDropdown from './CategoryDropdown'
const Header_Drinks_Button =({current, setCurrent}) => {

    const [show, setShow] = useState(false);

    const handleClick = () =>{
        setCurrent("menuitems");
        setShow(false);
    }
    return (
        <div className="header_drinks" id="Drinks" 
            onMouseOver={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
            onClick={handleClick}
        >
            <div className={current === "menuitems" ? "header_home_button active" : "header_home_button"}>
                Drinks
            </div>   
             {show && 
                <div className='header_drinks_dropdown_wrapper'>
                    
                <CategoryDropdown />
                       
         
               </div>
            }
        </div>
    )
}
export default Header_Drinks_Button