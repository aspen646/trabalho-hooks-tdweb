import React,{ createContext, useState } from 'react';

export const ThemeContext = createContext();

export const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee",
    margin: "0px",
    padding: "0px",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
    margin: "0px",
    padding: "0px",
  }
};

export default function ThemeProvider({ children }){

  const [theme, setTheme] = useState(themes.light);

  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}