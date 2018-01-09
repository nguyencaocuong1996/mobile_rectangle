import {event as eventApi} from '../../api';

export const snippets = {
    setListEvent: 'SET_LIST_EVENT',
};

const eventAction = {
    setListEvent: (data)=>{
        return {
            type: snippets.setListEvent,
            data,
        };
    },
    getListEvent: ()=>{
        return (dispatch=>{
            eventApi.getAll((response)=>{
                console.log("list event", response);
                dispatch(eventAction.setListEvent(response.data));
            }, (error)=>{
                console.log("event err", error);
                console.log("GET LIST EVENT ERROR", error.response);
            })
        })
    },
};

export default eventAction;