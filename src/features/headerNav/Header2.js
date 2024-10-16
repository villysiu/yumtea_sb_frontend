
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { homeLink } from '../../app/global';
import { Cart, List } from 'react-bootstrap-icons';
import { useState } from 'react';

import { X } from 'react-bootstrap-icons';
import UserButton from '../user/UserButton';
import HeaderCollapableItems from './HeaderCollapsableItems';
import HeaderFullscreenList from './HeaderFullscreenList';
import Title from './Title'

const Header2 = () => {

    // manipulate HeaderFullscreenList when screen is small
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleResize = () => setShow(false);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Closes the fullscreen dropdown menu if clicked on any button other than open hamburger
    useEffect(() => {

        const handleClick = (e) => {
            // console.log(e.target)
            // console.log(e.target.tagName)
            if((e.target.tagName.toLowerCase() === 'a' || e.target.tagName === 'svg') && 
                e.target.id!=="open")
            
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
                <Title />
                <div className="header_features">
                    {/* show items when screen bigger than 992*/}
                    <div className="d-none d-lg-block">
                        <HeaderCollapableItems />
                    </div>

                    <div className='user_items'>
                        {
                            !show && <UserButton />
                        }

                        <Link to={`${homeLink}/cart`} >
                            <Cart className="circle_button" />
                        </Link>

                        {/* show hamburger dropdown list when screen smaller than 992*/}
                        <div className="d-lg-none" >
                            
                            {show ? 
                                <>
                                    <X className='header_dropdown_x_button header_nav_x_btn' />
                                    <HeaderFullscreenList />
                                </>
                                :
                                <List className='header_dropdown_bar_button' id="open"
                                onClick={()=>setShow(true)} 
                                />
                            }
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      
    
  );
}

export default Header2;