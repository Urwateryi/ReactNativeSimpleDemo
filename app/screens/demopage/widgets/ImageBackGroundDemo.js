/**
 * Description:测试ImageBackGround控件
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
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text, Dimensions,
} from 'react-native'

import {Images} from "../../../resources";

export default class ImageBackGroundDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "ImageBackGroundDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    _click0() {
        alert("show me0")
    }

    _click1() {
        alert("show me1")
    }

    _click2() {
        alert("show me 3")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._click0()}>
                    <ImageBackground style={{height: 100, width: 300}} source={Images.other_test.bg_beauty}
                                     resizeMode='cover'>
                        <TouchableOpacity onPress={() => this._click1()}>
                            <Text style={{color: 'red', fontSize: 24}}> image 嵌入 text</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._click2()}>
                            <Image
                                style={styles.img}
                                source={Images.home_button.ic_info_select}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    }, img: {
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').width / 2,
    }
});

