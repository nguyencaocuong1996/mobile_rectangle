import core from './core';


api = core();

const register = ({email, password, first_name, last_name, phone}, r, e) =>{
    api.post('/customer/create/', {data:{
        email,
        password,
        first_name,
        last_name,
        phone
    }},r,e);
};

const login = ({username, password}, r, e) => {
    api.post('/customer/login/', {data: {
        username,
        password
    }}, r, e);
};

export default {
    register,
    login
}