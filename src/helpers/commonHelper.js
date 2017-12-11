import localStore from './localStoreHelper';

const commonHelper = {
    checkLogin: async (isLoginCallback, notLoginCallback)=>{
        console.log("check login");
        try {
            localStore.getValue('account').then(account=>{
                if (account === null){
                    notLoginCallback();
                } else {
                    isLoginCallback(account);
                }
            })
        } catch (e){
            notLoginCallback(e);
        }
    },

    setLogin: (account)=>{
        localStore.setValue('account', account);
    },


};

export default commonHelper;