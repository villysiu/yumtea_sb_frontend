import { createSlice, createAsyncThunk, createSelector,current } from "@reduxjs/toolkit";
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
            const response=await fetch(`${apiLink}/bookingApi/`, {
                method: "GET",
                
                headers: {
                    'Authorization': `Token ${localStorage.getItem("token")}`,
                },
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            // console.log(data)
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
const reservationSlice=createSlice({
    name: 'reservation',
    initialState: {
        reservations: {
            array: [],
            status: 'idle',
        },
        create_or_update: {
            status: 'idle',
            item: null,
        }
       
    },
    reducers: {
        clear_reservation_status(state, action){
            state.create_or_update.status="idle"
            state.create_or_update.item=null
        }
    },
    extraReducers(builder) {
      builder
        .addCase(makeReservation.pending, (state, action) => {
            state.reservations.status = 'loading'
            state.create_or_update.status = 'loading'
        })
        .addCase(makeReservation.fulfilled, (state, action) => {
            state.create_or_update.status = 'succeeded'
            state.create_or_update.item = action.payload
            console.log(action.payload)
            state.reservations.status = 'succeeded'
            state.reservations.array.push(action.payload)
            // state.reservations.array = state.reservations.array.concat().sort((a,b)=>new Date(a.reservation_date)-new Date(b.reservation_date))
            
        })
        .addCase(makeReservation.rejected, (state, action) => {
            state.reservations.status = 'failed'
            state.create_or_update.status = 'failed'
        })
        .addCase(fetchReservations.pending, (state, action) => {
            state.reservations.status = 'loading'
        })
        .addCase(fetchReservations.fulfilled, (state, action) => {
            state.reservations.status = 'succeeded'
            state.reservations.array = action.payload
        })
        .addCase(fetchReservations.rejected, (state, action) => {
            state.reservations.status = 'failed'
        })
        .addCase(deleteReservation.pending, (state, action) => {
            state.reservations.status = 'loading'
        })
        .addCase(deleteReservation.fulfilled, (state, action) => {
            state.reservations.status = 'succeeded'
            state.reservations.array = 
            state.reservations.array.filter(res=>{
                return res.pk!==action.payload
            })
            
        })
        .addCase(deleteReservation.rejected, (state, action) => {
            state.reservations.status = 'failed'
        })
        .addCase(updateReservation.pending, (state, action) => {
            state.reservations.status = 'loading'
            state.create_or_update.status = 'loading'
        })
        .addCase(updateReservation.fulfilled, (state, action) => {
            state.reservations.status = 'succeeded'
            // console.log(action.payload)
            // console.log(state.reservations.array)
            state.create_or_update.status = 'succeeded'
            state.create_or_update.item = action.payload

            console.log(current(state.reservations.array));
            state.reservations.array  = 
                state.reservations.array
                .map(res=>{
                    if(res.pk===action.payload.pk)
                        return action.payload
                    return res
                })

            // state.reservations.array = state.reservations.array.concat().sort((a,b)=>new Date(a.reservation_date)-new Date(b.reservation_date))
        })
        .addCase(updateReservation.rejected, (state, action) => {
            state.reservations.status = 'failed'
            state.create_or_update.status = 'failed'
        })
       
        
    }
})
export const { clear_reservation_status } = reservationSlice.actions
export default reservationSlice.reducer

export const getReservationById =(resId, state)=>{
    const res = state.reservation.reservations.array.find(res=>res.pk === resId)
    
    return res === undefined ? {reservation_date: '', reservation_time:'', no_of_guests: 0} : res
    // return null
}

export const getUpcomingReservations = (state) => {
    return state.reservation.reservations.array.filter(res=>{
        const dt = new Date(`${res.reservation_date}T${res.reservation_time}`)
        return dt>new Date()
    }).sort((a,b)=>new Date(a.reservation_date)-new Date(b.reservation_date))
}
export const getPastReservations = (state) => {
    return state.reservation.reservations.array.filter(res=>{
        const dt = new Date(`${res.reservation_date}T${res.reservation_time}`)
        return dt<=new Date()
    }).sort((a,b)=>new Date(a.reservation_date)-new Date(b.reservation_date))
}
// const selectReservations = state => state.reservation.reservations.array

// export const getUpcomingReservations = createSelector([selectReservations], array=>{
//     return array.filter(
//         res=>{
//             const date2 = new Date(`${res.reservation_date}T${res.reservation_time}`)
//             return date2>new Date()
//         }
//     )
// })

// export const getPastReservations = createSelector([selectReservations], array=>{
//     return array.filter(
//         res=>{
//             const date2 = new Date(`${res.reservation_date}T${res.reservation_time}`)
//             return date2<=new Date()
//         }
//     )
// })
