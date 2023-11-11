import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const currentUser = createAsyncThunk("register", async (thunkAPI) => {
    // console.log("Object",userData);
     try {
         const respones = await api.get("/user/current-user",
         {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        }
         );
     
         if (respones.status == 200) {
             const user = respones.data;
             //console.log(user);
             return user.payload;
         }
     } catch (error) {
         return thunkAPI.rejectWithValue(error);
     }
 })