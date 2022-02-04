import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ShowTemplatePage from "./pages/ShowTemplatePage/ShowTemplatePage";
import CompletedFormsPage from "./pages/CompletedFormsPage/CompletedFormsPage";
import TemplatePage from "./pages/TemplatePage/TemplatePage";
import StatusPage from "./pages/StatusPage/StatusPage";
import LoginPage from "./pages/LoginPage/LoginPage";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<App />}>
            <Route path="/forms" element={<CompletedFormsPage />} />
            <Route
              path="/home"
              element={<h1 style={{ color: "white" }}>Homepage</h1>}
            />
            <Route path="/status" element={<StatusPage />} />
            <Route
              path="/:templateId/:templateName"
              element={<ShowTemplatePage />}
            />
            <Route path="/templates" element={<TemplatePage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
