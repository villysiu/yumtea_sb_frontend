import './header.css';

import {homeLink} from '../../app/global.js'
import HeaderNav from './HeaderNav'
import Title from './Title'
import {useLocation} from 'react-router-dom'


const Header = () =>{
    
    const location = useLocation();
    const noHeader = ['/secure/checkout', '/user/signin']
    
    if(noHeader.includes( location.pathname )){
        return(
            <div id='header_wrapper'>
            <Title />
            </div>
        )
    }

    return(
        <div id='header_wrapper'>
            <Title />
            

            <HeaderNav />

        </div>
    )
}
export default Header