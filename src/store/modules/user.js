import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import { getToken,setToken } from "@/utils/token";
const userStore=createSlice({
    name:'user',
    initialState:{
        token:getToken() || '',
    },
    reducers:{
        setTokens(state,actions){
            state.token = actions.payload
            setToken(state.token)
        }
    }
})
const {setTokens}=userStore.actions

//异步方法，获取用户信息
const fetchLogin=(loginForm)=>{
    return async(dispatch)=>{
        let res= await request.post('/authorizations',loginForm)
        if(res){
            console.log(res);
        }
        dispatch(setTokens(res.data.data.token))


    }
}
const userReducer=userStore.reducer
export {fetchLogin,setTokens}
export default userReducer