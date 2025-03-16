import SearchMenuitem from "./SearchMenuitem";
import AddMenuitemButton from "./AddMenuitemButton";
import {Col, Modal, Row} from "react-bootstrap";
import EditMenuitemButton from "./EditMenuitemButton";
import DeleteMenuitemButton from "./DeleteMenuitemButton";
import {useSelector} from "react-redux";
import {useState} from "react";
import {apiLink, homeLink} from "../../../app/global";
import {Image, PencilSquare, PlusCircle, PlusCircleFill} from "react-bootstrap-icons";
import AddImageButton from "./AddImageButton";
import ImageForm from "./ImageForm";
import EditImage from "./EditImage";

const ManageImage = () => {
    const [menuitems, setMenuitems] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    return(
      <>

          <h2 className="manage_title">Menuitem Images</h2>

          <SearchMenuitem setMenuitems={setMenuitems}/>

          <div className="manage_list">
              <Row className="manage_list_title">
                  <Col xs={1}>Id</Col>
                  <Col xs={4}>Name</Col>
                  <Col xs={4}>Image</Col>


              </Row>

              {
                  menuitems.map(menuitem => {
                      return (
                          <Row className="manage_list_row py-3 " key={menuitem.id} >
                              <Col xs={1}>{menuitem.id}</Col>
                              <Col xs={4}>{menuitem.title}</Col>
                              <Col xs={4}>
                                  <div className="menuitem_image_wrapper">
                                      {
                                          menuitem.imageUrl === "" ?
                                              <AddImageButton menuitem={menuitem} />
                                              :
                                              <EditImage menuitem={menuitem} />
                                      }

                                  </div>
                              </Col>


                          </Row>
                      )
                  })
              }


          </div>
      </>
  )
}
export default ManageImage