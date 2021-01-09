import { combineReducers } from "redux";
import missionReducer from "./MissionsReducer";

const rootReducer = combineReducers({
  missionsData: missionReducer,
});

export default rootReducer;
