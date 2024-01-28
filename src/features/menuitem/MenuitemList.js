import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Menuitem from './Menuitem';

const MenuitemList = () =>{
    console.log("in wine list")
    let { categoryId } = useParams();


    let menuitems = useSelector(state => state.menuitem.menuitems)
console.log(menuitems)
    let menuitems_filter = menuitems.array
    if(categoryId && menuitems.status==='succeeded'){
        menuitems_filter = menuitems.array.filter(w=>categoryId===String(w.category))
    }
    if(menuitems_filter.length===0)
        return(
            <div>nothing</div>
        )
    return (
        <Container>
            <Row>
                {
                    menuitems_filter.map(menuitem=><Menuitem key={menuitem.pk} menuitem={menuitem} />)
                }
            </Row>
        </Container>
    )
}
    
export default MenuitemList