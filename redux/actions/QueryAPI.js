import {
  FETCH_SUCCESS,
  SHOW_ERROR,
  RESET_OFFSET,
  UPDATE_OFFSET,
} from "./ActionTypes";

export const updateOffset = (data = 0) => ({
  type: UPDATE_OFFSET,
  data,
});

export const resetOffset = (data = 0) => ({
  type: RESET_OFFSET,
  data,
});

export const setMissionsLaunchData = (data = {}) => ({
  type: FETCH_SUCCESS,
  data,
});

export const showError = (data = "") => ({
  type: SHOW_ERROR,
  data,
});

export const fetchMissionsLaunchData = (API_URL) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.error) {
        dispatch(showError("API is Down!"));
      } else {
        dispatch(setMissionsLaunchData(data));
      }
    } catch (error) {
      dispatch(showError());
    }
  };
};
