import React, {useContext} from 'react';

import CountProvider from "../context/count.js";
import { ThemeContext, themes } from '../context/theme';
import { MuiThemeContext, muiThemes } from "../context/muiTheme";

import Counter from "../Components/counter.js";
import Mirror from "../Components/mirror.js";
import ResponsiveAppBar from '../Components/responsiveAppBar'

import Button from '@mui/material/Button';

function CounterPage() {
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
                <div style={theme}>
                    <Button>Well</Button>
                    <Counter />
                    <hr />
                    <Mirror />
                    <hr />
                    <button onClick={toggleTheme}>Trocar Tema</button>
                    <hr />
                </div>
            </CountProvider>
        </>
    );
}

export default CounterPage;