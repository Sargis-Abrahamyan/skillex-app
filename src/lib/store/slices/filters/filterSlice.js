import { createSlice } from '@reduxjs/toolkit';
import { toggleArrayItemExists } from '../../../../utils/toggleArrayItemExists';

const initialState = {
  category: [],
  brand: [],
  priceRange: [40, 800],
  loading: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, { payload }) {
      state.category = toggleArrayItemExists(state.category, payload);
      state.loading = false;
    },
    setBrand(state, { payload }) {
      state.brand = toggleArrayItemExists(state.brand, payload);
      state.loading = false;
    },
    setPriceRange(state, { payload }) {
      state.priceRange = payload;
      state.loading = false;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});

export const { setCategory, setBrand, setPriceRange, setLoading } = filtersSlice.actions;
export default filtersSlice.reducer;
