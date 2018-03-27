/**
 * Description:一些与页面有关的工具
 *
 * Author: zoe
 * Time: 2018/3/27 0027
 */
import React from 'react'
import {
    Image,
    Dimensions
} from 'react-native'

export const {width,height} = Dimensions.get('window');

export const jumpPager = (navigate,page,params) => {
    if (params != null) {
        navigate(page,{
            data:params
        })
    } else {
        navigate(page)
    }
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}