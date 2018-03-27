/**
 * Description:JSON转换工具类
 *
 * Author: zoe
 * Time: 2018/3/26 0026
 */
'use strict';
import React, {Component} from 'react';

export default class JsonUtil extends Component {
    /*
     * 字符转换为JSON
     * */
    static strToJson(data) {
        return JSON.parse(data);
    }
    /*
     * JSON转换为字符
     * */
    static jsonToStr(data) {
        return JSON.stringify(data);
    }
    /*
     * map转换为json
     * */
    static mapToJson(map) {
        return JSON.stringify(JsonUtil.strMapToObj(map));
    }
    /*
     * json转换为map
     * */
    static jsonToMap(jsonStr) {
        return JsonUtil.objToStrMap(JSON.parse(jsonStr));
    }
    /*
     * map转化为对象（map所有键都是字符串，可以将其转换为对象）
     * */
    static strMapToObj(strMap) {
        let obj = Object.create(null);
        for (var [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    /*
     * 对象转换为Map
     * */
    static objToStrMap(obj) {
        let strMap = new Map();
        for (var k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
}