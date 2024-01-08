import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { homeLink } from "../../app/global"
const WineList = () =>{
    console.log("in wine list")
    let { categoryId } = useParams();

    let {wine_arr, status} = useSelector(state => {
        console.log(state.wine.wines)
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
                    wine_arr.map(wine=>{
                        return (
                            
                            <Col sm={12} md={4} lg={3}>
                        
                                
                                <Link to={`${homeLink}/wines/${wine.pk}`}>{wine.title}</Link>
                                <div>{wine.year}</div>
                                <div>{wine.title}</div>
                                <div>{wine.varietal}</div>
                                <div><Button>Purchase</Button></div>
                            </Col>
                     )})
                }
            </Row>
        </Container>
    )
}
    
export default WineList