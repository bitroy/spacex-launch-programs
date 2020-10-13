import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/RootReducer";

export const makeStore = () =>
  createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper(makeStore);
