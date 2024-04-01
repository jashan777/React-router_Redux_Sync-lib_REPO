import { createDevTools } from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as reducers from "./reducers";
import { App, Home, Foo, Bar } from "./components";

const reducer = combineReducers({
  ...reducers,
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="foo" element={<Foo />} />
          <Route path="bar" element={<Bar />} />
        </Route>
      </Routes>
      <DevTools />
    </Router>
  </Provider>,
  document.getElementById("root")
);
