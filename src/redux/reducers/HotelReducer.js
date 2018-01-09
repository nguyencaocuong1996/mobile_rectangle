import {snippets} from '../actions/HotelAction';


const default_state = {
    listHotel: [],
    listMyHotel: [],
    listMyFavoriteHotel: [],
    listBookedHotel: [],
};

const hotelReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setListHotel:
            return {
                ...state,
                listHotel: action.data,
            };

        case snippets.setMyListHotel:
            return {
                ...state,
                listMyHotel: action.listMyHotel
            };
        case snippets.setListMyFavoriteHotel:
            return {
                ...state,
                listMyFavoriteHotel: action.listMyFavoriteHotel
            };
        case snippets.setListBookedHotel:
            return {
                ...state,
                listMyFavoriteHotel: action.listBookedHotel
            };
        default:
            return state;
    }
};

export default hotelReducer;