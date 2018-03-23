/**
 * Description:测试WebView控件
 *
 * 涉及知识点：
 *
 * 显示网页
 // * 事件监听
 // * 显示加载进度条
 // * 显示视频
 // * web页面与原生页面的交互
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    WebView,
    Text,
    TextInput,
    Dimensions
} from 'react-native'

export default class WebViewDemo extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "WebViewDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    render() {
        return (
            <WebView
                style={styles.web}
                source={{uri:'https://www.baidu.com/'}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },web:{
        width:'100%',
        height:'100%'
    }
});