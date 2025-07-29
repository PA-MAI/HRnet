import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
// create store
export default configureStore({
  reducer: {
    employee: employeeReducer,
  },
});