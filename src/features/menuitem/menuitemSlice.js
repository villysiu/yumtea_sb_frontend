import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";
import {addMenuitem, deleteMenuitem} from "../admin/adminSlice";

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

            return await response.json()
            
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
            return await response.json()
        } 
        catch(error){
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

            return await response.json();
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
            return await response.json()
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
            return await response.json()
        }
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const fetchTemperatures = createAsyncThunk(
    'menuitem/fetchTemperatures',
    async () => {
        try {
            const response=await fetch(`${apiLink}/temperatures`, {
                method: "GET",
            })
            if(!response.ok) {
                return response
            }
            return await response.json()
        }
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const fetchBestSellerss=createAsyncThunk(
    'menuitem/fetchBestSellerss',
    async () => {
        try {
            const response=await fetch(`${apiLink}/bestsellers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            return await response.json()
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
        temperature: {
            array: [],
            status: 'idle',

        },
        menuitems: {
            array: [],
            status: 'idle',
        },
        bestSellers: {
            array: [],
            status: 'idle'
        },

        menuitemButton: {
            clicked: false,
            cartitem: "",
        },

        itemToCustomize: null,





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
            state.itemToCustomize = action.payload;
            
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
          .addCase(fetchTemperatures.pending, (state, action) => {
              state.temperature.status = 'loading'
          })
          .addCase(fetchTemperatures.fulfilled, (state, action) => {
              console.log(action.payload)
              state.temperature.status = 'succeeded'
              state.temperature.array = action.payload
          })
          .addCase(fetchTemperatures.rejected, (state, action) => {
              state.temperature.status = 'failed'
          })

          .addCase(fetchBestSellerss.pending, (state, action) => {
              state.bestSellers.status = 'loading'
          })
          .addCase(fetchBestSellerss.fulfilled, (state, action) => {

              state.bestSellers.status = 'succeeded'
              state.bestSellers.array = action.payload
          })
          .addCase(fetchBestSellerss.rejected, (state, action) => {

              state.bestSellers.status = 'failed'
          })
          .addCase(addMenuitem.fulfilled, (state, action) => {
              console.log(action.payload)
              state.menuitems.status = "idle"
              state.menuitems.array = []
          })
          .addCase(deleteMenuitem.fulfilled, (state, action) => {
              state.menuitems.status = "idle"
              state.menuitems.array = []
          })
    }
})

export const { triggerMenuItem, resetMenuitemClicked, triggerCustomizeModal } = menuitemSlice.actions

export default menuitemSlice.reducer

const selectMenuitems = state => state.menuitem.menuitems.array;
const selectMenuitemId = (state, id) => id;
export const getMenuitemById =createSelector(
    [selectMenuitems, selectMenuitemId],
    (menuitems, menuitemId) => {
        const menuitem = menuitems.find(m=>m.id === menuitemId);
        return {
            'id': menuitem.id,
            'milk': menuitem.milk,
            'price': menuitem.price,
            'sugar': menuitem.sugar,
            'temperature': menuitem.temperature,
            'title': menuitem.title,
            'imageUrl': menuitem.imageUrl
        }
    }
)
const selectCategoryId = (state, category_id) => category_id;

export const getMenuitemsByCategoryId = createSelector(
    [selectMenuitems, selectCategoryId],
    (menuitems, categoryId) => {
        return menuitems.filter(menuitem=>menuitem.category.id === categoryId)
    }
)

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
const selectTemperatures = (state) => state.menuitem.temperature.array;
export const getTemperatures = createSelector(
    [selectTemperatures],
    (temperatures) => {
        console.log(temperatures.length)
        return temperatures.filter(s => s !== "FREE")

    }
)

// export const getCategoryById = (state, id) => {
//     let category = state.menuitem.category.array.find(cat=>cat.pk === id)
//     return category === undefined ? "" : category.title
// }
export const getCategories = (state) =>{
    return  state.menuitem.category.array;
}

export const sugarMap = new Map([
    ["ZERO", "No Sugar"],
    ["TWENTY_FIVE", "25% Sugar"],
    ["FIFTY", "50% Sugar"],
    ["SEVENTY_FIVE", "75% Sugar"],
    ["HUNDRED", "100% Sugar"]
]);



    

