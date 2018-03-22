/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/3/22 0022
 */
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>THIS IS HEADER</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#999999',
    },header:{
        textAlign: 'center',
        padding:15,
        fontSize:20,
        color:'#666666',
    }
})