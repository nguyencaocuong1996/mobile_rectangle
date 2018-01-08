import {place as placeApi} from '../../api';

export const snippets = {
    setListPlace: 'SET_LIST_PLACE',
};

const placeAction = {
    setListPlace: (data)=>{
        return {
            type: snippets.setListPlace,
            data,
        };
    },
    getListPlace: ()=>{
        return (dispatch=>{
            placeApi.getAll((response)=>{
                dispatch(placeAction.setListPlace(response.data));
            }, (error)=>{
                console.log("GET LIST PLACE ERROR", error.response);
            })
        })
    },
};

export default placeAction;