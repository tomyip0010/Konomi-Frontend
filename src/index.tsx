import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Main";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
