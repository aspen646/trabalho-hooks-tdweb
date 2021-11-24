import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import CountProvider from "../context/count.js";
import { ThemeContext, themes } from '../context/theme';

import Counter from "../Components/counter.js";
import Mirror from "../Components/mirror.js";

function CounterPage() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme(){
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <CountProvider>
            <div style={theme}>
                <Counter />
                <hr />
                <Mirror />
                <hr />
                <button onClick={toggleTheme}>Trocar Tema</button>
                <hr />
                <Link to="/">Ir para tela principal</Link>
            </div>
        </CountProvider>
    );
}

export default CounterPage;