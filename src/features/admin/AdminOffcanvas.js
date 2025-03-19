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

                <div className="sidebar_box"><Link to="/admin/accounts"> Manage Account </Link></div>
                <div className="sidebar_box"><Link to="/admin/purchases"> Manage Purchases </Link></div>
                <div className="sidebar_box"><Link to="/admin/menuitems"> Manage Menuitem </Link></div>
                <div className="sidebar_box"><Link to="/admin/images"> Manage Images</Link></div>
                <div className="sidebar_box"><Link to="/admin/category"> Manage Category </Link></div>
                <div className="sidebar_box"><Link to="/admin/coming_soon"> Manage Malk </Link></div>
                <div className="sidebar_box"><Link to="/admin/coming_soon"> Manage Size </Link></div>


            </div>
        </div>

    )
}
export default AdminOffCanvas