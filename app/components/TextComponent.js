/**
 * Description:Text相关组件
 *
 * Author: zoe
 * Time: 2018/3/23 0023
 */

import React from 'react'
import {
    StyleSheet,
    Text
} from 'react-native'
import Colors from "../resources/Colors";

export function Heading1({style, ...props}: Object) {
    return <Text style={[styles.h1, style]} {...props} />
}

export function Heading2({style, ...props}: Object) {
    return <Text style={[styles.h2, style]} {...props} />
}

export function Heading3({style, ...props}: Object) {
    return <Text style={[styles.h3, style]} {...props} />
}

export function Paragraph({style, ...props}: Object) {
    return <Text style={[styles.p, style]} {...props} />
}

export function Tip({ style ,...props}:Object){
    return <Text style={[styles.tip,style]}{...props} />
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 40,
        color: Colors.primary,
    },
    h2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.dark_gray,
    },
    h3: {
        fontSize: 14,
        color: Colors.dark_gray,
    },
    p: {
        fontSize: 13,
        color: Colors.light_gray,
    },
    tip: {
        fontSize: 13,
        color: Colors.bright_gray
    }
})
