import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filters/filterSlice';
import productsSlices from './slices/products/productsSlice';

export const store = configureStore({
  reducer: {
    fitlers: filtersSlice,
    products: productsSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
