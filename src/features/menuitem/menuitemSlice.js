import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

// export const fetchCategories=createAsyncThunk(
//     'menuitem/fetchCategories',
//     async () => {
//         try {
//             const response=await fetch(`${apiLink}/api/categories`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     'accept': 'application/json'
//                 }
//             })

//             if(!response.ok) {
//                 throw new Error(`${response.status} ${response.statusText}`)
//             }
//             const data=await response.json()
//             // console.log(data)
//             // {"pk": 1, "title": "Red Wine", "slug": "red"}
            
//             return data
            
//         } 
//         catch(error){
//             return Promise.reject(error);
//         }
//     }
// )
export const fetchMenuitems=createAsyncThunk(
    'menuitem/fetchMenuitems',
    async () => {
        try {
            const response=await fetch(`${apiLink}/api/menuitems`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            
            return data
        } 
        catch(error){
            console.log("i m in error fetching menu items")
            return Promise.reject(error);
        }
    }
)
export const fetchMilks=createAsyncThunk(
    'menuitem/fetchMilks',
    async () => {
        try {
            const response=await fetch(`${apiLink}/api/milks`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            return data
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
// export const fetchMenuitemsByCategory=createAsyncThunk(
//     'menuitem/fetchMenuitemsByCategory',
//     async (id) => {
//         try {
//             const response=await fetch(`${apiLink}/api/menuitem_categories?category_id=${id}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     'accept': 'application/json'
//                 }
//             })
//             if(!response.ok) {
//                 throw new Error(`${response.status} ${response.statusText}`)
//             }
//             const data=await response.json()
//             // {
//             //     "pk": 4,
//             //     "category_id": 1,
//             //     "menuitem_id": 2,
//             //     "menuitem": {
//             //         "pk": 2,
//             //         "title": "Jasmine Milk Tea",
//             //         "price": 5.0,
//             //         "description": "Jasmine Milk Tea",
//             //         "inventory": 7,
//             //         "milk_id": 2
//             //     }
//             // },
//             return {items: data.map(item=>item.menuitem), id: id}
//         } 
//         catch(error){
//             return Promise.reject(error);
//         }
//     }
// )

const menuitemSlice=createSlice({
    name: 'menuitem',
    initialState: {
        // category: {
        //     array: [],
        //     status: 'idle',
             
        // },
        milk: {
            array: [],
            status: 'idle',
             
        },
        menuitems: {
            array: [],
            status: 'idle',
        }, 
        // menuitemsByCategory: {
        //     category_id: null,
        //     array: [],
        //     status: 'idle',
        // }, 

    },
    reducers: {
        
    },
    extraReducers(builder) {
      builder

        .addCase(fetchMenuitems.pending, (state, action) => {
            state.menuitems.status = 'loading'
        })
        .addCase(fetchMenuitems.fulfilled, (state, action) => {
           
            state.menuitems.status = 'succeeded'
            state.menuitems.array = action.payload
        })
        .addCase(fetchMenuitems.rejected, (state, action) => {
            
            state.menuitems.status = 'failed'
        })
        

        .addCase(fetchMilks.pending, (state, action) => {
            state.milk.status = 'loading'
        })
        .addCase(fetchMilks.fulfilled, (state, action) => {
            state.milk.status = 'succeeded'
            state.milk.array = action.payload
        })
        .addCase(fetchMilks.rejected, (state, action) => {
            state.milk.status = 'failed'
        })
       
    }
})

export const { setClick } = menuitemSlice.actions

export default menuitemSlice.reducer


export const getMenuitemById = (state, id) =>{
    return state.menuitem.menuitems.array.find(menuitem => menuitem.pk === id)
}
export const getMenuitemTitleById = (state, id) =>{
    const item =  state.menuitem.menuitems.array.find(menuitem => menuitem.pk === id)
    return item===undefined ? "" : item.title
}
export const getMilks = (state) =>{
    return state.menuitem.milk.array
}
export const getMilkById = (state, id) =>{
    const milk = state.menuitem.milk.array.find(milk => milk.id === id)
    return milk === undefined? null : milk
}
export const getCategoryById = (state, id) => {
    let category = state.menuitem.category.array.find(cat=>cat.pk === id)
    return category === undefined ? "" : category.title
}
export const getCategories = (state) =>{
    console.log(state.menuitem.menuitems.array)
    let categories = state.menuitem.menuitems.array.map(menuitem=>menuitem.category.title)
    return [...new Set(categories)];
    
}

export const getMenuitems = (state, category_id) =>{
    console.log(category_id)
    if(category_id === 0)
        return state.menuitem.menuitems.array
    
    return state.menuitem.menuitems.array.filter(menuitem=>menuitem.category_id === category_id)
}
// export const getUnitprice = (state, menuitem_id, milk_id) => {
//     const menuitem = state.menuitem.menuitems.array.find(item=>item.pk === menuitem_id)
//     const milk = state.menuitem.milk.array.find(item=>item.id === milk_id)
//     return menuitem.price + milk.price
// }
