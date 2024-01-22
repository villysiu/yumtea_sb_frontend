
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { homeLink } from '../../app/global';
import { Cart, List } from 'react-bootstrap-icons';
import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { X } from 'react-bootstrap-icons';
import UserButton from '../user/UserButton';
import UserDropdown from '../user/UserDropdown';

const Header2 = () => {
    
    // const [showCategories, toggleShowCategories] = useState(false)
    const [show, setShow] = useState(false)
   
    useEffect(() => {
        const handleResize = () => setShow(false);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleClick = (e) => {
            if(e.target.tagName.toLowerCase() === 'a')
                setShow(false)
        };
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const CollapableItems = () => {
        return (
            <div className="collapsable_items">
                <Link to={`${homeLink}/wines`} className='collapsable_item_link header_text'>
                    Home
                </Link>               
                <CategoryDropdown />
                <Link href="/" className='collapsable_item_link header_text'>
                    Visit & Taste
                </Link>
            </div>
        )
    }
    return (
        
        <div className="header2_wrapper">
            <div className='header_container'>
                <Link to={`${homeLink}`} className="nav_brand header_title" onClick={()=>setShow(false)}>Little D</Link>
                
                <div className="header_features">
                    <div className="d-none d-lg-block">
                        <CollapableItems />
                    </div>

                    <div className='user_items'>
                        <UserButton showMDFullscrenn={show} setShowMDFullscrenn={setShow} />
                        <Link to={`${homeLink}/cart`} onClick={()=>setShow(false)} >
                            <Cart className="circle_button" />
                        </Link>
                        <div className="d-lg-none">
                            {console.log(show)}
                            {show ? 
                                <>
                                    <X className='header_dropdown_x_button header_nav_x_btn' onClick={()=>setShow(false)} />
                                    <div className='header_md_fullscreen_dropdown'>
                                        <CollapableItems />
                                        {/* <div className="collapsable_items">
                                            <div>My Account</div>
                                            <div>Order History</div>
                                            <div>Sign Out</div>
                                        </div> */}
                                        <UserDropdown />
                                    </div>
                                    
                                </>
                                :
                                <List className='header_dropdown_bar_button' onClick={()=>setShow(true)} />
                            }
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    
  );
}

export default Header2;