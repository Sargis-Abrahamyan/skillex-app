import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(time);
    };
  }, [value, delay, dispatch]);

  return debouncedValue;
};

export default useDebounce;
