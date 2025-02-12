import {useSelector} from "react-redux"

import LogoutButton from "./LogoutButton";

const Account = () => {

    const current_user = useSelector(state => state.user.current_user );
    console.log(current_user);

    return (
        <>
            <div className='pb-2' ><h3>{current_user.email}'s Account</h3></div>
            <div>edit user info</div>
            <div>previous orders</div>

            <LogoutButton />
        </>
    )
}
export default Account