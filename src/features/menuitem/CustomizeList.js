import CustomizeMilk from "./CustomizeMilk"


const CustomizeList = ({menuitem, milk, setMilk}) =>{
    
    return (
        <>
        { 
            menuitem.milk_id !== 1 && 
            <li className='single_item_customize ps-3'>
                <span>Milk Alternative</span>
                <CustomizeMilk milk={milk} setMilk={setMilk} />
            </li>
        }
        </>
    )
}
export default CustomizeList