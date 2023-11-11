import {configureStore} from '@reduxjs/toolkit'
import authSlice from './redux/slice/authSlice';
import projectSlice from './redux/slice/projectSlice';
import userSlice from './redux/slice/userSlice';
const store=configureStore({
    reducer: {
      auth:authSlice,
      project:projectSlice,
      user:userSlice
    }
});

export default store
