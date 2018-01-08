import {combineReducers} from 'redux';
import common from './CommonReducer';
import hotel from './HotelReducer';
import restaurant from './RestaurantReducer';
import place from './PlaceReducer';

const reducer = combineReducers({
    common,
    hotel,
    restaurant,
    place,
});

export default reducer;