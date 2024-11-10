import { createSlice } from '@reduxjs/toolkit';
import { productsThunk } from './productsThunk';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlices = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsThunk.fulfilled, (state, { payload }) => {
        state.products = payload.data;
        state.loading = false;
      })
      .addCase(productsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { setLoading } = productsSlices.actions;
export default productsSlices.reducer;
