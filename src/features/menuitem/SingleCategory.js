import {useSelector} from 'react-redux'
import {getMenuitems} from './menuitemSlice'
import Menuitem from './Menuitem'

const SingleCategory = ({category}) => {
  
    // {id: 3, title: 'Black Tea', slug: 'blacktea', 
    // desc: 'Black teas are grown in all major tea regions, esp…ollection of regional flavor profiles to explore.', 
    // image_path: 'blacktea.webp'}
    const menuitems = useSelector(state => getMenuitems(state, category.id))
    // console.log(menuitems)

    return (
        <div id={category.slug} className='category'>
            <div className='category_wrapper'>
                <div className={`category_img ${category.slug}`}>
                    <div className='category_label'>
                        {category.title}
                    </div>
                    
                    
                </div>
            </div>

            
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
export default SingleCategory