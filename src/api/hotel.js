import core from './core';


api = core();

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
    api.get('hotel/', r, e, {
        headers: {
            Authorization: 'Token 79e60238fe252fcd2774040d03000c09f3ec7fba'
        }
    });
};

const getAll = (r, e)=>{
    api.get('hotel/all', r ,e);
};


export default {
    add,
    getList,
    getAll,
}