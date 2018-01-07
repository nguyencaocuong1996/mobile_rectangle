import {snippets} from '../actions/RestaurantAction';


const default_state = {
    listRestaurant: [],
    listMyRestaurant: [],
    listMyFavoriteRestaurant: [],
    listBookedRestaurant: []
};

const restaurantReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setData:
            return {
                ...state,
                listRestaurant: action.data,
            };

        case snippets.setMyListRestaurant:
            return {
                ...state,
                listMyRestaurant: action.listMyRestaurant
            };
        case snippets.setListMyFavoriteRestaurant:
            return {
                ...state,
                listMyFavoriteRestaurant: action.listMyFavoriteRestaurant
            };
        case snippets.setListBookedRestaurant:
            return {
                ...state,
                listBookedRestaurant: action.listBookedRestaurant
            };
        default:
            return state;
    }
};

export default restaurantReducer;