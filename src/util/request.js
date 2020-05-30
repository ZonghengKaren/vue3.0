import { apiUrl, plat, srchn } from './config';
import md5 from 'md5';
import axios from 'axios';

/**
 * 获取当前时间戳
 * @returns {BigInteger}
 */
const getTimestamp = function () {
    return new Date().getTime() / 1000;
}

/**
 * 生成随机串
 */
const generateNonceStr = function () {
    const keyChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let strArr = [];
    for (let i = 0; i < 16; i += 1) {
        strArr.push(keyChars[Math.floor(Math.random() * 62)]);
    }
    return strArr.join('');
}

/**
 * 获取临时用户唯一key
 */
const getUserUniqueKey = function () {
    return md5(generateNonceStr() + getTimestamp()).toLocaleLowerCase();
}

/**
 * 基础参数拼接
 * @param {String} url API 路径
 * @param {Object} params 额外参数
 */
const getRequestBasicParam = function (url, params){
    let args = '';
    if (params && (JSON.stringify(params) !== '{}')) {
        Object.keys(params).forEach(key => {
            args += '&' + key + '=' + params[key];
        });
    }
    return apiUrl + url + '?plat=' + plat + '&srchn=' + srchn + '&timestamp=' + getTimestamp() + '&ukey=' + getUserUniqueKey() + args;
}

/**
 * 处理请求结果
 * @param {Object} res 请求接口返回的数据
 * @param {Object} resolve 成功回调（200）
 * @param {Object} reject 异常回调
 */
const result = function (res,resolve, reject) {
    const data = res.data;
    const status = data.status;

    // 成功回调
    if (status === 200) {
        resolve(data.data);
        return;
    }

    // 提示登录
    if (status === 2011) {
        // 跳转登录
        return;
    }

    // 其他失败回调
    reject(res.data);
};

/**
 * 发起请求
 * request 结合 axios 封装
 * get
 * post
 */
class request {

    /**
     * GET
     * @param url {String} 请求地址
     * @param params {Object} 其他参数
     * @return {Promise}
     */
    static get =  (url = '', params = {}) => {
        url = getRequestBasicParam(url, params);
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((res)=> {
                    result(res,resolve, reject);
                })
                .catch(()=> {
                    console.error('请求异常');
                })
        })
    }

    /**
     * POST
     * @param url {String} 请求地址
     * @param params {Object} 其他参数
     * @return {Promise}
     */
    static post =  (url = '', params = {}) => {
        url = getRequestBasicParam(url);
        return new Promise((resolve, reject) => {
            axios.post(url, params)
                .then((res)=> {
                    result(res,resolve, reject);
                })
                .catch(()=> {
                    console.error('请求异常');
                })
        })
    }
}

export default request;
