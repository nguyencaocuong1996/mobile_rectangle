import {snippets} from '../actions/EventAction';


const default_state = {
    listEvent: []
};

const eventReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.setListEvent:
            return {
                ...state,
                listEvent: action.data,
            };
        default:
            return state;
    }
};

export default eventReducer;