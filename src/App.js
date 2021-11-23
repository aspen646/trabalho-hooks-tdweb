import Page from './Components/page';
import ThemeProvider from './context/theme';

function App() {
  return (
    <ThemeProvider>
    <Page/>
    </ThemeProvider>
  );
}

export default App;
