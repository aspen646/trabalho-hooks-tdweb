import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components';

import Page from './Page';
import ThemeSwitcher from './components/ThemeSwitcher';

import * as themes from './styles/themes';

import ThemeContext from './styles/themes/context';

function App () {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);

  };

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme}/>
      <ThemeContext.Consumer>
        {theme => (
          <ThemeProvider theme={theme}>
           <Page/>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}

export default App;
