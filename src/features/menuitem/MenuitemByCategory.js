import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuitemsByCategory } from "./menuitemSlice";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Menuitem from './Menuitem';

const MenuitemByCategory = () =>{
    let { categoryId } = useParams();
    let id = parseInt(categoryId)
    const dispatch=useDispatch()
    const menuitemsByCategory = useSelector(state=>state.menuitem.menuitemsByCategory)

    useEffect(()=>{
        if(menuitemsByCategory.category_id !== id)
            dispatch(fetchMenuitemsByCategory(id))

    }, [dispatch, menuitemsByCategory.category_id, id])
    
    if(menuitemsByCategory.array.length===0)
        return(
            <div>nothing</div>
        )
    return (
        <Container>
            <Row>
                {
                    menuitemsByCategory.array.map(menuitem=><Menuitem key={menuitem.pk} menuitem={menuitem} />)
                }
            </Row>
        </Container>
    )
}
export default MenuitemByCategory