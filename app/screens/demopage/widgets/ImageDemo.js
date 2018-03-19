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
    Dimensions,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native'

import React, {Component} from 'react'
import {Images} from "../../../resources";

// import { RNCamera} from 'react-native-camera';

//底部弹出框选项
var photoOptions={
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions:{
        skipBackup:true,
        path:'images'
    }
}

var pic_local,pic_net,pic_res,type;

// class BadInstagramCloneApp extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <RNCamera
//                     ref={ref => {
//                         this.camera = ref;
//                     }}
//                     style = {styles.preview}
//                     type={RNCamera.Constants.Type.back}
//                     flashMode={RNCamera.Constants.FlashMode.on}
//                     permissionDialogTitle={'Permission to use camera'}
//                     permissionDialogMessage={'We need your permission to use your camera phone'}
//                 />
//                 <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
//                     <TouchableOpacity
//                         onPress={this.takePicture.bind(this)}
//                         style = {styles.capture}
//                     >
//                         <Text style={{fontSize: 14}}> SNAP </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
//
//     takePicture = async function() {
//         if (this.camera) {
//             const options = { quality: 0.5, base64: true };
//             const data = await this.camera.takePictureAsync(options)
//             console.log(data.uri);
//         }
//     };
// }


export default class ImageDemo extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: "ImageDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            type:props.type,
            pic_local: props.pic_local,
            pic_net: props.pic_net,
            pic_res: props.pic_res,
        };
    }

    //加载网络图片
    _loadNetImg() {
        var path='http://d10.paixin.com/v1.0.2/thumbs/1128150/141752326/staff_1024.jpg';
        this.setState({pic_net:path})
    }

    //加载本地图片
    _loadLocalImg() {
        var path=Images.other_test.bg_beauty;
        this.setState({pic_local:path})
    }

    //拍照图片
    _loadCamraImg() {
        if(Platform.OS === 'android'){
            alert("android")
        } else {
            alert("ios")
        }
    }

    //裁剪图片
    _clipImg() {
        alert("裁剪图片")
    }

    //模糊图片
    _blurImg() {
        alert("加载本地资源文件图片")
    }

    //加载相册图片
    _loadAlbumImg(){
        alert("加载手机相册图片")
    }

    //加载gif
    _loadGif() {
        var path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521179845696&di=4ec90a70e00dc006679d1e4fca0fc58b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2F4f4d663f088245e8b91caee6d6d642a5.gif'
        this.setState({pic_local:path});
    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <Text style={styles.textLoad} onPress={() => this._loadNetImg()}>
                    加载网络图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._loadLocalImg()}>
                    加载本地图片
                </Text>

                {/*<Text style={styles.textLoad} onPress={() => this._loadCamraImg()}>*/}
                    {/*拍照*/}
                {/*</Text>*/}

                {/*<BadInstagramCloneApp/>*/}

                <Text style={styles.textLoad} onPress={() => this._loadAlbumImg()}>
                    来自手机相册
                </Text>

                {/*<Image*/}
                    {/*style={styles.img}*/}
                    {/*source={{uri:'bg_beauty2.jpg'}}//放android项目下的图片感觉不稳定，有时候能显示，有时候不能显示*/}
                {/*/>*/}

                <Image
                    style={styles.img}
                    source={{uri:this.state.pic_net}}
                    cache='force-cache'
                    resizeMode='contain'
                />

                <Image
                    style={styles.img}
                    source={this.state.pic_local}
                    resizeMode='contain'
                />

                <Text style={styles.textLoad} onPress={() => this._loadGif()}>
                    加载gif
                </Text>

                <Text style={styles.textLoad} onPress={() => this._clipImg()}>
                    裁剪图片
                </Text>

                <Text style={styles.textLoad} onPress={() => this._blurImg()}>
                    模糊图片
                </Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        alignContent:'center'
    },
    //为啥button的属性只有一点点，不能更改尺寸吗不能设置间距吗
    textLoad: {
        color: 'black',
        marginBottom: 10,
        textDecorationLine: 'underline',
        fontWeight: '900',
        fontSize: 15
    },img:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width/2,
    } ,preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
});