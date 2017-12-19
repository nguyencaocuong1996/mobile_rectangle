import {hotel as hotelApi} from '../../api';

export const snippets = {
    setData: 'SET_DATA',
    setMyListHotel: 'SET_MY_LIST_HOTEL',
};

const hotelAction = {
    setData: (data)=>{
        return {
            type: snippets.setData,
            data,
        };
    },
    setMyListHotel: (listMyHotel) => {
        return {
            type: snippets.setMyListHotel,
            listMyHotel,
        }
    },
    getAll: ()=>{
        return (dispatch=>{
            hotelApi.getAll((response)=>{
                dispatch(hotelAction.setData(response.data));
            }, (error)=>{
                console.log("GET LIST ALL HOTEL ERROR", error);
            });
        });
    },
    getListMyHotel: ()=>{
        return (dispatch=>{
            hotelApi.getListMyHotel((response)=>{
                dispatch(hotelAction.setMyListHotel(response.data));
            }, (error)=>{
                console.log("GET MY HOTEL ERROR", error.response);
            })
        })
    }
};

export default hotelAction;