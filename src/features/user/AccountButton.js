import { homeLink } from "../../app/global"
import { Link } from "react-router-dom"

const AccountButton = () => {
    
    return (
        <div className='pb-2' >
            <Link to={`${homeLink}/secure/account`} className="solid_link" >
                My Account
                
            </Link>
        </div>
    )
}
export default AccountButton