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
    api.get('hotel/all', r ,e);
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

const getListMyHotel = (r, e)=>{
    const token = commonHelper.getAccessToken();
    console.log(token);
    api.get('hotel/me/', r, e, {
        headers:{
            'Authorization': 'Token '.concat(token),
        }
    })
};

export default {
    add,
    getList,
    getAll,
    getListMyHotel,
}