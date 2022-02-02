import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestTemplatePage from "./pages/TestTemplatesPage/TestTemplatePage";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/testTemplates" element={<TestTemplatePage />} />
            <Route
              path="/:templateId/:templateName"
              element={<ShowTemplatePage />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
