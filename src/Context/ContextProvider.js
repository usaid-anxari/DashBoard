import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClick, setIsClick] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false)
  // handleSetMode
  const setMode = (e)=>{
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode',e.target.value)
    setThemeSettings(false)
  }
  // handleSetColor
  const setColor = (color)=>{
    setCurrentColor(color);
    localStorage.setItem('colorMode',color)
    setThemeSettings(false)
  }

  // handleClick
  const handleClick = (clicked) => {
    setIsClick({ ...initialState, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, isClick, setIsClick, handleClick,screenSize, setScreenSize,currentColor,currentMode,themeSettings,setThemeSettings,setMode,setColor }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};
