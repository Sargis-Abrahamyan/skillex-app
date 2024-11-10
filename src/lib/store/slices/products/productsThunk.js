import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../../config/axios';

export const productsThunk = createAsyncThunk('products/fetchProducts', async (endpoint, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
