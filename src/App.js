import Page from "./Pages/page";
import CounterPage from "./Pages/counterPage";
import TestPage from "./Pages/testPage";
import MyThemeProvider from "./context/theme";
import MuiThemeProvider from "./context/muiTheme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <MuiThemeProvider>
        <MyThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Page />} />
              <Route path="/counterContext" element={<CounterPage />} />
              <Route path="/testPage" element={<TestPage />} />
            </Routes>
          </Router>
        </MyThemeProvider>
      </MuiThemeProvider>
  );
}

export default App;
