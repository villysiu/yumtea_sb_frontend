import {Col, Offcanvas, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {homeLink} from "../../app/global";
import {Link} from "react-router-dom";

const OffcanvasMD = ({show, setShow}) =>{
    const {category} = useSelector(state=>state.menuitem)
    return(
        <Offcanvas show={show} onHide={()=>setShow(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img src="http://127.0.0.1:8001/logo/yumtea_logo.png" alt="" className="offcanvas_logo" />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row>
                {
                    category.array.map(category => {
                        return(

                            <Col key={category.id} xs={6} className="offcanvas_category_img_wrapper">
                                <Link to={`${homeLink}/collection`} className="offcanvas_category_link" onClick={()=>setShow(false)}>
                                <img src={`${homeLink}/category/${category.imageUrl}`} className="offcanvas_category_img"/>
                                <div className="offcanvas_category_img_overlay">{category.title} </div>
                                </Link>
                            </Col>
                        )
                    })
                }
                </Row>
                <Row>
                    <Col xs={12}>
                        <Link to={`${homeLink}/visit-taste`} className="offcanvas_category_link text" onClick={()=>setShow(false)}>
                            Visit Us
                        </Link>
                    </Col>
                    <Col xs={12}>
                        <Link to={`${homeLink}/support`} className="offcanvas_category_link text" onClick={()=>setShow(false)}>
                            Support
                        </Link>
                    </Col>
                    <Col xs={12}>
                        <Link to={`${homeLink}/admin/signin`} className="offcanvas_category_link text" onClick={()=>setShow(false)}>
                            Admin Login
                        </Link>
                    </Col>
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
export default OffcanvasMD