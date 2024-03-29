import axios from "axios";
const request=axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout:5000
})
//请求拦截器
request.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})
//响应拦截器
request.interceptors.response.use((response)=>{
    return response
},(err)=>{
    return Promise.reject(err)
})

export {request}