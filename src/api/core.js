import axios from 'react-native-axios';

let core = ({headers=null, timeout=5000, base_url=null}={}) => {
    base_url = base_url || 'http://localhost:8000/api';
    let config = {
        baseURL: base_url,
        timeout,
        headers,
    };
    console.log(config);
    return axios.create({
        baseURL: 'http://localhost:8000/api'
    });
};

const api = ()=>({
    post: (path, {data={}, headers={}} = {}, successCallback, errorCallback) =>{
        core().request({
            method: 'POST',
            url: path,
            data,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    },
    get: (path, {params={}, headers={}} = {}, successCallback, errorCallback) => {
        core().request({
            url: path,
            params,
            headers,
        }).then(response => successCallback(response)).catch(error => errorCallback(error));
    }
});

export default api;

