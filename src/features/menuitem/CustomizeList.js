import CustomizeMilk from "./CustomizeMilk"
import CustomizeTemp from "./CustomizeTemp"
import CustomizeSweetness from "./CustomizeSweetness"
const CustomizeList = ({menuitem, milk, setMilk, temp, setTemp, sweetness, setSweetness}) =>{
    console.log(menuitem)
    console.log(sweetness)
    return (
        <>
            <CustomizeTemp temp={temp} setTemp={setTemp} />
            <br/>
            <CustomizeMilk milk={milk} setMilk={setMilk} />
            <br/>
            <CustomizeSweetness sweetness={sweetness} setSweetness={setSweetness} />
      

        </>
    )
}
export default CustomizeList