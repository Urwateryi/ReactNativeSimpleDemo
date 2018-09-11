/**
 * Description:
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Colors from "../../resources/Colors";

export default class MainMine extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Main</Text>
                <Text style={styles.text}>Mine</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',//当前容器使用什么布局
        justifyContent: 'space-evenly',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor: Colors.bg,
    },text:{
        fontSize: 50,
        textAlign: 'center',
        color: Colors.gray,
    }
})