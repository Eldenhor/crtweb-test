import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { store } from "./store";
import { mockServer } from "./services/mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

mockServer();

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <App/>
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
