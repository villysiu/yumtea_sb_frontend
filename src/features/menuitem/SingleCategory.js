import {useSelector} from 'react-redux'
import {getMenuitemsByCategoryId} from './menuitemSlice'
import Menuitem from './Menuitem'
import {homeLink} from "../../app/global";
import {Col, Row} from "react-bootstrap";

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

                <Row className='menuitem_row'>
                    {
                        menuitems.map((menuitem)=>{
                            return (
                            <Col xs={12} md={4} className="mb-3" key={menuitem.id}
                                 // className='menuitem_col'
                            >
                                <Menuitem menuitem={menuitem} />
                            </Col>
                            )
                        })
                    }

                </Row>
            </div>
        </div>
    )
}
export default SingleCategory