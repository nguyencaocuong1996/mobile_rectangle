import {snippets} from '../actions/HotelAction';


const default_state = {
    listHotel: [],
};

const hotelReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setData:
            return {
                ...state,
                listHotel: action.data,
            };
        default:
            return state;
    }
};

export default hotelReducer;