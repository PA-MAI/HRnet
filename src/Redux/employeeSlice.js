import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};
// add employee in state
const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;