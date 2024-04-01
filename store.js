import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import DevTools from "./reduxDevtools";

import count from "./reducers/count";
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
    reduxTravelling: true, //To consider history for timeline debugging
  });

const enhancer = compose(
  applyMiddleware(routerMiddleware),
  DevTools.instrument()
);

const store = createStore(
  combineReducers({
    router: routerReducer,
    count: count,
  }),
  enhancer
);

const history = createReduxHistory(store);

export { store, history };
