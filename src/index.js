import React from "react";
import ReactDOM from "react-dom";
import './styles.css'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
