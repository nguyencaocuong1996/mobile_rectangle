import core, {default_config} from './core';
import {common as commonHelper} from '../helpers';


const api = core(default_config);

const add = ({name, address, phone, star, description}, r, e) =>{
    api.post('restaurant/create/',r,e, {data:{
        name,
        address,
        phone,
        star,
        description,
        owner : commonHelper.account().id,
        services: [],
    }});
};

const addFavorite = ({customer, restaurant}, r, e) =>{
    api.post('restaurant/add-favorite/',r,e, {data:{
        customer,
        restaurant
    }});
};

const getList = (r, e) => {
    api.get('restaurant/', r, e);
};

const getAll = (r, e)=>{
    api.get('restaurant/all', r ,e, {
        headers: {
            'Authorization': 'Token 79e60238fe252fcd2774040d03000c09f3ec7fba',
        }
    });
};

const getAround = ({lat, long, radius}, r , e) =>{
    api.get('restaurant/around', r, e, {
        params: {
            lat,
            long,
            radius
        }
    });
};

const getByService = ({id}, r, e) => {
    api.get('restaurant/by-service', r, e, {
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
    addFavorite,
    getList,
    getAll,
    getListMyRestaurant,
    getListMyFavoriteRestaurant,
    getListBookedRestaurant
}