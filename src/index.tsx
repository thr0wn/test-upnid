import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Press Start 2P';
    src: url('./assets/fonts/PressStart2P-Regular.ttf');
  }

  body {
    font-family: 'Press Start 2P', Arial;
    overflow: hidden;
    padding: 0px;
    margin: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
