import { useSelector } from "react-redux"

const Account = () => {
    const current_user = useSelector(state => state.user.current_user )
    return (
        <div className='pb-2'>{current_user.username}'s Account</div>
    )
}
export default Account