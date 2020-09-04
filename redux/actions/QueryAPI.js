import {
    FETCH_SUCCESS,
    SHOW_ERROR,
    RESET_OFFSET
} from './ActionTypes'

export const resetOffset = (data = 0) => ({
    type: RESET_OFFSET,
    data
})

export const setMissionsLaunchData = (data = {}) => ({
    type: FETCH_SUCCESS,
    data
})

export const showError = (data = '') => ({
    type: SHOW_ERROR,
    data
})

export const fetchMissionsLaunchData = (API_URL) => {
    return async (dispatch, getState) => {
        try {
            const { offset } = getState().missions
            const URL = `${API_URL}&offset=${offset}`
            const response = await fetch(URL);
            const data = await response.json()
            if(data.error) {
                dispatch(showError('API is Down!'))
            } else {
                dispatch(setMissionsLaunchData(data)) 
            }  
        } catch (error) {
            dispatch(showError())
        }
    }
}
