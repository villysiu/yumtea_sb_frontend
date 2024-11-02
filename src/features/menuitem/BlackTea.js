import {useSelector} from 'react-redux'
import {getMenuitems} from './menuitemSlice'
import Menuitem from './Menuitem'
import {Container, Row, Col} from  'react-bootstrap'
const BlackTea = () =>{
    const menuitems = useSelector(state => getMenuitems(state, 3))
    
    return (
        <div className='category'>
            <div className='category_img blacktea'>
                <div className='category_label'>
                    Black tea
                </div>
                
                
            </div>
            {/* <div className='menuitems_wrapper'>
            {
                menuitems.map((menuitem)=>{
                    return (
                        <Menuitem key={menuitem.pk} menuitem={menuitem} />
                    )
                })
            }
            </div> */}
            
            <div  className='menuitems_wrapper'>
               
                <div className='menuitem_row'>
                    {
                        menuitems.map((menuitem)=>{
                            return (
                            <div key={menuitem.pk} className='menuitem_col'>
                                <Menuitem menuitem={menuitem} />
                            </div>
                            )
                        })    
                    }
                </div>
            </div>
        </div>
    )
}
export default BlackTea