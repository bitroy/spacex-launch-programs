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
            const response = await fetch(API_URL)
            const data = await response.json()
            dispatch(setMissionsLaunchData(data))   
        } catch (error) {
            dispatch(showError())
        }
    }
} 