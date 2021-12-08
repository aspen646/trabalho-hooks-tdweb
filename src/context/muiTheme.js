import React, { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const MuiThemeContext = createContext();

export const muiThemes = {
  dark: createTheme({
    palette: {
      mode: "dark",
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
    },
  }),
};

export default function MuiThemeProvider({ children }) {
  const [muiTheme, setMuiTheme] = useState(muiThemes.dark);

  return (
    <MuiThemeContext.Provider value={{ muiTheme, setMuiTheme }}>
        <ThemeProvider theme={muiTheme}>
            {children}
        </ThemeProvider>
    </MuiThemeContext.Provider>
  );
}
