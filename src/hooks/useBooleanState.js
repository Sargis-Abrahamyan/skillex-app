import { useState, useCallback } from 'react';

export const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
};
