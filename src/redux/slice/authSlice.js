import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "../service/authenticationService";

const authSlice = createSlice(
    {
        name: 'auth',
        initialState: {
            data:null,
            loading:"",
            success: false,
            error:null,
        },
        reducers:{
           changesuccess:(state)=>{
            state.success=false
           },
           onchangError:(state)=>{
            state.error=null
         }
        },
        extraReducers: (builder) => {
            builder.addCase(userLogin.pending, (state) => {
                state.success = false
                state.loading = 'pending';
                state.error=null
            })
                .addCase(userLogin.fulfilled, (state, action) => {
                    state.loading = 'fulfilled';
                    state.error=null
                    state.user=action.payload
                    state.success = true
                    localStorage.setItem('accessToken',action.payload.accessToken)
                    localStorage.setItem('token',action.payload.token)
                    state.data = action.payload
                })
                .addCase(userLogin.rejected, (state, action) => {
                    state.loading = 'reject';
                    state.success = false
                    state.error = action
                   
                })
                .addCase(userRegister.pending, (state) => {
                    state.success = false
                    state.error=null
                    state.loading = 'pending';
                })
                .addCase(userRegister.fulfilled, (state, action) => {
                    state.loading = 'fulfilled';
                    state.success = action.payload.success
                    state.error=null
                    state.data = action.payload
                })
                .addCase(userRegister.rejected, (state, action) => {
                    state.loading = 'reject';
                    state.error = action
                    
                })
               
        }
    }
)
export const{changesuccess,onchangError}=authSlice.actions
export default authSlice.reducer