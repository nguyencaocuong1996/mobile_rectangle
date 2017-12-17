import {snippets} from '../actions/RestaurantAction';


const default_state = {
    listRestaurant: [],
    listMyRestaurant: [],
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
        default:
            return state;
    }
};

export default restaurantReducer;