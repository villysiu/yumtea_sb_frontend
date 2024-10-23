import './header.css';

import {homeLink} from '../../app/global.js'
import HeaderNav from './HeaderNav'
import Title from './Title'



const Header = () =>{
    

    return(
        <div id='header_wrapper'>
            <Title />
            <HeaderNav />
            {/* <Link to={`${homeLink}/cart`} >
                            <Cart className="circle_button" />
                        </Link> */}
        </div>
    )
}
export default Header