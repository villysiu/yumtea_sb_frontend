
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../wine/wineSlice';
import { homeLink } from '../../app/global';
import CartButton from '../cart/CartButton';

const Header = () => {
    const dispatch=useDispatch();
    let {category_arr, status} = useSelector(state => {
        // console.log(state.wine.category)
        return state.wine.category
        
    })
    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetchCategories())
        }
    }, [status, dispatch])
    
    
    return (
        <div className="header_wrapper px-5">
            <a href="/" className="nav_brand"></a>
            <Link to={`${homeLink}`} className="nav_brand">Little D</Link>
            
            
            <div className='nav_features'>

                <Navbar expand="lg" className="bg-body-tertiary d_navbar">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
         
                            <Link to={`${homeLink}/wines`} className='nav-link'>Home</Link>
                            <NavDropdown title="Wines" id="navbarScrollingDropdown">
                                <Link to={`${homeLink}/wines`} className='dropdown-item'>All</Link>
                                {
                                category_arr.map(category=>{

                                    return (
                                        <Link to={`${homeLink}/wines/cat/${category.pk}`} className='dropdown-item'>{category.title}</Link>
                                        
                                    )
                                })
                            }
                            </NavDropdown>

                            <Nav.Link href="/" key="2235">Visit & Taste</Nav.Link>
                            
                        
                        </Nav>
                        
                        </Navbar.Collapse>  
                    </Container>
                </Navbar>
          
                <div className='nav_circles'>
                    <div><PersonCircle className="circle_button"/></div>
                    <div><CartButton /></div>
               </div>
            </div>
        </div>
        
      
    
  );
}

export default Header;