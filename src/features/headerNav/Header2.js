
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { homeLink } from '../../app/global';
import { Cart, List } from 'react-bootstrap-icons';
import { useState } from 'react';

import { X } from 'react-bootstrap-icons';
import UserButton from '../user/UserButton';
import HeaderCollapableItems from './HeaderCollapsableItems';
import HeaderFullscreenList from './HeaderFullscreenList';
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

    
    return (
        
        <div className="header2_wrapper">
            <div className='header_container'>
                <Link to={`${homeLink}`} className="nav_brand header_title" onClick={()=>setShow(false)}>Little D</Link>
                
                <div className="header_features">
                    <div className="d-none d-lg-block">
                        <HeaderCollapableItems />
                    </div>

                    <div className='user_items'>
                        {
                            !show &&
                            <div onClick={()=>setShow(false)}>
                                <UserButton  />
                            </div>
                        }

                        <Link to={`${homeLink}/cart`} onClick={()=>setShow(false)} >
                            <Cart className="circle_button" />
                        </Link>
                        <div className="d-lg-none">
                            
                            {show ? 
                                <>
                                    <X className='header_dropdown_x_button header_nav_x_btn' onClick={()=>setShow(false)} />
                                    <HeaderFullscreenList />
                                    
                                    
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