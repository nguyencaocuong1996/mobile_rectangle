import {snippets} from '../actions/CommonAction';


const default_state = {
    account: {
        id: null,
        name: null,
        token: null,
        email: null,
    }
};

const commonReducer = (state=default_state, action) => {
    switch (action.type){
        case snippets.login:
            console.log("reducer action", action);
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

export default commonReducer;