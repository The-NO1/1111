//二次封装axios
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//引入store
// import store from '../store'

const ajax = axios.create({
    baseURL: '/api',
    timeout: 10000
})


//请求拦截器
ajax.interceptors.request.use(config => {
    Nprogress.start()
    // config.headers['userTempId']= store.state.user.userTempId
    return config
})

//响应拦截器

ajax.interceptors.response.use(response => {
    Nprogress.done()
    return response.data
}, error => {
    Nprogress.done()
    alert('请求出错' + error.message || '未知错误')
    return Promise.reject(error)
})

export default ajax