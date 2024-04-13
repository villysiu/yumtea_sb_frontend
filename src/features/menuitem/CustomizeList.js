import CustomizeMilk from "./CustomizeMilk"
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSweetness from "./CustomizeSweetness"
const CustomizeList = ({milk_id, setMilkID, temp, setTemp, sweetness, setSweetness}) =>{
    // console.log( milk_id, temp, sweetness)
    return (
        <>
            <CustomizeTemp temp={temp} setTemp={setTemp} />
            <br/>
            <CustomizeMilk milk_id={milk_id} setMilkID={setMilkID} />
            <br/>
            <CustomizeSweetness sweetness={sweetness} setSweetness={setSweetness} />
      

        </>
    )
}
export default CustomizeList