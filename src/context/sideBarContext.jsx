import { createContext, useContext } from 'react';
import { useBooleanState } from '../hooks/useBooleanState';

const SideBarContext = createContext();

export const useSideBar = () => {
  return useContext(SideBarContext);
};

export const SideBarProvider = ({ children }) => {
  const { state: showSideBar, setTrue: handleSideBarShow, setFalse: handleCloseSideBar } = useBooleanState();
  return <SideBarContext.Provider value={{ showSideBar, handleSideBarShow, handleCloseSideBar }}>{children}</SideBarContext.Provider>;
};
