import axios from 'react-native-axios';

const default_config = {
    headers:null,
    timeout:5000,
    baseURL:null};

let getInstance = (config=default_config) => {
    config.baseURL = config.baseURL || 'http://localhost:8000/api/';
    return axios.create(config);
};

const core = (config=default_config)=>({
    post: (path, successCallback, errorCallback, {data={}, headers={}} = {}) =>{
        getInstance(config).request({
            method: 'POST',
            url: path,
            data,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    },
    get: (path, successCallback, errorCallback, {params={}, headers={}} = {}) => {
        getInstance(config).request({
            url: path,
            params,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    }
});

export default core;

