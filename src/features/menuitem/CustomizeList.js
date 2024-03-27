import CustomizeMilk from "./CustomizeMilk"


const CustomizeList = ({menuitem, milk, setMilk}) =>{
    console.log(menuitem)
    console.log(milk)
    return (
        <>

            
                
                <CustomizeMilk milk={milk} setMilk={setMilk} />
      

        </>
    )
}
export default CustomizeList