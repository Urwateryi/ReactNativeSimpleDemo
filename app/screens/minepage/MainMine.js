/**
 * Description:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class MainMine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MainMine</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor: '#f2f2f2',
    },text:{
        fontSize: 50,
        textAlign: 'center',
        color: '#333333',
    }
})