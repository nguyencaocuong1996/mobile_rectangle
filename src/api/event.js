import core, {default_config} from './core';


const api = core(default_config);

const getList = (r, e) => {
    api.get('event/', r, e);
};

const getAll = (r, e)=>{
    api.get('event/all/', r ,e);
};

const getAround = ({lat, long, radius}, r , e) =>{
    api.get('place/around/', r, e, {
        params: {
            lat,
            long,
            radius
        }
    });
};

export default {
    getList,
    getAll,
}