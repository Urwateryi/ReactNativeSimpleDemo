/**
 * 之前报的navigation未定义的错误，应该是我的click方法没有绑定的原因，没有用()=>，也没有用bind
 * 参考http://bbs.reactnative.cn/topic/2480/bind%E5%92%8C%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0-%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%A5%BD%E5%91%A2/2
 * Description:
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

import Colors from '../../resources/Colors'
import { jumpPager } from "../../utils/PageUtil";

export default class MainCreate extends PureComponent {
    //----------------------跳转，方法1：:-------------------------------------
    // render() {
    //     return (
    //         <View style={styles.container}>
    //                 <TouchableOpacity activeOpacity={1} onPress={()=>this._clickItem('TextPage')}>
    //                 <Text style={styles.text}>MainCreate</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    //
    // _clickItem(screen){
    //     console.log("test")
    //     const { navigate } = this.props.navigation;
    //     navigate(screen);
    // }

//--------------------------跳转，方法2：---------------------------------
    // render() {
    //     const { navigate } = this.props.navigation;
    //     return (
    //         <View style={styles.container}>
    //             <TouchableOpacity activeOpacity={1} onPress={this._clickItem.bind(this,navigate)}>
    //                 {/*<TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('TextPage')}>*/}
    //                 <Text style={styles.text}>MainCreate</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    //
    // _clickItem(navigate){
    //     console.log("test")
    //     navigate('TextPage');
    // }

//---------------------------跳转，方法3：--------------------------------
    // render() {
    //     return (
    //         <View style={styles.container}>
    //                 <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('TextPage')}>
    //                 <Text style={styles.text}>MainCreate</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }

//--------------------------跳转，方法4：---------------------------------
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={()=>this._clickItem()}>
                    <Text style={styles.text}>MainCreate</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _clickItem(){
        // console.log("test")
        // const { navigate } = this.props.navigation;
        // navigate('TextDemo');

        jumpPager(this.props.navigation.navigate,'TextDemo')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor: Colors.bg,
    }, text: {
        fontSize: 50,
        textAlign: 'center',
        color: Colors.gray,
    }
})