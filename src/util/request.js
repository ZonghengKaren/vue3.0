import config from './config';
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
    var keyChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var strArr = [];
    for (var i = 0; i < 16; i += 1) {
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
 * @param {Object} params 额外参数
 */
const getRequestBasicParam = function (url, params){
    console.log(params);
    return config.apiUrl + url + '?' + 'plat=19&timestamp=' + getTimestamp() + '&ukey=' + getUserUniqueKey();
}

/**
 * 处理请求结果
 */
const result = function (res,resolve, reject) {
    const data = res.data;
    const status = data.status;
    if (status === 200) {
        resolve(data.data);
    } else {
        reject(res.data);
    }
};

/**
 * 发起请求
 * request 结合 axios 封装
 * get
 * post
 */
class request {

    /**
     * 发起请求
     * @param url {String} 请求地址
     * @param params {Object} 配置
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
}

export default request;
