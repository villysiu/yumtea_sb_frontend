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
export const fetchSugars = createAsyncThunk(
    'menuitem/fetchSugars',
    async () => {
        try {
            const response=await fetch(`${apiLink}/sugars`, {
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
        sugar: {
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
            // trigger: false,
            itemToCustomize: null,
            task: null //add or update
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
            
            // state.customize.clicked =action.payload.trigger
            state.customize.itemToCustomize = action.payload.item
            state.customize.task = action.payload.task
            
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

          .addCase(fetchSugars.pending, (state, action) => {
              state.sugar.status = 'loading'
          })
          .addCase(fetchSugars.fulfilled, (state, action) => {
              state.sugar.status = 'succeeded'
              state.sugar.array = action.payload
          })
          .addCase(fetchSugars.rejected, (state, action) => {
              state.sugar.status = 'failed'
          })
    }
})

export const { triggerMenuItem, resetMenuitemClicked, triggerCustomizeModal } = menuitemSlice.actions

export default menuitemSlice.reducer


export const getMenuitemById = (state, id) =>{
    // console.log(state.menuitem.menuitems.array.length)
    const menuitem = state.menuitem.menuitems.array.find(menuitem => menuitem.id === id)
    return {
        'id': menuitem.id,
        'milk': menuitem.milk,
        'price': menuitem.price,
        'sugar': menuitem.sugar,
        'temperature': menuitem.temperature,
        'title': menuitem.title
    }
}
// export const getMenuitemTitleById = (state, id) =>{
//     const item =  state.menuitem.menuitems.array.find(menuitem => menuitem.pk === id)
//     return item===undefined ? "" : item.title
// }
const selectMilks = (state) => state.menuitem.milk.array;
export const getMilks = createSelector(
    [selectMilks],
    (milks) => {
        return milks.filter(m => m.title !== "NA")
    }
)
const selectMilkId = (state, milk_id) => milk_id;

export const getMilkById = createSelector(
    [selectMilks, selectMilkId],
    (milks, milkId) => {
        return milks.find(milk=>milk.id === milkId);
    }
)

export const getSizes = (state) =>{
    return state.menuitem.size.array
}
export const getSizeById = (state, sizeId) => {
    return state.menuitem.size.array.find(s => s.id === sizeId)
}
const selectSugars = (state) => state.menuitem.sugar.array;
export const getSugars = createSelector(
    [selectSugars],
    (sugars) => {
        return sugars.filter(s => s !== "NA")

    }
)

// export const getCategoryById = (state, id) => {
//     let category = state.menuitem.category.array.find(cat=>cat.pk === id)
//     return category === undefined ? "" : category.title
// }
export const getCategories = (state) =>{
    return  state.menuitem.category.array;
}

const selectMenuitems = (state) => state.menuitem.menuitems.array;
const selectCategoryId = (state, category_id) => category_id;

export const getMenuitemsByCategoryId = createSelector(
    [selectMenuitems, selectCategoryId],
    (menuitems, categoryId) => {
        return menuitems.filter(menuitem=>menuitem.category.id === categoryId)
    }
)

    

