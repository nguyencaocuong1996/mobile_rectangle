import {combineReducers} from 'redux';
import common from './CommonReducer';
import hotel from './HotelReducer';
import restaurant from './RestaurantReducer';

const reducer = combineReducers({
    common,
    hotel,
    restaurant,
});

export default reducer;