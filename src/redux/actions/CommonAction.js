
export const snippets = {
    login: 'LOGIN',
    logout: 'LOGOUT'
};

export default {
    login: ({id, token, name, email}) => ({
        type: snippets.login,
        id: id,
        token: token,
        name: name,
        email: email
    }),
    logout: ()=>({
        type: snippets.logout
    })
}