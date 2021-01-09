import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

export const makeStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );

  store.sagaTask = sagaMiddleWare.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore);
