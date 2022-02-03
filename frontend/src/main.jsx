import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TestTemplatePage from "./pages/TestTemplatesPage/TestTemplatePage";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";
import TemplatePage from "./pages/TemplatePage/TemplatePage";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route element={<App />}>
            <Route
              path="/home"
              element={<TemplatePage></TemplatePage>}
            />
            <Route
              path="/status"
              element={<h1 style={{ color: "white" }}>Status</h1>}
            />
            <Route
              path="/forms"
              element={<h1 style={{ color: "white" }}>Completed Forms</h1>}
            />
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
