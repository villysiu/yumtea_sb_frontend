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

    // if(noHeader.includes( location.pathname )){
    //     return(
    //         <div className='header_wrapper'>
    //             <Title />
    //         </div>
    //     )
    // }
    if(windowWidth < 992){
        return <HeaderNavbarMD />
    }

    else{ //windowWidth >= 1200){
        return <HeaderNavbarXL />
    }

    

}
export default Header