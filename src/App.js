import Page from "./Pages/page";
import CounterPage from "./Pages/counterPage";
import ThemeProvider from "./context/theme";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/counterContext" element={<CounterPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
}

export default App;
