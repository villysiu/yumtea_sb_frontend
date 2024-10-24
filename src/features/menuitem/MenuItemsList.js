import {useParams} from "react-router-dom"; 
import {useDispatch, useSelector} from 'react-redux'
import {getMenuitems} from './menuitemSlice'
import Menuitem from './Menuitem';

const MenuitemsList = () => {
    const { categoryName } = useParams();

    const map = new Map([
        // ['all', 0],
        ["oolong", 4],
        ["blacktea", 3],
        ["greentea", 1],
        ["caffeinefree", 5]
    ])
   
    const categoryId = map.has(categoryName) ? map.get(categoryName) : 0
    
    const dispatch=useDispatch()
    const menuitems = useSelector(state=>getMenuitems(state, categoryId))
    console.log(menuitems)
    return (
        <>
        {
            menuitems.map(menuitem => {
                console.log(menuitem)
                // return <Menuitem key={menuitem.pk} menuitem={menuitem} />
            })
            
        }
        </>
        
    )
}
export default MenuitemsList