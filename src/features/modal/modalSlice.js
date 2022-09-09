import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

export const { open, close } = modalSlice.actions;
export const selectModal = (state) => state.modal.value;

export default modalSlice.reducer;
