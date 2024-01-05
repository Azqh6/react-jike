const TOKENKEY='token_key'
const setToken=(token)=>{
    return localStorage.setItem(TOKENKEY,token)
}
const getToken=()=>{
    return localStorage.getItem(TOKENKEY)
}
const clearToken=()=>{
    return localStorage.removeItem(TOKENKEY)
}
export {
    setToken,
    getToken,
    clearToken
}