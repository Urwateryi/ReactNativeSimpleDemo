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
    Text, Dimensions
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
        var colorAry = ['green', 'blue', 'yellow', 'black', 'orange', 'white', 'pink'];
        // 遍历
        for (var i = 0; i < colorAry.length; i++) {
            itemAry.push(
                <View key={i} style={[styles.itemStyle, {backgroundColor: colorAry[i]}]}></View>
            );
        }
        return itemAry;
    }

    //回到顶部
    _toBeTop(){
        alert("回到顶部")
    }
    _scroll;
    render() {
        return (
            //contentContainerStyle 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内
            <ScrollView
                //在react-native中可以通过 ref属性来获取组件，并设置组件的属性及其方法，相当于android中为控件指定id的感觉
                ref={(scroll)=>this._scroll = scroll}
                scrollsToTop={true}//ios 当此值为true时，点击状态栏的时候视图会滚动到顶部。默认值为true。
                contentContainerStyle={styles.container}>

                <TouchableOpacity
                    style={styles.view_top}
                    activeOpacity={0.5}
                    //滚动到末尾
                    onPress={()=>this._scroll.scrollToEnd()}>
                    <Text style={styles.view_txt}>
                        滚动到底部
                    </Text>
                </TouchableOpacity>

                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}>
                    {this.renderItemH()}
                </ScrollView>
                {this.renderItemV()}

                <TouchableOpacity
                    style={styles.view_top}
                    activeOpacity={0.5}
                    //滚动到指定位置
                    onPress={()=>this._scroll.scrollTo({x:0,y:0,animated:true})}>
                        <Text style={styles.view_txt}>
                            回到顶部
                        </Text>
                </TouchableOpacity>
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
    }, view_top: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }, view_txt: {
        color: 'white',
        fontSize: 20,
        padding: 20
    }
});