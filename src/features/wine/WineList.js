import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { homeLink } from "../../app/global"
import PurchaseButton from './PurchaseButton';
import Wine from './Wine';
const WineList = () =>{
    console.log("in wine list")
    let { categoryId } = useParams();

    let {wine_arr, status} = useSelector(state => {
        console.log(state)
        return state.wine.wines
    })

    if(categoryId && status==='succeeded'){
        wine_arr = wine_arr.filter(w=>categoryId===String(w.category))
    }
    if(wine_arr.length===0)
        return(
            <div>nothing</div>
        )
    return (
        <Container>
            <Row>
                {
                    wine_arr.map(wine=><Wine key={wine.pk} menuitem={wine} />)
                }
            </Row>
        </Container>
    )
}
    
export default WineList