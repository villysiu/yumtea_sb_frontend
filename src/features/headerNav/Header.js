import './header.css';

import {homeLink} from '../../app/global.js'
import HeaderNav from './HeaderNav'

import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import HeaderNavbarXL from './HeaderNavbarXL';
import HeaderNavbarLG from './HeaderNavbarLG';
import HeaderNavbarMD from './HeaderNavbarMD';
import Title from './Title';

const Header = () =>{
    
    const location = useLocation();
    const noHeader = ['/secure/checkout', '/user/signin']
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    if(noHeader.includes( location.pathname )){
        return(
            <div class='header_wrapper'>
                <Title />
            </div>
        )
    }
    if(windowWidth < 992){
        return <HeaderNavbarMD />
    }
    else if(windowWidth >= 992 && windowWidth < 1200){
        return <HeaderNavbarLG />
    }
    else{ //windowWidth >= 1200){
        return <HeaderNavbarXL />
    }
    

}
export default Header