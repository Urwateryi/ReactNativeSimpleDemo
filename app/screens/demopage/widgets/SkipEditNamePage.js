import { Platform, StyleSheet, View, TextInput, Text,TouchableOpacity,ToastAndroid } from "react-native";
import React, { PureComponent } from "react";
import Colors from "../../../resources/Colors";

/**
 * Description:SkipDemo的子页面，主要用于接收上一级页面传过来的数据，并在修改后回传
 *
 * Author: zoe
 * Time: 2018/4/10 0010
 */
export default class SkipEditNamePage extends PureComponent {

    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;
        //状态机
        this.state = {
            content : '',
        }
    }

    componentDidMount(){
        //在static中访问this，需要在componentDidMount中动态的添加点击事件
        this.props.navigation.setParams({navigatePress:this.onSubmit})
    }

    onSubmit(){
        ToastAndroid.show("点击了保存",ToastAndroid.SHORT);
    }

    static navigationOptions = ({ navigation }) => (
        {
        headerTitle : "编辑姓名",
        headerRight : (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.state.params.navigatePress()}>
                <Text style={styles.title_right}>保存</Text>
            </TouchableOpacity>
        ),
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.txt_tag}>姓名：</Text>
                    <TextInput
                        placeholder='请输入你的姓名'
                        maxLength={15}
                        value={this.props.navigation.state.params.name}
                        onChangeText={(event) => this.setState({ content : event })}
                        placeholderTextColor={Colors.bright_gray}
                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果
                        autoCapitalize={'characters'}
                        style={styles.txt_content}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.bg
    }, title_right : {
        fontSize : 15,
        color : Colors.light_gray,
        marginRight : 10
    }, item : {
        backgroundColor : 'white',
        paddingLeft : 10,
        paddingRight : 10,
        flexDirection : 'row',
        height : 50,
        alignItems : 'center',
        borderBottomWidth : 1,
        borderBottomColor : Colors.border
    }, txt_tag : {
        fontSize : 18,
        color : Colors.light_gray,
    }, txt_content : {
        flex : 1,
        fontSize : 18,
        color : Colors.gray,
    }, ic_next : {
        width : 15,
        height : 15
    }
});