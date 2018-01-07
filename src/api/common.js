import core from './core';
import commonHelper from "../helpers/commonHelper";


api = core();

const register = ({email, password, first_name, last_name, phone}, r, e) =>{
    api.post('customer/create/', {data:{
        email,
        password,
        first_name,
        last_name,
        phone
    }},r,e);
};

const login = ({username, password}, successCallback, errorCallback) => {
    let success = (response)=>{
        commonHelper.login(response);
        successCallback(response);
    };
    api.post('customer/login/', success, errorCallback, {data: {
        username,
        password
    }});
};

export default {
    register,
    login
}