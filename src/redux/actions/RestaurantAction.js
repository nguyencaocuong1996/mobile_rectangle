import {restaurant as restaurantApi} from '../../api';
import commonHelper from "../../helpers/commonHelper";

export const snippets = {
    setListRestaurant: 'SET_RESTAURANT_DATA',
    setMyListRestaurant: 'SET_MY_LIST_RESTAURANT',
    setListMyFavoriteRestaurant: 'SET_LIST_MY_FAVORITE_RESTAURANT',
    setListBookedRestaurant: 'SET_LIST_BOOKED_RESTAURANT'
};

const restaurantAction = {
    setListRestaurant: (data)=>{
        return {
            type: snippets.setListRestaurant,
            data,
        };
    },
    setMyListRestaurant: (listMyRestaurant) => {
        return {
            type: snippets.setMyListRestaurant,
            listMyRestaurant,
        }
    },
    setListMyFavoriteRestaurant: (listMyFavoriteRestaurant) => {
        return {
            type: snippets.setListMyFavoriteRestaurant,
            listMyFavoriteRestaurant,
        }
    },
    setListBookedRestaurant: (listBookedRestaurant) => {
        return {
            type: snippets.setListBookedRestaurant,
            listBookedRestaurant,
        }
    },
    getAll: ()=>{
        return (dispatch=>{
            restaurantApi.getAll((response)=>{
                console.log("restaurant response", response);
                dispatch(restaurantAction.setListRestaurant(response.data));
            }, (error)=>{
                console.log("GET LIST ALL RESTAURANT ERROR", error);
            });
        });
    },
    getListMyRestaurant: ()=>{
        return (dispatch=>{
            restaurantApi.getListMyRestaurant((response)=>{
                dispatch(restaurantAction.setMyListRestaurant(response.data));
            }, (error)=>{
                console.log("GET MY RESTAURANT ERROR", error.response);
            })
        })
    },
    getListMyFavoriteRestaurant: ()=>{
        return (dispatch=>{
            restaurantApi.getListMyFavoriteRestaurant((response)=>{
                console.log("LIST FAVORITE RESTAURANT ", response.data);
                dispatch(restaurantAction.setListMyFavoriteRestaurant(response.data));
            }, (error)=>{
                console.log("GET MY FAVORITE RESTAURANT ERROR", error.response);
            })
        })
    },
    getListBookedRestaurant: ()=>{
        return (dispatch=>{
            restaurantApi.getListBookedRestaurant((response)=>{
                dispatch(restaurantAction.setListBookedRestaurant(response.data));
            }, (error)=>{
                console.log("GET MY FAVORITE RESTAURANT ERROR", error.response);
            })
        })
    },
    addFavorite: (restaurantId)=>{
        return (dispatch=>{
            let data = {
                customer: commonHelper.account().id,
                restaurant: restaurantId
            };
            console.log("data", data);
            restaurantApi.addFavorite(data, (response)=>{
                console.log("Add favorite restaurant response", response);
                dispatch(restaurantAction.getListMyFavoriteRestaurant());
                alert("Thêm thành công.");
            }, (error)=>{
                alert("Bạn đã thêm nhà hàng này rồi.");
            });
        })
    }
};

export default restaurantAction;