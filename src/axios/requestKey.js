import allBasicUrl from '@/config-dev'
const {basicUrl} = allBasicUrl

const allRequestKey = {
    getAllUser: {
        method: 'get',
        url: basicUrl + '/user/getAllUser'
    },
    getHtml: {
        method: 'post',
        url: basicUrl + '/user/getHtml'
    },
    save: {
        method: 'post',
        url: basicUrl + '/user/save'
    }
}

export default allRequestKey