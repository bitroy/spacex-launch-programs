import {
  SHOW_ERROR,
  MISSIONS_DATA_REQUEST,
  FILTERED_MISSIONS_DATA_REQUEST,
} from "./ActionTypes";

export const fetchMissionsData = async (API_URL) => {
  try {
    const apiURL = API_URL ?? process.env.NEXT_PUBLIC_SPACEX_API_URL;
    const response = await fetch(apiURL);
    const data = response.json();
    return data;
  } catch (error) {
    dispatch(showError("API is Down!"));
  }
};

export const requestMissionsData = () => ({
  type: MISSIONS_DATA_REQUEST,
});

export const requestFilteredMissionsData = (apiURL) => ({
  type: FILTERED_MISSIONS_DATA_REQUEST,
  payload: apiURL,
});

export const showError = (data = "") => ({
  type: SHOW_ERROR,
  data,
});
