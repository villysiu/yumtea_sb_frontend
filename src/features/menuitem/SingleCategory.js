import {useSelector} from 'react-redux'
import {getMenuitemsByCategoryId} from './menuitemSlice'
import Menuitem from './Menuitem'
import {homeLink} from "../../app/global";

const SingleCategory = ({category}) => {

    const menuitems = useSelector(state => getMenuitemsByCategoryId(state, category.id))
    console.log(menuitems)

    return (
        <div id={`${category.id}`} className='category'>
            <div className='category_wrapper'>
                <img src={`${homeLink}/category/${category.imageUrl}`} className="category_img" />
                <div className='category_label'>
                    {category.title}
                </div>

            </div>

            
            <div  className='menuitems_wrapper'>

                <div className='menuitem_row'>
                    {
                        menuitems.map((menuitem)=>{
                            return (
                            <div key={menuitem.id} className='menuitem_col'>
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