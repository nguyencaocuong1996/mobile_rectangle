import {AsyncStorage} from 'react-native';
import _ from 'lodash';


const localStore = {
    setValue: async (key, value) =>{
        if (!_.isString(value)){
            try {
                value = JSON.stringify(value)
            } catch (e){
                throw Error("Value must be string or can stringify!");
            }
        }
        try {
            return await AsyncStorage.setItem(key, value);
        } catch (e){
            throw Error("Can't connect to localStore");
        }

    },

    getValue: async (key)=>{
        if (!_.isString(key)){
            throw Error("Key must be a string!");
        }
        try {
            let res = await AsyncStorage.getItem(key);
            let data = null;
            try {
                data = await JSON.parse(res);
            } catch (e){
                data = res;
            }
            return data;
        } catch (e){
            throw Error("Key not exists or can't connect to local store!");
        }
    },

    remove: async (key)=>{
        await AsyncStorage.removeItem(key, (error)=>{
            console.log(error);
        });
    }
};

export default localStore;