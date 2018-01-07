import {hotel as hotelApi} from '../../api';

export const snippets = {
    setData: 'SET_DATA',
    setMyListHotel: 'SET_MY_LIST_HOTEL',
    setListMyFavoriteHotel: 'SET_LIST_MY_FAVORITE_HOTEL',
    setListBookedHotel: 'SET_LIST_BOOKED_HOTEL',
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
    setListMyFavoriteHotel: (listMyFavoriteHotel) => {
        return {
            type: snippets.setListMyFavoriteHotel,
            listMyFavoriteHotel,
        }
    },
    setListBookedHotel: (listMyFavoriteHotel) => {
        return {
            type: snippets.setListBookedHotel,
            listMyFavoriteHotel,
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
    },
    getListMyFavoriteHotel: ()=>{
        return (dispatch=>{
            hotelApi.getListMyFavoriteHotel((response)=>{
                dispatch(hotelAction.setMyListHotel(response.data));
            }, (error)=>{
                console.log("GET MY FAVORITE HOTEL ERROR", error.response);
            })
        })
    },
    getListBookedHotel: ()=>{
        return (dispatch=>{
            hotelApi.getListBookedHotel((response)=>{
                dispatch(hotelAction.setListBookedHotel(response.data));
            }, (error)=>{
                console.log("GET MY FAVORITE HOTEL ERROR", error.response);
            })
        })
    }
};

export default hotelAction;