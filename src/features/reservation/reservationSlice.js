import { createSlice, createAsyncThunk, current, createSelector } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const makeReservation=createAsyncThunk(
    'reservation/makeReservation',
    async (formData, {rejectWithValue}) => {
        console.log("Make Reservation")
        console.log(formData)
        try {
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify(formData),
                credentials: "include"
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }
            const data=await response.json()
            console.log(data)
            // {
            //     "pk": 38,
            //     "user_id": 4,
            //     "no_of_guests": 2,
            //     "reservation_date": "2024-02-03",
            //     "reservation_time": "16:00:00"
            // }
            
            return data
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const fetchReservations=createAsyncThunk(
    'reservation/fetchReservations',
    async (_, {rejectWithValue}) => {
        console.log("fetch Reservation")
        
        try {
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "GET",
                credentials: "include"
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

export const deleteReservation=createAsyncThunk(
    'reservation/deleteReservation',
    async (pk, {rejectWithValue}) => {
        console.log("delete Reservation")

        try {
            const response=await fetch(`${apiLink}/bookingApi/${pk}`, {
                method: "DELETE",
                credentials: "include"
            })

            if(!response.ok) {
                const errorText = await response.text();
                console.log("Error :", errorText);
                return rejectWithValue(errorText);
            }

            return pk
        } 
        catch(error){
            return rejectWithValue(error.message);
        }
    }
)
export const updateReservation=createAsyncThunk(
    'reservation/updateReservation',
    async (formData, {rejectWithValue}) => {
        console.log("update Reservation")
        console.log(formData)
        try {
            const response=await fetch(`${apiLink}/bookingApi/${formData.pk}`, {
                method: "PATCH",
                
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(formData.data),
                credentials: "include"
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
const reservationSlice=createSlice({
    name: 'reservation',
    initialState: {
        reservations: [],
        fetchResStatus: 'idle',
        createResStatus:'idle',
        updateResStatus: 'idle',
        deleteResStatus: 'idle'
    },
    reducers: {
        // clear_reservation_status(state, action){
        //     // state.create_or_update.status="idle"
        //     // state.create_or_update.item=null
        //
        // },
        // clear_delete_status(state, action){
        //     // state.delete.status = 'idle'
        // }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchReservations.pending, (state, action) => {
          state.fetchReservationsStatus = 'loading'
        })
        .addCase(fetchReservations.fulfilled, (state, action) => {
          state.fetchReservationsStatus = 'succeeded'
          state.fetchReservationsStatus = "idle"
        })
        .addCase(fetchReservations.rejected, (state, action) => {
          state.fetchReservationsStatus = 'failed'
        })

        .addCase(makeReservation.pending, (state, action) => {
            state.reservations.status = 'loading'
            state.createResStatus.status = 'loading'
        })
        .addCase(makeReservation.fulfilled, (state, action) => {
            state.createResStatus.status = 'succeeded'
            state.fetchReservationsStatus = "idle"
        })
        .addCase(makeReservation.rejected, (state, action) => {
            state.createResStatus = 'failed'

        })


        .addCase(deleteReservation.pending, (state, action) => {
            state.deleteResStatus = 'loading'
        })
        .addCase(deleteReservation.fulfilled, (state, action) => {
            state.deleteResStatus = 'succeeded'
            state.fetchReservationsStatus = "idle"
        })
        .addCase(deleteReservation.rejected, (state, action) => {
            state.deleteResStatus = 'failed'
        })


        .addCase(updateReservation.pending, (state, action) => {
            state.updateResStatus = 'loading'
        })
        .addCase(updateReservation.fulfilled, (state, action) => {
            state.updateResStatus = 'succeeded'
            state.fetchReservationsStatus = "idle"
        })
        .addCase(updateReservation.rejected, (state, action) => {
            state.updateResStatus = 'failed'
        })
       
        
    }
})
export const { clear_reservation_status, clear_delete_status } = reservationSlice.actions
export default reservationSlice.reducer

export const getReservationById =(resId, state)=>{
    const res = state.reservation.reservations.array.find(res=>res.pk === resId)
    
    return res === undefined ? {reservation_date: '', reservation_time:'', no_of_guests: 0} : res
    // return null
}


const res = state =>  state.reservation.reservations.array

export const getPastReservations = createSelector([res], (arr) => {
    return arr
})

export const getUpcomingReservations = createSelector([res], (arr) =>{
    return arr
})

