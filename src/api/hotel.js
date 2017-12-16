import core, {default_config} from './core';
import {common as commonHelper} from '../helpers';

let config = default_config;
if (commonHelper.isLogin()){
    const account = commonHelper.account();
    config.headers = {
        Authorization: 'Token ' + account.token,
    }
}

const api = core(config);

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


export default {
    add,
    getList,
    getAll,
}