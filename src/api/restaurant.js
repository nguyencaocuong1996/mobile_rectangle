import core, {default_config} from './core';
import {common as commonHelper} from '../helpers';


const api = core(default_config);

const add = ({name, address, star, price, description}, r, e) =>{
    api.post('customer/create/', {data:{
        name,
        address,
        star,
        price,
        description
    }},r,e);
};

const getList = (r, e) => {
    api.get('hotel/', r, e);
};

const getAll = (r, e)=>{
    api.get('hotel/all', r ,e, {
        headers: {
            'Authorization': 'Token 79e60238fe252fcd2774040d03000c09f3ec7fba',
        }
    });
};

const getAround = ({lat, long, radius}, r , e) =>{
    api.get('hotel/around', r, e, {
        params: {
            lat,
            long,
            radius
        }
    });
};

const getByService = ({id}, r, e) => {
    api.get('hotel/by-service', r, e, {
        params: {
            id,
        }
    });
};

const getListMyRestaurant = (r, e)=>{
    const token = commonHelper.getAccessToken();
    api.get('restaurant/me/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

const getListMyFavoriteRestaurant = (r, e)=>{
    const token = commonHelper.getAccessToken();
    api.get('restaurant/favorites/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

const getListBookedRestaurant = (r, e)=>{
    const token = commonHelper.getAccessToken();
    api.get('restaurant/list-booked/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

export default {
    add,
    getList,
    getAll,
    getListMyRestaurant,
    getListMyFavoriteRestaurant,
    getListBookedRestaurant
}