import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

function ReduxWrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<ReduxWrappedApp />, document.getElementById("root"));
