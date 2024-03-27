import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuitemsByCategory, getCategoryById } from "./menuitemSlice";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Menuitem from './Menuitem';
import FullSpinner from "../headerNav/FullSpinner";
import { useNavigate } from "react-router-dom";
const MenuitemByCategory = () =>{
    let { categoryId } = useParams();
    let id = parseInt(categoryId)

    const navigate = useNavigate()
    const dispatch=useDispatch()
    const menuitemsByCategory = useSelector(state=>state.menuitem.menuitemsByCategory)
    let categoryTitle = useSelector(state => getCategoryById(state, id))

    useEffect(()=>{
        if(menuitemsByCategory.category_id !== id)
            dispatch(fetchMenuitemsByCategory(id))
            .unwrap()
            .then((originalPromiseResult) => {
                
            })
            .catch((rejectedValueOrSerializedError) => {
                // console.log("category not existed, redirect to all")
                navigate("/menuitems");
            })  

    }, [dispatch, menuitemsByCategory.category_id, id])

    if(menuitemsByCategory.status === "idle" ){
        return <FullSpinner />

    }
    if(menuitemsByCategory.status === "loading"){
        return <FullSpinner />

    }
    if(menuitemsByCategory.status==="failed"){
        return <div>oh no nothing</div>
    }
    if(menuitemsByCategory.array.length===0)
        return(
            <div>nothing</div>
        )
    return (
        <>
            <div className='category_title'>{ categoryTitle }</div>
            <Container>
                <Row>
                    {
                        menuitemsByCategory.array.map(menuitem=><Menuitem key={menuitem.pk} menuitem={menuitem} />)
                    }
                </Row>
            </Container>
        </>
    )
}
export default MenuitemByCategory