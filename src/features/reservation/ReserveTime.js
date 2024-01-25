const ReserveTime = ({time, setTime}) =>{
    let timeArray = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
                    "15:00", "15:30", "16:00"]
    const handleChange = e =>{
        console.log(e.target.value)
        setTime(e.target.value)
    }
    return (
        <div className='reserve_time'>
            <select id="hours" className='reserve_time_select'
            onChange={handleChange}
            defaultValue={time}
            >
                {
                    timeArray.map(time =>{
                        return(
                            <option value={time}>
                                {time}PM
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}
export default ReserveTime