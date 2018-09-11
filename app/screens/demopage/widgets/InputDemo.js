/**
 * Description:测试Input控件
 *
 * 涉及知识点：
 *
 * 各种属性设置
 * 值修改
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 */
import React, {  PureComponent } from 'react';
import {
    StyleSheet,
    Platform,
    View,
    TextInput,
    Text,
} from 'react-native'

export default class InputDemo extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "InputDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            input: 'zoey',//初始值
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput multiline={true}
                           placeholder='zoey'
                           placeholderTextColor='red'
                           underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                           autoCapitalize={'characters'}
                           editable={true}
                           maxLength={20}
                           defaultValue={'测试一下'}
                           style={styles.input}
                           onChangeText={(event) => this.setState({input: event})}
                           onEndEditing={(event) =>  this.setState({input:'onEndEditing:'+ event})}
                           onSubmitEditing={(event) =>  this.setState({input:'onSubmitEditing:'+ event})}
                           onSelectionChange={(event) => this.setState({input:
                               'onSelectionChange range: ' +
                               event.nativeEvent.selection.start + ',' +
                               event.nativeEvent.selection.end}
                           )}
                />
                <Text>{'user input: ' + this.state.input}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }, input: {
        padding: 10,
        height: 40,
        borderRadius: 5,//输入框边界圆角度数
        borderColor: 'gray',
        borderWidth: 1,
    }
});