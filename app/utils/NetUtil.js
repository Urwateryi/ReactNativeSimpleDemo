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
    static GET(url, param, success, failure) {

        //总长度
        var totalParam = '';

        //判断字典参数是否有值
        //把字典转换为字符串，如果字典为空，转换为'「」'
        var jsonStr = JSON.stringify(param);

        if (jsonStr != '{}') {

            //符号
            var mark = '?';
            var i = 0;
            for (key in param) {
                if (i > 0) {
                    mark = '&'
                }
                var value = param[key];
                var paramStr = mark + key + '=' + value;
                totalParam += paramStr;
                i++;
            }
        }

        //拼接url
        url += totalParam;
        fetch(url)
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
    static PostWithHttpParam(url, param, success, failure){
        var body='';

        //判断字典参数是否有值
        //把字典转换为字符串，如果字典唯恐，转换为'「」'
        var jsonStr=JSON.stringify(param);
        if (jsonStr!='{}'){
            //符号
            var mark='';
            var i=0;
            for (key in param){
                if(i>0){
                    mark='&'
                }
                var value=param[key];
                var paramStr=mark+key+'='+value;
                body+=paramStr;
                i++;
            }
        }

        console.log(body);
        var requestOptional={
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:body
        };

        fetch(url,requestOptional)
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
    static PostWithJsonParam(url,param,success,failure){
        var paramStr=JSON.stringify(param);

        //post请求描述
        var requestDesc={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:paramStr
        };

        //发送post请求
        fetch(url,requestDesc)
            .then((response)=>response.json())
            .then((json)=>{
                success(json);
            })
            .catch((error)=>{
                failure(error);
            })
    }
}