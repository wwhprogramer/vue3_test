import axiosReq from '@axios/axiosReq'
const {request} = axiosReq

const UserApi = {
    getAllUser: (params, success, fail) => {
        request('getAllUser', params, success, fail)
    },
    getHtml: (params, success, fail) => {
        request('getHtml', params, success, fail)
    },
    save: (params, success, fail) => {
        request('save', params, success, fail)
    },
}

export default UserApi

