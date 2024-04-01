import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history, store } from "./store";
import DevTools from "./reduxDevtools";

import { App, Home, Foo, Bar } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Routes>
    </Router>
    <DevTools />
  </Provider>,
  document.getElementById("root")
);
