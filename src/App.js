import Page from './Components/page';
import ThemeProvider from './context/theme';

import CountProvider from "./context/count.js";

import Counter from "./Components/counter.js";
import Mirror from "./Components/mirror.js";

function App() {
  return (
    // <ThemeProvider>
    // <Page/>
    // </ThemeProvider>
  <CountProvider>
    <div>
      <Counter />
      <hr />
      <Mirror />
    </div>
  </CountProvider>
  );
}

export default App;
