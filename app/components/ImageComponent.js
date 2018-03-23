/**
 * Description:Image相关组件
 *
 * Author: zoe
 * Time: 2018/3/23 0023
 */
import React from 'react'
import {
    StyleSheet,
    Image
} from 'react-native'
import Colors from "../resources/Colors";

export function ItemPic1({ style, src, ...props }: Object) {
    return <Image style={[ styles.item1, style ]} source={src} {...props} />
}

const styles = StyleSheet.create({
    item1 : {
        width : 100,
        height : 70,
    },
    item2 : {
        width : 300,
        height : 100,
    },
    item3 : {
        width : 300,
        height : 100,
    },
    item_icon : {
        width : 15,
        height : 15
    }
})