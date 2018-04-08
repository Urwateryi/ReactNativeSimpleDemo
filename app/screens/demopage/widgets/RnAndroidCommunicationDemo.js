/**
 * Description:RN与原生交互的三种方式
 *
 * 三种交互方式的比较

 1、RCTDeviceEventEmitter发送事件方式

 优点：可任意时刻传递，Native主导控制。
 缺点：要添加注册监听

 2、Callback回调方式

 优点：JS调用一次，Native返回一次，
 缺点：CallBack为异步操作，返回时机不确定

 3、Promise方式

 优点：JS调用一次，Native返回一次
 缺点：每次使用需要JS调用一次

 至于使用哪种方式根据自己的业务需求来决定，个人觉得相对而言 发送事件的方式缺点相对小一些。
 * Author: zoe
 * Time: 2018/4/8 0008
 */
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    DeviceEventEmitter,
    NativeModules,
    View
} from 'react-native';

export class RnAndroidCommunicationDemo extends PureComponent{
    componentWillMount(){
        DeviceEventEmitter.addListener("EventName",()=>{
            this.showState();
            alert("send event success");
        });
    }

    constructor(props){
        super(props);
        this.state={
            content:"这是个预定的接受消息"
        }
    }

    render(){
        return (
            <View style = {myStyles.container}>
                <Text style = {myStyles.welcome} onPress={this.onCallNative.bind(this)}>
                    当你点我的时候会调用原生方法，原生方法延迟3s后会向前端发送事件。
                    前端一直在监听该事件，如果收到，则给出alert提示! send 方式
                </Text>

                <Text style = {myStyles.welcome} onPress={this.onCallNativeByCallBack.bind(this,'callback send ok',null)}>
                    callback方式 交互方式！！！！
                </Text>

                <Text style = {myStyles.welcome} onPress={this.onCallNativePromise.bind(this,'promise send ok',null)}>
                    promise方式 交互方式！！！！
                </Text>

                <Text style = {myStyles.instructions}>
                    {this.state.content}
                </Text>
            </View>
        );
    }

    /**
     * 方式一：发送事件的方式
     */
    onCallNative(){
        console.log(" js called by send");
        NativeModules.MyModule.callNativeBySend();
    }

    /**
     * 方式二：callback方式
     * @param msg
     */
    onCallNativeByCallBack(msg){
        console.log("js called by callback");
        NativeModules.MyModule.callNativeByCallBack(msg
            ,(result) => {
                this.setState({content:result});
            })
    }

    /**
     * promise 方式
     * @param msg
     */
    onCallNativePromise(msg){
        console.log("js called by promise");
        NativeModules.MyModule.callNativeByPromise(msg).then(
            (result) => {
                this.setState({content:result});
            }
        ).catch((error) =>{
            console.log(error);
        })
    }

    showState(){
        this.setState({content:"已经收到了原生模块发送来的事件,send event 方式"});
    }
}
const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});