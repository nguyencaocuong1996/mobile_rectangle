import {snippets} from '../actions/HotelAction';


const default_state = {
    listHotel: [],
    listMyHotel: [],
};

const hotelReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setData:
            return {
                ...state,
                listHotel: action.data,
            };

        case snippets.setMyListHotel:
            return {
                ...state,
                listMyHotel: action.listMyHotel
            };
        default:
            return state;
    }
};

export default hotelReducer;