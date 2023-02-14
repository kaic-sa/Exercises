import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store.js";
import { App } from "./app/App.js";
// Import the store here.
const { state, dispatch } = store;
// Pass state and dispatch props to the <App /> component.
const render = () => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={dispatch} />,
    document.getElementById("root")
  );
};
render();
store.subscribe(render);

// Subscribe render to the store.
