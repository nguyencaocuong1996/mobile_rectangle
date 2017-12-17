import {combineReducers} from 'redux';
import common from './CommonReducer';
import hotel from './HotelReducer';

const reducer = combineReducers({
    common,
    hotel,
});

export default reducer;