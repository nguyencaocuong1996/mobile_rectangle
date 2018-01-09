import {hotel as hotelApi} from '../../api';
import commonHelper from "../../helpers/commonHelper";

export const snippets = {
    setListHotel: 'SET_HOTEL_DATA',
    setMyListHotel: 'SET_MY_LIST_HOTEL',
    setListMyFavoriteHotel: 'SET_LIST_MY_FAVORITE_HOTEL',
    setListBookedHotel: 'SET_LIST_BOOKED_HOTEL',
};

const hotelAction = {
    setListHotel: (data)=>{
        return {
            type: snippets.setListHotel,
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
                dispatch(hotelAction.setListHotel(response.data));
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
                dispatch(hotelAction.setListMyFavoriteHotel(response.data));
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
    },
    addFavorite: (hotelId)=>{
        return (dispatch=>{
            let data = {
                customer: commonHelper.account().id,
                hotel: hotelId
            };
            hotelApi.addFavorite(data, (response)=>{
                console.log("Add favorite response", response);
                dispatch(hotelAction.getListMyFavoriteHotel());
                alert("Thêm thành công.");
            }, (error)=>{
                alert("Bạn đã thêm khách sạn này rồi.");
            });
        })
    }
};

export default hotelAction;