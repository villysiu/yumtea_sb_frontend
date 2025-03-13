import './header.css';

import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import HeaderNavbarXL from './HeaderNavbarXL';
import HeaderNavbarMD from './HeaderNavbarMD';


const Header = () =>{
    
    const location = useLocation();
    // const noHeader = ['/secure/checkout', '/user/signin']
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log(windowWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);





    if(windowWidth <= 768){
        return <HeaderNavbarMD />
    }

    else{ //windowWidth >= 768){
        return <HeaderNavbarXL />
    }

    

}
export default Header