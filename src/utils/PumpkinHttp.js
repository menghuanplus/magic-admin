import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios

var PumpkinHttp = {
    /**
     * get 请求格式 {params: {a:'1', b:'2'}}
     * post 请求格式 {data} //data为json对象
     *
     * @param url
     * @param method get|post|put|delete...
     * @param params like queryString. if a url is index?a=1&b=2, params = {a: '1', b: '2'}
     * @param data post data, use for method put|post
     * @returns {Promise}
     */
    ajax (url, method, options) {
        if (options !== undefined) {
            var {params = {}, data = {}} = options
        } else {
            params = data = {}
        }

        if (method === 'post') {
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
            data = qs.stringify(options.data)
            params = options.data
        }

        return new Promise((resolve, reject) => {
            //登录 token
            axios.defaults.headers['Authorization'] = localStorage.getItem('Authorization')

            axios({
                url,
                method,
                params,
                data
            }).then(res => {
                // API正常返回(status=20x), 是否错误通过有无error判断
                // if (res.data.code !== 200) {
                //     reject(res)
                // } else {
                //     resolve(res)
                // }
                resolve(res)
            }, res => {
                // API请求异常，一般为Server error 或 network error
                reject(res)
            })
        })
    }
}

export default PumpkinHttp
