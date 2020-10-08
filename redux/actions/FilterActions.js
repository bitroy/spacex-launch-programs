import { SET_LAUNCH_FLAG, SET_LAND_FLAG, SET_LAUNCH_YEAR } from "./ActionTypes";

export const setLaunchSuccessFlag = (data = false) => ({
  type: SET_LAUNCH_FLAG,
  data,
});

export const setLandSuccessFlag = (data = false) => ({
  type: SET_LAND_FLAG,
  data,
});

export const setLaunchYearFlag = (data = false) => ({
  type: SET_LAUNCH_YEAR,
  data,
});
