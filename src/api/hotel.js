import core, {default_config} from './core';
import {common as commonHelper} from '../helpers';

const api = core(default_config);

const add = ({name, address, phone, star, price, description}, r, e) =>{
    api.post('hotel/create/', r, e,{data:{
        name,
        address,
        star,
        price,
        description,
        phone,
        owner : commonHelper.account().id,
        services: [],
    }});
};

const addFavorite = ({customer, hotel}, r, e) =>{
    api.post('hotel/add-favorite/',r,e, {data:{
        customer,
        hotel
    }});
};

const bookHotel = ({customer, hotel, bookedAt}, r, e) =>{
    api.post('hotel/book/',r,e, {data:{
        customer,
        hotel,
        bookedAt,
    }});
};

const getList = (r, e) => {
    api.get('hotel/', r, e);
};

const getAll = (r, e)=>{
    api.get('hotel/all/', r ,e);
};

const getAround = ({lat, long, radius}, r , e) =>{
    api.get('hotel/around/', r, e, {
        params: {
            lat,
            long,
            radius
        }
    });
};

const getByService = ({id}, r, e) => {
    api.get('hotel/by-service/', r, e, {
        params: {
            id,
        }
    });
};

const getListMyHotel = (r, e)=>{
    const token = commonHelper.getAccessToken();
    console.log(token);
    api.get('hotel/me/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

const getListMyFavoriteHotel = (r, e)=>{
    const token = commonHelper.getAccessToken();
    console.log(token);
    api.get('hotel/favorites/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

const getListBookedHotel = (r, e)=>{
    const token = commonHelper.getAccessToken();
    console.log("listbookedtoken", token);
    api.get('hotel/list-booked/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

export default {
    add,
    bookHotel,
    getList,
    getAll,
    getListMyHotel,
    getListMyFavoriteHotel,
    getListBookedHotel,
    addFavorite,
}