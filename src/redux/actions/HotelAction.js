import {hotel as hotelApi} from '../../api';

export const snippets = {
    setData: 'SET_DATA',
};

const hotelAction = {
    setData: (data)=>{
        return {
            type: snippets.setData,
            data,
        };
    },
    getAll: ()=>{
        return (dispatch=>{
            hotelApi.getAll((response)=>{
                dispatch(hotelAction.setData(response.data));
            }, (error)=>{
                console.log("GET LIST ALL HOTEL ERROR", error);
            });
        });
    }
};

export default hotelAction;