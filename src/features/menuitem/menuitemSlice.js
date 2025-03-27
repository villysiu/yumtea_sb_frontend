import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const fetchCategories=createAsyncThunk(
    'menuitem/fetchCategories',
    async (_, {rejectWithValue}) => {
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
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json()
            
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchMenuitems=createAsyncThunk(
    'menuitem/fetchMenuitems',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/menuitems`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchMilks=createAsyncThunk(
    'menuitem/fetchMilks',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/milks`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })
            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchSizes=createAsyncThunk(
    'menuitem/fetchSizes',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/sizes`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })
            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchSugars = createAsyncThunk(
    'menuitem/fetchSugars',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/sugars`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                }
            })
            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchTemperatures = createAsyncThunk(
    'menuitem/fetchTemperatures',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/temperatures`, {
                method: "GET",
            })
            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchBestSellerss=createAsyncThunk(
    'menuitem/fetchBestSellerss',
    async (_, {rejectWithValue}) => {
        try {
            const response=await fetch(`${apiLink}/query/bestSellers`, {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                //     'accept': 'application/json'
                // }
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json()
        }
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const addMenuitem = createAsyncThunk(
    'menuitem/addMenuitem',
    async (newMenuitem,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(newMenuitem),
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json();


        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)
export const deleteMenuitem = createAsyncThunk(
    'menuitem/deleteMenuitem',
    async (id,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${id}`, {
                method: "DELETE",
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return id
        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)
export const updateMenuitem = createAsyncThunk(
    'menuitem/updateMenuitem',
    async (editMenuitem,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${editMenuitem.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json',
                },
                body: JSON.stringify(editMenuitem),
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            return await response.json();
        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)
// json content-type cant have a file appended to it. For APIs its better to separately do a file upload, then use the path to the file (or the disk and file name) for relating the resource to the file
export const uploadImage = createAsyncThunk(
    'menuitem/uploadImage',
    async (formData,{rejectWithValue}) => {
        console.log(formData)
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        try {
            const response=await fetch(`${apiLink}/menuitem/${formData.get('id')}/img`, {
                method: "POST",

                body: formData,
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error uploading image:", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();

        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)

export const deleteImage = createAsyncThunk(
    'menuitem/deleteImage',
    async (id,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${id}/img`, {
                method: "DELETE",
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error deleting image:", errorText);
                return rejectWithValue(errorText);
            }

            return await response.json();

        }
        catch(error){
            throw rejectWithValue(error.message);

        }

    }
)
export const toggleActive = createAsyncThunk(
    'menuitem/toggleActive',
    async (id,{rejectWithValue}) => {

        try {
            const response=await fetch(`${apiLink}/menuitem/${id}/toggleActive`, {
                method: "PATCH",
                credentials: 'include'
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error toggling visibility:", errorText);
                return rejectWithValue(errorText);
            }

            return id

        }
        catch(error){
            throw rejectWithValue(error.message);

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
        addMenuitemStatus: 'idle',
        deleteMenuitemStatus: 'idle',
        updateMenuitemStatus: 'idle',
        updateImgStatus: 'idle',
        toggleVisibilityStatus: 'idle'





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


          .addCase(toggleActive.pending, (state, action) => {
              state.toggleVisibilityStatus = 'loading'
          })

          .addCase(toggleActive.fulfilled, (state, action) => {
              state.toggleVisibilityStatus = 'succeeded'
              state.menuitems.array = state.menuitems.array.map(m=>{
                  if(m.id===action.payload) {
                      m.active = !m.active;
                  }
                  return m;
              })
          })
          .addCase(toggleActive.rejected, (state, action) => {
              state.toggleVisibilityStatus = 'failed';
          })

          .addCase(addMenuitem.pending, (state, action) => {
              state.addMenuitemStatus = 'loading'
          })
          .addCase(addMenuitem.fulfilled, (state, action) => {
              console.log(action.payload)
              state.addMenuitemStatus = 'succeeded'
              state.menuitems.status = "succeeded"
              state.menuitems.array = [
                  ... state.menuitems.array,
                  action.payload
              ]

          })
          .addCase(addMenuitem.rejected, (state, action) => {
              state.addMenuitemStatus = 'failed';
          })

          .addCase(deleteMenuitem.pending, (state, action) => {
              state.deleteMenuitemStatus = 'loading'
          })
          .addCase(deleteMenuitem.fulfilled, (state, action) => {

              state.deleteMenuitemStatus = 'succeeded'
              state.menuitems.status = "succeeded"
              state.menuitems.array = state.menuitems.array.filter(m=>m.id !== parseInt(action.payload))
          })
          .addCase(deleteMenuitem.rejected, (state, action) => {
              state.deleteMenuitemStatus = 'failed';
          })

          .addCase(updateMenuitem.pending, (state, action) => {
              state.updateMenuitemStatus = 'loading'
          })
          .addCase(updateMenuitem.fulfilled, (state, action) => {
              console.log(action.payload)
              state.updateMenuitemStatus = 'succeeded'

              state.menuitems.status = "succeeded"
              state.menuitems.array = state.menuitems.array.map(m=>{
                  if(m.id===action.payload.id)
                      return action.payload
                  return m;
              })


          })
          .addCase(updateMenuitem.rejected, (state, action) => {
              state.updateMenuitemStatus = 'failed';
          })

          .addCase(uploadImage.pending, (state, action) => {
              state.updateImgStatus = 'loading'
          })
          .addCase(uploadImage.fulfilled, (state, action) => {

              state.updateImgStatus = 'succeeded'

              state.menuitems.status = "idle"
              state.menuitems.array = []


                      // "blob:http://127.0.0.1:8001/be663c6a-d6d2-42be-a5cf-a1b30f6bb585
          })
          .addCase(uploadImage.rejected, (state, action) => {
              state.updateImgStatus = 'failed';
          })

          .addCase(deleteImage.pending, (state, action) => {
              state.updateImgStatus = 'loading'
          })
          .addCase(deleteImage.fulfilled, (state, action) => {

              state.updateImgStatus = 'succeeded'
              state.menuitems.status = "idle"
              state.menuitems.array = []
          })
          .addCase(deleteImage.rejected, (state, action) => {
              state.updateImgStatus = 'failed';
          })

    }
})

export const { triggerMenuItem, resetMenuitemClicked, triggerCustomizeModal } = menuitemSlice.actions

export default menuitemSlice.reducer

const selectMenuitems = state => state.menuitem.menuitems.array;
const selectMenuitemId = (state, id) => id;
const selectSearchText = (state, searchText) => searchText
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
export const searchMenuitem = createSelector(
    [selectMenuitems, selectSearchText],
    (menuitems, searchText) => {
        if(searchText === "")
            return menuitems

        const regex = new RegExp(searchText, "i");
        return menuitems.filter(m=>regex.test(m.title.toLowerCase()) || regex.test(m.category.title.toLowerCase()))
    }
)
const selectCategoryId = (state, category_id) => category_id;

export const getMenuitemsByCategoryId = createSelector(
    [selectMenuitems, selectCategoryId],
    (menuitems, categoryId) => {
        return menuitems.filter(menuitem=>menuitem.category.id === categoryId && menuitem.active===true)
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



    

