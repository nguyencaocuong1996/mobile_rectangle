import {combineReducers} from 'redux';
import common from './CommonReducer';
import hotel from './HotelReducer';
import restaurant from './RestaurantReducer';
import place from './PlaceReducer';
import event from './EventReducer';

const reducer = combineReducers({
    common,
    hotel,
    restaurant,
    place,
    event,
});

export default reducer;