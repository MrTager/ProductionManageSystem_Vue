import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  //baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: "http://172.60.12.230:8000",
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers:{
    "post":{
      "Content-Type": "application/x-www-form-urlencoded",
    }
  }
})




service.interceptors.request.use(
  config => {
    console.info('请求发送',config)
      if(config.method == 'post'){
        let oldData = config.data
        let arr = []
        for(let key in oldData){
          let str = ''
          str = key+'='+oldData[key]
          arr.push(str);
        }
        let argumentes = arr.join('&');
        config.data = argumentes
      }
      return config;
   },
   error => {
    return Promise.reject(error)
   }
);

// response interceptor
service.interceptors.response.use(
  response=>{
    console.info("请求返回",response)
    const res = response.data
    if(res.errorCode !== 0){
      Message({
        message: res.errorCode + res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }else{
      // Message({
      //   message: res.message,
      //   type: 'success',
      //   duration: 5 * 1000
      // })
      return res
    }
  },
  error=>{
    //console.log("恢复拦截错误",error)
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
