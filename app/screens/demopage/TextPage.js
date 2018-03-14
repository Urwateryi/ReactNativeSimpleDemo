/**
 * Description:第一页
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class HelloWorldApp extends Component {
    render() {
        let pic = {
            uri: 'http://d10.paixin.com/v1.0.2/thumbs/1128150/141752326/staff_1024.jpg'
        };
        return (
            <View style={styles.container}>
                <Text style={styles.one}>Hello yi!</Text>
                  <Greeting name='zoe'/>
                <FlexDirectionBasics/>
                <JustifyContentBasics/>
                <Image source={pic} style={styles.pics}/>
            </View>
        );
    }
    //
    // _goToNext(){
    //     const {navigate} = this.props.navigation;
    //     navigate('SecondPage');
    // }
}

//ES6的写法
class Greeting extends Component {
    render() {
        return (<Text style={styles.one}>{this.props.name}</Text>);
    }
}

class FlexDirectionBasics extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}


class JustifyContentBasics extends Component {
    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, pics: {
        flex: 1,
        width: 300,
        height: 300,
    }
});
