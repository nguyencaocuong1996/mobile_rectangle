import {restaurant as restaurantApi} from '../../api';

export const snippets = {
    setData: 'SET_DATA',
    setMyListRestaurant: 'SET_MY_LIST_RESTAURANT',
};

const restaurantAction = {
    setData: (data)=>{
        return {
            type: snippets.setData,
            data,
        };
    },
    setMyLisRestaurant: (listMyRestaurant) => {
        return {
            type: snippets.setMyListRestaurant,
            listMyRestaurant,
        }
    },
    getAll: ()=>{
        return (dispatch=>{
            restaurantApi.getAll((response)=>{
                dispatch(restaurantAction.setData(response.data));
            }, (error)=>{
                console.log("GET LIST ALL RESTAURANT ERROR", error);
            });
        });
    },
    getListMyRestaurant: ()=>{
        return (dispatch=>{
            restaurantApi.getListMyRestaurant((response)=>{
                dispatch(restaurantAction.setMyLisRestaurant(response.data));
            }, (error)=>{
                console.log("GET MY RESTAURANT ERROR", error.response);
            })
        })
    }
};

export default restaurantAction;