import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const fetchCategories=createAsyncThunk(
    'menuitem/fetchCategories',
    async () => {
        try {
            // const response=await fetch(`${apiLink}/api/categories`, {
            const response=await fetch(`${apiLink}/categories`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                console.log(response)
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            console.log(data)

            
            return data
            
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const fetchMenuitems=createAsyncThunk(
    'menuitem/fetchMenuitems',
    async () => {
        try {
            const response=await fetch(`${apiLink}/menuitems`, {
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
            console.log(data)
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
            const response=await fetch(`${apiLink}/milks`, {
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
export const fetchSizes=createAsyncThunk(
    'menuitem/fetchSizes',
    async () => {
        try {
            const response=await fetch(`${apiLink}/sizes`, {
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


const menuitemSlice=createSlice({
    name: 'menuitem',
    initialState: {
        category: {
            array: [],
            status: 'idle',
             
        },
        milk: {
            array: [],
            status: 'idle',
             
        },
        size: {
            array: [],
            status: 'idle',

        },
        menuitems: {
            array: [],
            status: 'idle',
        }, 
        menuitemButton: {
            clicked: false,
            cartitem: "",
        },
        customize: {
            clicked: false,
            itemToCustomize: null,
            task: "add" //add or update
        }



    },
    reducers: {
        triggerMenuItem(state, action) {
            console.log(action.payload)
            
            state.menuitemButton.clicked = true
            state.menuitemButton.cartitem = action.payload.cartitem
            
        },
        resetMenuitemClicked(state){
            state.menuitemButton.clicked = false
            state.menuitemButton.cartitem = ""
        },
        triggerCustomizeModal(state, action) {
            console.log(action.payload)
            
            state.customize.clicked = !state.customize.clicked
            state.customize.itemToCustomize = action.payload
            
        },

    },
    extraReducers(builder) {
      builder
      .addCase(fetchCategories.pending, (state, action) => {
            state.category.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {

            state.category.status = 'succeeded'
            state.category.array = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.category.status = 'failed'
        })
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

          .addCase(fetchSizes.pending, (state, action) => {
              state.size.status = 'loading'
          })
          .addCase(fetchSizes.fulfilled, (state, action) => {
              state.size.status = 'succeeded'
              state.size.array = action.payload
          })
          .addCase(fetchSizes.rejected, (state, action) => {
              state.size.status = 'failed'
          })
       
    }
})

export const { triggerMenuItem, resetMenuitemClicked, triggerCustomizeModal } = menuitemSlice.actions

export default menuitemSlice.reducer


export const getMenuitemById = (state, id) =>{
    return state.menuitem.menuitems.array.find(menuitem => menuitem.id === id)
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
    return milk === undefined? "No Milk" : milk.title
}
export const getSizes = (state) =>{
    return state.menuitem.size.array
}

export const getCategoryById = (state, id) => {
    let category = state.menuitem.category.array.find(cat=>cat.pk === id)
    return category === undefined ? "" : category.title
}
export const getCategories = (state) =>{
    // console.log(state.menuitem.menuitems.array)
    return  state.menuitem.category.array
    // return [...new Set(categories)];
    
}
export const getMenuitemsByCategoryId = (state, categoryId) =>{
    // console.log(categoryId)
    // let arr = []
    // for(let item of state.menuitem.menuitems.array){
    //     console.log(item)
    //     if(item.category.id === categoryId)
    //         arr.push(item)
    // }
    return state.menuitem.menuitems.array.filter(menuitem => menuitem.category.id === categoryId)
   //  console.log(arrs.length)

}
// const selectMenuitems = (state) => state.menuitem.menuitems.array;
// const selectCategoryId = (state, category_id) => category_id;
//
// export const getMenuitems = createSelector(
//     [selectMenuitems, selectCategoryId],
//     (menuitems, categoryId) => {
//
//         if(categoryId === 0)
//             return menuitems
//
//         return menuitems.filter(item=>item.category_id === categoryId)
//
//     }
// )
    

