import "./App.css";
import CommonLayout from "./components/layouts/CommonLayout";
import LandingPage from "./pages/LandingPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
