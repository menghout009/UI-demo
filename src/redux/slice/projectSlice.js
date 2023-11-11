   import { createSlice } from "@reduxjs/toolkit";
   import { data } from "autoprefixer";
   import { allProject, createProject, getProjectById, removeProject } from "../service/projectService";

   const projectSlice = createSlice({
      name: 'project',
      initialState: {
         data: [],
         success: false,
         createSuccess:false,
         loading: true,
         project:null
      },
      reducers:{
         changeCreateSuccess:(state)=>{
            state.createSuccess=false
         }
      },
      extraReducers: (builder) => {
         builder.addCase(allProject.pending, (state) => {
            state.loading = true
         })
            .addCase(allProject.fulfilled, (state, action) => {
               state.loading = false;
               state.data = action.payload
               state.success = true
            })
            .addCase(allProject.rejected, (state, action) => {
               state.loading = false
               state.data = action.payload

               state.success = false
            })
            .addCase(createProject.pending, (state) => {
               state.loading = true
            })
            .addCase(createProject.fulfilled, (state, action) => {
               state.data = [...state.data, action.payload]
               state.loading = false;
               state.createSuccess = true
            })
            .addCase(createProject.rejected, (state, action) => {
               state.loading = false
               state.data = action
               state.success = false
            })
            .addCase(removeProject.pending,(state)=>{
               state.loading=true
               state.success=false
            })
            .addCase(removeProject.fulfilled,(state,action)=>{
               state.data=state.data.filter(item=>item.project_id!==action.payload);
               state.loading=false
            }
            )
            .addCase(removeProject.rejected,(state,action)=>{
               state.data=action
               state.loading=false
            })
            .addCase(getProjectById.pending,(state)=>{
               state.loading=true
            })
            .addCase(getProjectById.fulfilled,(state,action)=>{
               state.project=action.payload
               state.loading=false
            })
            .addCase(getProjectById.rejected,(state,action)=>
            {
               state.project=action.payload
            })
         
      }
   })
   export const{changeCreateSuccess}=projectSlice.actions
   export default projectSlice.reducer