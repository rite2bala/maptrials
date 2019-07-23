import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// src/ui/theme/index.js

import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#FFA000", contrastText: "#000000" },
  secondary: { main: "#FFE082" }
};
const themeName = "Orange";

const newtheme = createMuiTheme({ palette, themeName });

ReactDOM.render(<App />, document.getElementById("root"));
