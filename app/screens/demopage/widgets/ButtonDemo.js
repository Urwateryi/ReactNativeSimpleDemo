/**
 * Description:测试Button控件
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
    Text,
    TextInput, Dimensions
} from 'react-native'

export default class ButtonDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "ButtonDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            input:'zoey',//初始值
        };
    }
    //点击事件函数
    onButtonPress ()  {
        this.setState({input:'按啥啊按啥啊'});
        //修改文本输入框的属性值
        this.refs.textInputRefer.setNativeProps({
            editable:false
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                            ref="textInputRefer"
                            value={this.state.input}
                            placeholder='zoey'
                           placeholderTextColor='red'
                           underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                           editable={true}
                           maxLength={20}
                           // secureTextEntry={true} //设置是否显示为密码

                           autoCapitalize='characters'//为啥没作用

                           style={styles.input}
                           onChangeText={(event) => this.setState({input: event})}
                />
                <TouchableOpacity
                    activeOpacity={0.5}//点击时的透明度
                    style={styles.btn}
                    //点击事件，要记得绑定
                    onPress={this.onButtonPress.bind(this)}>
                    <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>
                        登录
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },btn:{
        height:50,
        width:Dimensions.get('window').width-20,
        borderRadius: 10,//按钮圆角
        alignSelf:'center',
        backgroundColor:'skyblue',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'//显示Text组件居中
    }, input: {
        padding: 10,
        height: 40,
        borderRadius: 5,//输入框边界圆角度数
        borderColor: 'gray',
        borderWidth: 1,
    }
});