
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
    

    const WineDropdownTitle = () =>{
        return <div className="header_text" >Wines</div>
    }
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary header_wrapper" fixed="top">
            <Container fluid>
            {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                <Link to={`${homeLink}`} className="nav_brand header_text">Little D</Link>
                <div className="header_features">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to={`${homeLink}/wines`} key="11128" className='nav-link header_text'>Home</Link>
                        <NavDropdown title={<WineDropdownTitle />} id="navbarScrollingDropdown" key="nav">
                            <Link to={`${homeLink}/wines`} className='dropdown-item'>All</Link>
                            {
                                category_arr.map(category=>{

                                    return (
                                        <Link to={`${homeLink}/wines/cat/${category.pk}`} key={category.pk} className='dropdown-item' >{category.title}</Link>
                                    )
                                })
                            }
                        </NavDropdown>

                        <Link href="/" key="465645" className='nav-link header_text'>Visit & Taste</Link>
                                        
                    </Nav>
                    
                    </Navbar.Collapse>
                    <div className='nav_circles'>
                        <Link to={`${homeLink}/test`} >
                            <PersonCircle className="circle_button header_text"/>
                        </Link>
                        {/* <div className="circle_button header_text"></div> */}
                        <CartButton />
                    </div>
                </div>
            </Container>
        </Navbar>
      
    
  );
}

export default Header;