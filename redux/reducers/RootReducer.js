import missionReducer from './MissionsReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	missions: missionReducer,
});

export default rootReducer;