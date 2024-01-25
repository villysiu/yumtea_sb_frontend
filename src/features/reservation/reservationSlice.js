import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiLink } from "../../app/global";

export const makeReservation=createAsyncThunk(
    'reservation/makeReservation',
    async (resData) => {
        console.log("Make Reservation")
        console.log(resData)
        try {
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "POST",
                
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(resData)
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
const reservationSlice=createSlice({
    name: 'reservation',
    initialState: {
        upcoming_reservations: {
            upcoming_reservations_arr: [],
            status: 'idle',
        },
        past_reservations: {
            past_reservations_arr: [],
            status: 'idle',
        },
        available:{
            available_arr: [],
            status: 'idle',

        }
       
    },
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(makeReservation.pending, (state, action) => {
            state.reservation.status = 'loading'
        })
        .addCase(makeReservation.fulfilled, (state, action) => {
            
            console.log(action.payload)
            state.reservation.status = 'succeeded'
            state.reservation.reservations_arr = [...state.reservation.reservations_arr, action.payload]
        })
        .addCase(makeReservation.rejected, (state, action) => {
            state.reservation.status = 'failed'
        })
        .addCase(fetchReservations.pending, (state, action) => {
            state.upcoming_reservations.status = 'loading'
        })
        .addCase(fetchReservations.fulfilled, (state, action) => {
            state.upcoming_reservations.status = 'succeeded'
            state.upcoming_reservations.upcoming_reservations_arr = action.payload
        })
        .addCase(fetchReservations.rejected, (state, action) => {
            state.upcoming_reservations.status = 'failed'
        })
       
        .addCase(fetchPastReservations.pending, (state, action) => {
            state.past_reservations.status = 'loading'
        })
        .addCase(fetchPastReservations.fulfilled, (state, action) => {
            state.past_reservations.status = 'succeeded'
            state.past_reservations.past_reservations_arr = action.payload
        })
        .addCase(fetchPastReservations.rejected, (state, action) => {
            state.past_reservations.status = 'failed'
        })
        
    }
})
// export const {  } = orderSlice.actions
export default reservationSlice.reducer