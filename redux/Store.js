import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./reducers/RootReducer";
import rootSaga from "./sagas/rootSaga";

export const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const middleWare =
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(sagaMiddleWare))
      : applyMiddleware(sagaMiddleWare);
  const store = createStore(rootReducer, middleWare);
  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore);
