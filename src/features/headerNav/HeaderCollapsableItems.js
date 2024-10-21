import CategoryDropdown from './CategoryDropdown';
import { Link } from 'react-router-dom';
import { homeLink } from '../../app/global';

const HeaderCollapableItems = () => {
    return (
        <div className="collapsable_items">
            <Link to={`${homeLink}/`} className='collapsable_item_link header_text'>
                Home
            </Link>               
            <CategoryDropdown />
            <Link to={`${homeLink}/visit-taste`} className='collapsable_item_link header_text'>
                Visit & Taste
            </Link>
        </div>
    )
}
export default HeaderCollapableItems