
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { homeLink } from '../../app/global';
import { Cart } from 'react-bootstrap-icons';
import { useState } from 'react';
import CategoryDropdown from './CategoryDropdown';
import { X } from 'react-bootstrap-icons';
import UserButton from '../user/UserButton';

const Header = () => {
    
    const [showCategories, toggleShowCategories] = useState(false)
    const [showHamburger, toggleHamburger] = useState(true)

    
    
    const openMDDropdown = e =>{
        toggleHamburger(false)
        document.getElementById('navbarScroll').style.display =  'block'
        toggleShowCategories(true)
        console.log('hhh')
        console.log(document.documentElement.style.getPropertyValue('--bs-bg-opacity'))
        // document.documentElement.style.setProperty('--bs-bg-opacity', '1')

    }
    const closeMDDropdown = e =>{
        toggleHamburger(true)
        document.getElementById('navbarScroll').style.display = 'none'
    
    }
    useEffect(() => {
        const handleResize = () => {
            document.getElementById('navbarScroll').style.display = 'none'
            toggleHamburger(true)
            toggleShowCategories(false)
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);
   

    
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
            <Container fluid>
                <Link to={`${homeLink}`} className="nav_brand header_title" >Little D</Link>
                
                <div className="header_features">
                   
                    {showHamburger ? 
                        <Navbar.Toggle aria-controls="navbarScroll"
                            onClick={openMDDropdown} 
                            className='header_dropdown_bar_btn'
                        />
                        :
                        <X onClick={closeMDDropdown} className='circle_button header_nav_x_btn' /> 
                    }
                    <Navbar.Collapse id="navbarScroll" style={{display: 'none'}} >
                        <Nav
                            className="me-auto my-2 my-lg-0 header_md_dropdown" navbarScroll
                            // style={{ maxHeight: '100px'}}
                        >
                            <Link to={`${homeLink}/wines`} key="11128" className='nav-link header_text' onClick={closeMDDropdown}>
                                Home
                            </Link>

                            <CategoryDropdown show={showCategories} 
                                closeMDDropdown={closeMDDropdown}
                                toggleShow={toggleShowCategories} />
                            

                            <Link href="/" key="465645" className='nav-link header_text' 
                                onClick={closeMDDropdown}>Visit & Taste
                            </Link>
                                            
                        </Nav>
                    
                    </Navbar.Collapse>

                    <div className='nav_circles'>
                        {/* <PersonActions closeMDDropdown={closeMDDropdown}/> */}
                        <UserButton closeMDDropdown={closeMDDropdown}/>
                        <Link to={`${homeLink}/cart`} onClick={closeMDDropdown}>
                            <Cart className="circle_button" />
                        </Link>
                    </div>
                </div>
            </Container>
        </Navbar>
      
    
  );
}

export default Header;