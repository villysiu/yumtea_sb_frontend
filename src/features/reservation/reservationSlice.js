import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const makeReservation=createAsyncThunk(
    'reservation/makeReservation',
    async (formData) => {
        console.log("Make Reservation")
        console.log(formData)
        try {
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "POST",
                
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData)
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
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
            return Promise.reject(error);
        }
    }
)
export const fetchReservations=createAsyncThunk(
    'reservation/fetchReservations',
    async () => {
        console.log("fetch Reservation")
        
        try {
            const response=await fetch(`${apiLink}/bookingApi/?upcoming=true`, {
                method: "GET",
                
                headers: {
                    // 'content-type': 'application/json',
                    // 'accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
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
            return Promise.reject(error);
        }
    }
)
export const fetchPastReservations=createAsyncThunk(
    'reservation/fetchPastReservations',
    async () => {
        console.log("fetch Past Reservation")
        
        try {
            const response=await fetch(`${apiLink}/bookingApi/?upcoming=false`, {
                method: "GET",
                
                headers: {
                    // 'content-type': 'application/json',
                    // 'accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
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
            return Promise.reject(error);
        }
    }
)
export const deleteReservation=createAsyncThunk(
    'reservation/deleteReservation',
    async (pk) => {
        console.log("delete Reservation")
        console.log(pk)
        try {
            const response=await fetch(`${apiLink}/bookingApi/${pk}`, {
                method: "DELETE",
                
                headers: {
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            // const data=await response.json()
            // console.log(data)

            
            return pk
        } 
        catch(error){
            return Promise.reject(error);
        }
    }
)
export const updateReservation=createAsyncThunk(
    'reservation/updateReservation',
    async (formData) => {
        console.log("update Reservation")
        console.log(formData)
        try {
            const response=await fetch(`${apiLink}/bookingApi/${formData.pk}`, {
                method: "PATCH",
                
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(formData.data)
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
export const fetchAllReservations=createAsyncThunk(
    'reservation/fetchAllReservations',
    async () => {
        console.log("fetch All Reservation")
        
        try {
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "GET",
                
                // headers: {
                    // 'content-type': 'application/json',
                    // 'accept': 'application/json',
                    // 'Authorization': `Token ${localStorage.getItem("token")}`,
                // },
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
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
            return Promise.reject(error);
        }
    }
)
const reservationSlice=createSlice({
    name: 'reservation',
    initialState: {
        upcoming_reservations: {
            array: [],
            status: 'idle',
        },
        past_reservations: {
            array: [],
            status: 'idle',
        },
        all_reservations:{
            array: [],
            status: 'idle',

        }
       
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(makeReservation.pending, (state, action) => {
            state.upcoming_reservations.status = 'loading'
        })
        .addCase(makeReservation.fulfilled, (state, action) => {
            
            console.log(action.payload)
            state.upcoming_reservations.status = 'succeeded'
            state.upcoming_reservations.array =
             [...state.upcoming_reservations.array, action.payload]
        })
        .addCase(makeReservation.rejected, (state, action) => {
            state.upcoming_reservations.status = 'failed'
        })
        .addCase(fetchReservations.pending, (state, action) => {
            state.upcoming_reservations.status = 'loading'
        })
        .addCase(fetchReservations.fulfilled, (state, action) => {
            state.upcoming_reservations.status = 'succeeded'
            state.upcoming_reservations.array = action.payload
        })
        .addCase(fetchReservations.rejected, (state, action) => {
            state.upcoming_reservations.status = 'failed'
        })
       
        .addCase(fetchPastReservations.pending, (state, action) => {
            state.past_reservations.status = 'loading'
        })
        .addCase(fetchPastReservations.fulfilled, (state, action) => {
            state.past_reservations.status = 'succeeded'
            state.past_reservations.array = action.payload
        })
        .addCase(fetchPastReservations.rejected, (state, action) => {
            state.past_reservations.status = 'failed'
        })
        .addCase(deleteReservation.pending, (state, action) => {
            state.upcoming_reservations.status = 'loading'
        })
        .addCase(deleteReservation.fulfilled, (state, action) => {
            state.upcoming_reservations.status = 'succeeded'
            state.upcoming_reservations.array = 
            state.upcoming_reservations.array.filter(res=>{
                return res.pk!==action.payload
            })
            state.past_reservations.status = 'succeeded'
            state.past_reservations.array = 
            state.past_reservations.array.filter(res=>{
                return res.pk!==action.payload
            })
            
        })
        .addCase(deleteReservation.rejected, (state, action) => {
            state.upcoming_reservations.status = 'failed'
        })
        .addCase(updateReservation.pending, (state, action) => {
            state.upcoming_reservations.status = 'loading'
        })
        .addCase(updateReservation.fulfilled, (state, action) => {
            state.upcoming_reservations.status = 'succeeded'
            state.upcoming_reservations.array = 
            state.upcoming_reservations.array.map(res=>{
                if(res.pk!==action.payload.pk)
                    return action.payload
                return res
            })
            
            
        })
        .addCase(updateReservation.rejected, (state, action) => {
            state.upcoming_reservations.status = 'failed'
        })
        .addCase(fetchAllReservations.pending, (state, action) => {
            state.all_reservations.status = 'loading'
        })
        .addCase(fetchAllReservations.fulfilled, (state, action) => {
            state.all_reservations.status = 'succeeded'
            state.all_reservations.array = action.payload
        })
        .addCase(fetchAllReservations.rejected, (state, action) => {
            state.all_reservations.status = 'failed'
        })
        
    }
})
// export const {  } = reservationSlice.actions
export default reservationSlice.reducer

export const getReservationById =(pk, state)=>{
    console.log(pk)
    console.log(state)
    const res = state.reservation.upcoming_reservations.array
        .find(res=>{
            return res.pk === parseInt(pk)
        })
    return res
    // return null
}