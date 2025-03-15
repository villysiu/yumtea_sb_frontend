import {Offcanvas} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

const AdminOffCanvas = ({choice, setChoice}) =>{
    const [show, setShow] = useState(true);

    return(
        <div >
            <div><h2>Yum Tea Management</h2></div>
            <div className="sidebar">
                <div className="sidebar_box"><Link to="/"> Back to YumTea </Link></div>

                <div className="sidebar_box"><Link to="/admin/accounts"> Manage Avvount </Link></div>

                <div className="sidebar_box"><Link to="/admin/menuitems"> Manage Menuitem </Link></div>

                {/*Sugar*/}
                {/*Temperature*/}
                {/*Size*/}

            </div>
        </div>

    )
}
export default AdminOffCanvas