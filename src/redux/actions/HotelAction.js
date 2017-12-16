
export const snippets = {
    getAll: 'GET_ALL',
    logout: 'LOGOUT'
};

export default {
    getAll: ()=>{
        return {
            type: snippets.getAll,
        }
    }
}