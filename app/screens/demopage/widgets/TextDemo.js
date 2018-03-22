/**
 * Description:测试Text控件
 *
 * 涉及知识点：
 *
 * 各种属性设置
 * 事件监听
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 */

//Text它也支持嵌套，样式和触摸处理
// accessible bool 表明视图是否为可访问性元素，默认是true，可访问
// ellipsizeMode enum(‘head’, ‘middle’, ‘tail’, ‘clip’) 这个功能相当于我们android中的ellipsize，文本很长时，省略号显示的位置，是开头，中间还是末尾显示省略号。
// clip是ios上独有的，设置这个属性时，必须先设置text的行数。
//
// numberOfLines 文本的行数
// onLayout function 布局发生变化时调用
// onLongPress function 长按事件
// onPress function 按下或者点击事件
//
// Text的style
//
// color color 字体颜色
// fontFamily string 字体名称
// fontSize number 字体大小
// fontStyle [‘normal’, ‘italic’] 字体样式，正常还是斜着
// fontWeight [‘normal’ /default/, ‘bold’, ‘100’, ‘200’, ‘300’, ‘400’, ‘500’, ‘600’, ‘700’, ‘800’, ‘900’] 字体是正常，还是粗体，等等，数字代表粗细的权重
// lineHeight number 行高
// textAlign[‘auto’ /default/, ‘left’, ‘right’, ‘center’, ‘justify’] 指定文本的对齐方式。其中’justify’值仅iOS支持。
// textDecorationLine [‘none’ /default/, ‘underline’, ‘line-through’, ‘underline line-through’] 横线位置
// textShadowColor color 阴影颜色
// textShadowOffset {width，height} 设置阴影效果
// textShadowRadius number 阴影效果圆角
// textAlignVertical [‘auto’ /default/, ‘top’, ‘bottom’, ‘center’] 文本垂直对其方式
// ios独有的style
// fontVariant
// letterSpacing
// textDecorationColor color
// textDecorationStyle
// writingDirection

import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    View,
    ToastAndroid,
    Text,
} from 'react-native'

import "../../../config/Constants";
import Constants from "../../../config/Constants";
import {
    LOGIN_NAME
} from "../../../config/Constants";

export default class TextDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "TextDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    _onPress(toast){
        alert("TAG onPress"+toast)
    }

    _onLongPress(toast){
        ToastAndroid.show("TAG onLongPress"+toast,ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleBase}>
                  测试嵌套 ： 我是红色red!
                    <Text style={styles.title}>
                        我是绿色green加粗斜着~~~
                        <Text style={styles.subTitle} onPress={()=>this._onPress("show")} onLongPress={()=>this._onLongPress("show")}>
                            我是蓝色哦blue
                        </Text>
                    </Text>
                    look,what i said
                </Text>


                <Text style={styles.testLines} numberOfLines={2}>
                    测试行数试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数测试行数试行数测试行数测试行数测试行数测试行数测试行数测试行数
                </Text>

                <Text style={styles.testLineHeight}>
                    测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距测试行距
                </Text>

                <Text style={styles.testWordGap}>
                    测试字距测试字距测试字距 {Constants.my_name='what did u say'} {global.variate.website} {LOGIN_NAME}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#fff'
    },
    titleBase: {
        textAlign: 'center',
        textDecorationLine: 'underline line-through',
        textDecorationStyle: 'dashed',//ios有效果，android没效果
        letterSpacing: 4,
        textDecorationColor: 'yellow',//iOS 有效果，android里无效，颜色跟字体颜色一样
        textAlignVertical: 'center',
        color: 'red',
        fontSize: 28,
        fontFamily: Platform.OS == "ios" ? null : 'Colin',
        writingDirection: 'rtl',
        marginBottom:10,
    },
    title: {
        color: 'green',
        fontWeight: '900',
        fontStyle: 'italic'//斜体在ios上，只对英文有效，中文无效，android上中英文都有效
    },
    subTitle: {
        color: 'blue',
    },
    testLines:{
        marginBottom:10,
        color:'orange'
        // numberOfLines:2//为何写在这里是无效的呢，需要些在style外面呢，有些属性不能写在style里是为啥
    },
    testLineHeight:{
        lineHeight:30,
        color:'black'
    },
    testWordGap:{
        letterSpacing:50,//为什么没有作用呢，ios上有作用，android上无作用
        color:'red'
    }
});

