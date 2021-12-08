import Page from "./Pages/page";
import Natal from "./Pages/natal";
import Examples from "./Pages/examples";
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
              <Route path="/natal" element={<Natal />} />
              <Route path="/exemplos" element={<Examples />} />
            </Routes>
          </Router>
        </MyThemeProvider>
      </MuiThemeProvider>
  );
}

export default App;
