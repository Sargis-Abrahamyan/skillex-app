import { useDispatch } from 'react-redux';
import { setBrand, setCategory, setLoading, setPriceRange } from '../lib/store/slices/filters/filterSlice';

const useFilteredList = (isSelected) => {
  const dispatch = useDispatch();

  const handleSliderPriceChange = (newValue) => {
    dispatch(setPriceRange(newValue));
  };

  const handleFilterChange = (selectedValue) => {
    switch (isSelected) {
      case 'category':
        dispatch(setCategory(selectedValue));
        break;
      case 'brand':
        dispatch(setBrand(selectedValue));
        break;
      default:
        break;
    }
  };

  const handleFltered = (selectedValue) => {
    dispatch(setLoading(true));

    setTimeout(() => {
      if (isSelected) {
        handleFilterChange(selectedValue);
      } else {
        handleSliderPriceChange(selectedValue);
      }
      dispatch(setLoading(false));
    }, 200);
  };

  return handleFltered;
};

export default useFilteredList;
