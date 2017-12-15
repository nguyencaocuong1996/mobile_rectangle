import axios from 'react-native-axios';
import {Platform} from 'react-native';

const base_url = Platform.OS === 'android' ? 'http://10.0.2.2:8000/api/' : 'http://localhost:8000/api/';

const default_config = {
    headers:null,
    timeout:5000,
    baseURL:null};

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

