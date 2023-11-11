import { createSlice } from "@reduxjs/toolkit";
import { FaLeaf } from "react-icons/fa";
import { currentUser } from "../service/userService";

const userSlice=createSlice(
    {
        name:'user',
        initialState:{
            user:null,
            else:false,
            loading:""
        },
        extraReducers:(builder)=>{
           builder.addCase(currentUser.pending, (state) => {
                state.success = false
                state.error=null
                state.loading = 'pending';
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.error=null
                state.user=action.payload
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = 'reject';
                state.error = action
                
            })

        }
    }
)

export default userSlice.reducer