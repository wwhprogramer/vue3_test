import axios from 'axios'
import allRequestKey from './requestKey'

const axiosReq = {
    request: (requestKey, params, success, fail) => {
        const configUrl = allRequestKey[requestKey]
        const config = {
            method: configUrl.method,
            url: configUrl.url,
            params,
            header:{
                'Content-Type':'application/json'  //如果写成contentType会报错
            }
        }
        axios(config)
        .then(res => {
            typeof success === 'function' && success(res.data)
        })
        .catch(err => {
            typeof fail === 'function' && fail(err)
        })
    }
}



export default axiosReq