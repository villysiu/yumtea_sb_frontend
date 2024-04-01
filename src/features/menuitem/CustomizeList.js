import CustomizeMilk from "./CustomizeMilk"
import CustomizeTemp from "./CustomizeTemp"

const CustomizeList = ({menuitem, milk, setMilk, temp, setTemp}) =>{
    console.log(menuitem)
    console.log(milk)
    return (
        <>
            <CustomizeTemp temp={temp} setTemp={setTemp} />
            <br/>
            <CustomizeMilk milk={milk} setMilk={setMilk} />
      

        </>
    )
}
export default CustomizeList