import React, {useContext} from 'react';

import CountProvider from "../context/count.js";
import { ThemeContext, themes } from '../context/theme';
import { MuiThemeContext, muiThemes } from "../context/muiTheme";

import Counter from "../Components/counter";
import Mirror from "../Components/mirror.js";
import ResponsiveAppBar from '../Components/responsiveAppBar'

import Box from '@mui/material/Box';

function Natal() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { muiTheme, setMuiTheme } = useContext(MuiThemeContext);
    function toggleTheme(){
        setTheme(theme === themes.dark ? themes.light : themes.dark);
        setMuiTheme(muiTheme === muiThemes.dark ? muiThemes.light : muiThemes.dark);
    }

    return (
        <>
            <ResponsiveAppBar />
            
            
            <CountProvider>
            <Box className="container" 
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary'
            }}></Box>
            </CountProvider>
        </>
    );
}

export default Natal;