import axios from 'react-native-axios';
import {Platform} from 'react-native';

const base_url = Platform.OS === 'android' ? 'http://10.0.2.2:8000/api/' : 'http://localhost:8000/api/';
//const base_url = 'http://70eca347.ngrok.io/api/';
const token = 'Token '.concat('79e60238fe252fcd2774040d03000c09f3ec7fba');

export const default_config = {
    // headers:null,
    timeout:5000,
    baseURL:null,
    headers: null,
};

let getInstance = (config=default_config) => {
    config.baseURL = config.baseURL || base_url;
    return axios.create(config);
};

const core = (config=default_config)=>({
    post: (path, successCallback, errorCallback, {data={}, headers={}} = {}) =>{
        getInstance(config).request({
            method: 'POST',
            url: path,
            data,
            headers,
        }).then(response => {
            console.log("Post success response", response);
            if (response.status === 200 || response.status === 201){
                successCallback(response.data)
            } else {
                errorCallback(response)
            }

        }).catch(error => {
            console.log("Post response error", error.response);
            errorCallback(error.response)
        });
    },
    get: (path, successCallback, errorCallback, {params={}, headers={}} = {}) => {
        getInstance(config).request({
            method: 'GET',
            url: path,
            params,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    }
});

export default core;

