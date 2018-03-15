/**
 * Description:测试Image控件
 *
 * 涉及知识点：加载网络，本地，静态资源图片，拍照显示，模糊，裁剪，加载GIF，一些图片库
 * Author: zoe
 * Time: 2018/3/15 0015
 * E-mail: 807861340@qq.com
 */
import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    Platform
} from 'react-native'

import React, {Component} from 'react'

export default class ImageDemo extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "ImageDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    //加载本地资源文件图片
    _loadResImg() {
        alert("加载本地资源文件图片")
    }

    //加载网络图片
    _loadNetImg() {
        alert("加载网络图片")
    }

    //加载本地图片
    _loadLocalImg() {
        alert("加载本地图片")
    }

    //拍照图片
    _loadCamraImg() {
        alert("拍照图片")
    }

    //裁剪图片
    _clipImg() {
        alert("裁剪图片")
    }

    //模糊图片
    _blurImg() {
        alert("加载本地资源文件图片")
    }

    //加载gif
    _loadGif() {
        alert("加载gif")
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.textLoad} onPress={() => this._loadResImg()}>
                    加载资源图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._loadNetImg()}>
                    加载网络图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._loadLocalImg()}>
                    加载本地图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._loadCamraImg()}>
                    拍照图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._clipImg()}>
                    裁剪图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._blurImg()}>
                    模糊图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._loadGif()}>
                    加载gif
                </Text>

                <Image>


                </Image>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
    },
    //为啥button的属性只有一点点，不能更改尺寸吗不能设置间距吗
    textLoad: {
        color: 'black',
        marginBottom: 10,
        textDecorationLine: 'underline',
        fontWeight: '900',
        fontSize: 15
    }
});