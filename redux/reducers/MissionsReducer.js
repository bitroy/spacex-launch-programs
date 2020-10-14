import { HYDRATE } from "next-redux-wrapper";
import {
  FETCH_SUCCESS,
  SHOW_ERROR,
  SET_LAUNCH_FLAG,
  SET_LAND_FLAG,
  SET_LAUNCH_YEAR,
  RESET_OFFSET,
  UPDATE_OFFSET,
} from "../actions/ActionTypes";

const initialMissionState = {
  limit: 8,
  offset: 0,
  lazyloading: true,
  loading: true,
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
        loading: false,
        error: "",
        missions: action.payload.missions.missions,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        missions: [...state.missions, ...action.data],
        lazyloading: action.data.length < state.limit ? false : true,
      };
    case UPDATE_OFFSET:
      return {
        ...state,
        offset: action.data,
      };
    case RESET_OFFSET:
      return {
        ...state,
        offset: 0,
        missions: [],
        lazyloading: true,
      };
    case SHOW_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data ? action.data : "Something Went Wrong!",
        missions: [],
      };
    case SET_LAUNCH_FLAG:
      return {
        ...state,
        launch_success: action.data,
      };
    case SET_LAND_FLAG:
      return {
        ...state,
        land_success: action.data,
      };
    case SET_LAUNCH_YEAR:
      return {
        ...state,
        launch_year: action.data,
      };
    default:
      return state;
  }
};

export default missionReducer;
