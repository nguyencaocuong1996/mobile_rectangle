import {snippets} from '../actions/PlaceAction';


const default_state = {
    listPlace: []
};

const placeReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setListPlace:
            return {
                ...state,
                listPlace: action.data,
            };
        default:
            return state;
    }
};

export default placeReducer;