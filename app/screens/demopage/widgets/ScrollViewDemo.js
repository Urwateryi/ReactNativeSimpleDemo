/**
 * Description:测试ScrollView控件
 *
 * 涉及知识点：各种属性设置
 * Author: zoe
 * Time: 2018/3/15 0015
 * E-mail: 807861340@qq.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    View,
    ScrollView,
    TextInput, Dimensions
} from 'react-native'

export default class ScrollViewDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "ScrollViewDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    renderItemV() {
        // 数组
        var itemAry = [];
        // 颜色数组
        var colorAry = ['gray', 'green', 'blue', 'yellow', 'black', 'orange', 'white', 'pink'];
        // 遍历
        for (var i = 0; i < colorAry.length; i++) {
            itemAry.push(
                <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
            );
        }
        return itemAry;
    }

    renderItemH() {
        // 数组
        var itemAry = [];
        // 颜色数组
        var colorAry = [ 'green','blue', 'yellow', 'black', 'orange', 'white', 'pink'];
        // 遍历
        for (var i = 0; i < colorAry.length; i++) {
            itemAry.push(
                <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
            );
        }
        return itemAry;
    }

    render() {
        return (
            //contentContainerStyle 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内
            <ScrollView
                scrollsToTop={true}//ios 当此值为true时，点击状态栏的时候视图会滚动到顶部。默认值为true。
                contentContainerStyle={styles.container}

                onScroll={(event) => {
                    console.log(event.nativeEvent.contevtOffset.x);//水平滚动距离
                    console.log(event.nativeEvent.contevtOffset.y);//垂直滚动距离
                }}
            >
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}>
                    {this.renderItemH()}
                </ScrollView>
                {this.renderItemV()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }, itemStyle: {
        // 尺寸
        width: 1000,
        height: 200
    },
});