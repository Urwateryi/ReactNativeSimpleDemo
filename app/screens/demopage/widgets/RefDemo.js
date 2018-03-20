/**
 * Description:测试Ref
 *
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 * E-mail: 807861340@qq.com
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    TouchableOpacity,
    Image,
    Text,
    TextInput, Dimensions
} from 'react-native'
import Images from "../../../resources/Images";

export default class RefDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "RefDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            pic:Images.other_test.bg_beauty,//初始值
            count:1
        };
    }

    _onButtonPress() {
        this.setState({ count:this.state.count+1})
        if (this.state.count% 2==0){
            this.setState({pic:Images.other_test.bg_beauty})
            this.refs.changeme.setNativeProps({
                width: 80,
                height: 80
            })
        }else {
            this.setState({pic:Images.home_button.ic_my_select})
            this.refs.changeme.setNativeProps({
                width: 300,
                height: 300
            })
        }
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}//点击时的透明度
                style={styles.container}
                //点击事件，要记得绑定
                onPress={this._onButtonPress.bind(this)}>

                <Image
                    ref='changeme'
                    style={styles.pic}
                    source={this.state.pic}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }, btn: {
        height: 50,
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,//按钮圆角
        alignSelf: 'center',
        backgroundColor: 'skyblue',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'//显示Text组件居中
    }, pic: {
        width: 80,
        height: 80
    }
});