import SingleCategory from './SingleCategory'
import {useSelector} from 'react-redux'

const Categories = () =>{

    // const categories = [
    //     [3, 'Black Tea'],
    //     [1, 'Green Tea'],
    //     [4, 'Oolong Tea'],
    //     [5, 'Caffaine Free']
        
    // ]
    const categories = useSelector(state=>state.menuitem.category.array)
    console.log('in Categories')
    return (
        <>
        <div>all the tea ,</div>

        {
            categories.map(category=><SingleCategory category={category} />)
                
          
        
        }
        </>
    )
}
export default Categories