import SearchMenuitem from "./SearchMenuitem";
import {Col, Row} from "react-bootstrap";
import {useState} from "react";
import AddImageButton from "./AddImageButton";

import EditImage from "./EditImage";

const ManageImage = () => {
    const [menuitems, setMenuitems] = useState([])

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