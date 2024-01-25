const ReserveGuest =({guest, setGuest}) =>{
    const guestArr = Array.from(Array(5), (_, index) => index + 2);
    console.log(guestArr)
    const handleChange = e =>{
        console.log(e.target.value)
        setGuest(e.target.value)
    }
    return(
        <div className='reserve_guest'>
            <select id="hours" className='reserve_guest_count'
                onChange={handleChange}
                defaultValue={guest}
            >
                {
                    guestArr.map(count=>{
                        return(
                            <option value={count}>{count} Guests</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
export default ReserveGuest