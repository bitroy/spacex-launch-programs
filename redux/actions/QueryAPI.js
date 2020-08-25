import axios from 'axios'

import {
    FETCH_SUCCESS,
    SHOW_ERROR,
} from './ActionTypes'

export const setMissionsLaunchData = (data = {}) => ({
    type: FETCH_SUCCESS,
    data
});

export const showError = (data = {}) => ({
    type: SHOW_ERROR,
    data
});

export const fetchMissionsLaunchData = (API_URL) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(API_URL)
            dispatch(setMissionsLaunchData(response.data))   
        } catch (error) {
            dispatch(showError())
        }
    }
} 