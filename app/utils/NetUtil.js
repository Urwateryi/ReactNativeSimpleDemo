import JsonUtil from "./JsonUtil";

/**
 * Description:网络请求工具类
 *
 *
 * Author: zoe
 * Time: 2018/3/25 0023
 */

export default class NetUtil {

    /**
     * GET请求
     *
     * @param url 字符串
     * @param param 参数 字典
     * @param success 成功回调（param:JSON）
     * @param failure 失败回调 （param:ERROR）
     * @constructor
     */
    static GET(url, params, success, failure) {

        //总长度
        var totalParam = '';

        //判断字典参数是否有值
        //把字典转换为字符串，如果字典为空，转换为'「」'
        var jsonStr=JSON.stringify(params);

        if (jsonStr != '{}') {

            //符号
            var mark = '?';
            var i = 0;
            for (key in params) {
                if (i > 0) {
                    mark = '&'
                }
                var value = params[key];
                var paramStr = mark + key + '=' + value;
                totalParam += paramStr;
                i++;
            }
        }

        //拼接url
        url += totalParam;
        fetch(url)
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => {
                success(json);
            })
            .catch((error) => failure(error))
    }

    /**
     * POST请求,application/x-www-form-urlencoded
     *
     * @param url 字符串
     * @param param 参数 字典
     * @param success 成功回调（param:JSON）
     * @param failure 失败回调 （param:ERROR）
     * @constructor
     */
    static PostWithHttpParam(url, params, success, failure){

        var body = '';
        for (var item of params.entries()) {//拼接body
            body += item[0] + "=" + item[1] + "&";
        }
        body = body.substring(0, body.length - 1);

        var requestOptional={
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:body
        };

        console.log('url///' + url+"//body//"+body);

        fetch(url,requestOptional)
            .then(this.checkStatus)
            .then((response)=>response.json())
            .then((json)=>{
                success(json);
            })
            .catch((error)=>{
                failure(error);
            })
    }

    /**
     * POST请求，application/json
     *
     * @param url 字符串
     * @param param 参数 字典
     * @param success 成功回调（param:JSON）
     * @param failure 失败回调 （param:ERROR）
     * @constructor
     */
    static PostWithJsonParam(url,params,success,failure){

        console.log(params)

        // var paramStr=JSON.stringify(params);
        var paramStr=JsonUtil.mapToJson(params);

        console.log(paramStr)

        //post请求描述
        var requestDesc={
            method:'POST',
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
            body:paramStr
        };

        //发送post请求
        fetch(url,requestDesc)
            .then(this.checkStatus)
            .then((response)=>response.json())
            .then((json)=>{
                console.log(json)
                success(json);
            })
            .catch((error)=>{
                console.log(error)
                failure(error);
            })
    }

    /**
     * fetch请求对某些错误http状态不会reject
     * 这主要是由fetch返回promise导致的，
     * 因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，
     * 相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；
     * 所以一般会对fetch请求做一层封装
     *
     * @param response
     * @returns {*}
     */
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}