import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Menuitem from './Menuitem';

const MenuitemList = () =>{
    console.log("in menuitem list")
    
    let menuitems = useSelector(state => state.menuitem.menuitems)
    
    return (
        <Container>
            <Row>
                {
                    menuitems.array.map(menuitem=><Menuitem key={menuitem.pk} menuitem={menuitem} />)
                }
            </Row>
        </Container>
    )
}
    
export default MenuitemList