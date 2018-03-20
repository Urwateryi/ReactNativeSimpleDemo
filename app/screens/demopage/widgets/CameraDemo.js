/**
 * Description:测试Image控件
 *
 * 涉及知识点：
 * 通过react-native-camera第三方库进行拍照并显示
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 */
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    View,
    Platform
} from 'react-native'
import {RNCamera} from 'react-native-camera';
import React, {Component} from 'react'

//底部弹出框选项
var photoOptions = {
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}

class BadInstagramCloneApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.off}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}>

                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
                            <Text style={{fontSize: 14}}> 拍照 </Text>
                        </TouchableOpacity>
                    </View>
                </RNCamera>
            </View>
        );
    }

    takePicture = async () => {
        if (!this.camera) return;
        try {
            const options = {quality: 0.5, base64: true};
            const data = await this.camera.takePictureAsync(options)
            alert(data.uri)
        } catch (error) {
            alert(error)
            throw error;
        }
    };
}

export default class CameraDemo extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "CameraDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    render() {
        return (
            <BadInstagramCloneApp/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    }, img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
    }, preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});