import {AsyncStorage} from 'react-native';

const commonHelper = {
    checkLogin: (isLoginCallback, notLoginCallback)=>{
        console.log("check login");
        try {
            AsyncStorage.getItem('account').then(isLoginCallback);
        } catch (e){
            notLoginCallback(e);
        }
    },
    fff: ()=>{
        alert("ccc");
    }
};

export default commonHelper;