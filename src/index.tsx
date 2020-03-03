import React from "react";
import { render } from "react-dom";
import "./index.css";
import AppBase from "components";
import { Router } from "@reach/router";
import * as serviceWorker from "./serviceWorker";
import AppStateContextProvider from "contexts/AppState";

export type Routes = "/" | "/active" | "/completed";

interface Props {
  path: Routes;
}

const Controller: React.FC<Props> = ({ path }) => <AppBase path={path} />;

const MyApp = () => (
  <AppStateContextProvider>
    <Router>
      <Controller path="/" />
      <Controller path="/active" />
      <Controller path="/completed" />
    </Router>
  </AppStateContextProvider>
);

render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
