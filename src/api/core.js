import axios from 'react-native-axios';

let getInstance = ({headers=null, timeout=5000, base_url=null}={}) => {
    base_url = base_url || 'http://localhost:8000/api';
    let config = {
        baseURL: base_url,
        timeout,
        headers,
    };
    return axios.create(config);
};

const core = ()=>({
    post: (path, {data={}, headers={}} = {}, successCallback, errorCallback) =>{
        getInstance().request({
            method: 'POST',
            url: path,
            data,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    },
    get: (path, {params={}, headers={}} = {}, successCallback, errorCallback) => {
        getInstance().request({
            url: path,
            params,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    }
});

export default core;

