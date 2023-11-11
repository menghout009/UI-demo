import {createAsyncThunk} from '@reduxjs/toolkit'
import { api } from "../../api/api"

export const userLogin = createAsyncThunk("login", async (userData,thunkAPI) => {
   
    try {
        const respones = await api.post("/auth/login", userData);
        if (respones.status == 200) {
            const user = respones.data;
            //console.log(user);
            return user.payload;
        }
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
   
})

export const confirmEmail = createAsyncThunk("confirm", async (token,thunkAPI) => {
    // console.log("Object",userData);
     try {
         const respones = await api.get("/auth/confirm-email?token="+token,
         );
     
         if (respones.status == 200) {
             const user = respones.data;
             //console.log(user);
             return user;
         }
     } catch (error) {
        console.log(error);
         return thunkAPI.rejectWithValue(error);
     }
 })

export const userRegister = createAsyncThunk("register", async (userData,thunkAPI) => {
   // console.log("Object",userData);
    try {
        const respones = await api.post("/auth/register", userData);
    
        if (respones.status == 200) {
            const user = respones.data;
            //console.log(user);
            return user;
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

