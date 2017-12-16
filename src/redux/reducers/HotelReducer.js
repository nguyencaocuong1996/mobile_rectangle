import {snippets} from '../actions/HotelAction';


const default_state = {
    listHotel: [],
};

const hotelReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.getAll:
            return {
                ...state,
                account:{
                    id: action.id,
                    name: action.name,
                    token: action.token,
                    email: action.email,
                }
            };

        case snippets.logout:
            return {
                ...state,
                account: default_state.account
            };
        default:
            return state;
    }
};

export default hotelReducer;