import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api/api'


export const allProject = createAsyncThunk("projects", async (thunkAPI) => {
    try {
        const respones = await api.get("project", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        }
        );

        if (respones.status == 200) {
            const project = respones.data
            return project.payload
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }



})

export const createProject = createAsyncThunk("create", async (name, thunkAPI) => {
    try {
        const respones = await api.post("project", {
            name: name
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        }
        );
        if (respones.status == 200) {
            const project = respones.data
            return project.payload
        }
        console.log("respone", respones);
    } catch (error) {
        //console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})
export const removeProject = createAsyncThunk("delete", async (id, thunkAPI) => {
    // console.log("service",id);
    try {
        const respones = await api.delete(`project/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        }
        );
        if (respones.status == 200) {
            return id;
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})

export const getProjectById = createAsyncThunk("getProjectById", async (id, thunkAPI) => {
    // console.log("service",id);
    try {
        const respones = await api.get(`project/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken")
            }
        }
        );
        if (respones.status == 200) {
            //console.log("project from service",respones.data);
            return respones.data.payload;
        }
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})
