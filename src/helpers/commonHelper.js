import localStore from './localStoreHelper';
import reduxStore from '../redux/Store';
import commonAction from '../redux/actions/CommonAction';
import _ from 'lodash';

const commonHelper = {
    checkLogin: async (isLoginCallback, notLoginCallback)=>{
        try {
            localStore.getValue('account').then(account=>{
                if (account === null){
                    notLoginCallback();
                } else {
                    commonHelper.reduxLogin(account);
                    isLoginCallback(account);
                }
            })
        } catch (e){
            notLoginCallback(e);
        }
    },

    isLogin: ()=>{
        return reduxStore.getState().common.account.id !== null;
    },

    storeLogin: (account)=>{
        localStore.setValue('account', account);
    },

    reduxLogin: (account)=>{
        reduxStore.dispatch(commonAction.login(account));
    },

    login: (account)=>{
        commonHelper.storeLogin(account);
        commonHelper.reduxLogin(account);
    },
    logout: ()=>{
        localStore.remove('account');
        reduxStore.dispatch(commonAction.logout());
    },
    account: ()=>{
        return reduxStore.getState().common.account;
    },
    getAccessToken(){
        return commonHelper.account().token;
    },
    formatTimeToHM(time){
        let times = _.split(time, ':');
        return times[0] + ':' + times[1];
    },
    formatDate(date){
        let obj = new Date(date);
        return obj.toLocaleDateString();
    }
};

export default commonHelper;