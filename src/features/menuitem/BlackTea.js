import {useSelector} from 'react-redux'
import {getMenuitems} from './menuitemSlice'
import Menuitem from './Menuitem'
const BlackTea = () =>{
    const menuitems = useSelector(state => getMenuitems(state, 3))
    console.log(menuitems)
    return (
        <div className='category'>
            <div className='category_img blacktea'>
                <div className='category_label'>
                    Black tea
                </div>
                
                
            </div>
            <div className='menuitems_wrapper'>
            {
                menuitems.map((menuitem)=>{
                    return (
                        <Menuitem key={menuitem.pk} menuitem={menuitem} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default BlackTea