import { combineReducers } from 'redux';

import homeReducer from '../pages/home/home.reducer';
import mediaReducer from '../pages/media/media.reducer';

export default combineReducers({
    homeReducer,
    mediaReducer
});
