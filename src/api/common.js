import api from './core';

const register = ({email, password, first_name, last_name, phone}, r, e) =>{
    api.post('/customer/create/', {data:{
        email,
        password,
        first_name,
        last_name,
        phone
    }},r,e);
};

const login = ({email, password}, r, e) => {
    api.post('/customer/login/', {
        email,
        password
    }, r, e);
};

export default {
    register,
    login
}