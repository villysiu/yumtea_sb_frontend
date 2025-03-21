import { Link, useLocation } from 'react-router-dom';
import {homeLink} from '../../app/global.js'
import { useState } from 'react';
import { getCategories } from "../menuitem/menuitemSlice";
import CategoryDropdown from './CategoryDropdown'
import {Modal} from 'react-bootstrap'
const Header_Drinks_Button =() => {
    const location = useLocation()
    return (
            <Link to="/collection"  state={location.pathname}
                  className={`header_buttons mx-3 ${location.pathname === '/collection' ? 'active' : ""}`}
            >
                Menu
            </Link>

    )
}
export default Header_Drinks_Button