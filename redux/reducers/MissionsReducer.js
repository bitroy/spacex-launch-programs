import { HYDRATE } from "next-redux-wrapper";
import {
  FETCH_SUCCESS,
  SHOW_ERROR,
  SET_LAUNCH_FLAG,
  SET_LAND_FLAG,
  SET_LAUNCH_YEAR,
  SET_MISSIONS_DATA,
} from "../actions/ActionTypes";

const initialMissionState = {
  error: "",
  missions: [],
  launch_success: null,
  land_success: null,
  launch_year: null,
};

const missionReducer = (state = initialMissionState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        error: "",
        missions: [...action.payload.missionsData.missions],
      };
    case SET_MISSIONS_DATA:
      return {
        ...state,
        missions: [...action.payload],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        missions: [...state.missions, ...action.data],
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: action.data ? action.data : "Something Went Wrong!",
        missions: [],
      };
    case SET_LAUNCH_FLAG:
      return {
        ...state,
        missions: [],
        launch_success: action.data,
      };
    case SET_LAND_FLAG:
      return {
        ...state,
        missions: [],
        land_success: action.data,
      };
    case SET_LAUNCH_YEAR:
      return {
        ...state,
        missions: [],
        launch_year: action.data,
      };
    default:
      return state;
  }
};

export default missionReducer;
