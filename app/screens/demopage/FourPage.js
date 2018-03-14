/**
 * Description:第四页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {Images} from "../../resources";

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Text style={styles.tag}>姓名</Text>
                    <Text style={styles.content}>Zoe</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.tag}>家庭住址</Text>
                    <Text style={styles.content}>是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否是否梵蒂冈梵蒂冈梵蒂冈的费否身份是否</Text>
                    <Image source={Images.whole_icon.ic_next} style={styles.whole_icon}/>
                </View>

                <View style={styles.nani}>
                    <Image source={Images.home_button.ic_info_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_search_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_create_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_msg_select} style={styles.pics}/>
                    <Image source={Images.home_button.ic_my_select} style={styles.pics}/>
                </View>
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
    }, nani: {
        flex: 1,
        flexDirection: 'row',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'flex-end',//定制副轴
        marginBottom: 10
    }, info: {
        height: 50,
        borderBottomColor:'#eeeeee',//分割线，这样做使用borderWidth:0.5，
        // 这种写法在ios上是可以正常显示，但是在部分Android机型上显示异常。
        // 这个问题可以使用 StyleSheet.hairlineWidth 来避免这个问题。
        //这里分割线使用了行元素的下边框来做，其实也可以吧分割线作为一个单独的子元素来绘制
        borderBottomWidth:0.5,
        flexDirection: 'row',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'center',//定制副轴
        backgroundColor: '#ffffff',
    }, tag: {
        flex: 0.5,
        fontSize: 15,
        paddingLeft: 20,
        textAlign: 'left',
        color: '#333333',
    }, content: {
        flex: 1,
        fontSize: 15,
        paddingRight: 20,
        textAlign: 'right',
        color: '#999999',
    }, view: {
        height: 1,
        color: '#333333',
    }, three: {
        fontSize: 80,
        textAlign: 'center',
        color: '#333333',
    },four: {
        fontSize: 5,
        textAlign: 'center',
        color: '#333333',
    },five: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, six: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, seven: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, navigation: {
        width: 40,
        height: 40
    }, whole_icon: {
        width: 15,
        height: 15,
        paddingRight:15
    }
});
