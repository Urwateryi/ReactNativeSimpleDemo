import { Platform, StyleSheet, View, Text, Image, ToastAndroid, TouchableOpacity } from "react-native";
import React, { PureComponent } from "react";
import Colors from "../../../resources/Colors";
import Images from "../../../resources/Images";
import SkipEditNamePage from "./SkipEditNamePage";
import { jumpPager } from "../../../utils/PageUtil";
import SkipEditAgePage from "./SkipEditAgePage";

/**
 * Description:页面之间的跳转，以及数据的回调
 *
 * Author: zoe
 * Time: 2018/4/10 0010
 */
export default class SkipDemo extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "页面跳转",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;
        //状态机
        this.state = {
            name : '',
            age : ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.onSkipToEditName(this.state.name)}>
                    <Text style={styles.txt_tag}>姓名：</Text>
                    <Text style={styles.txt_content}>{this.state.name}</Text>

                    <Image style={styles.ic_next} source={Images.whole_icon.ic_next}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} activeOpacity={1} onPress={() => this.onSkipToEditAge()}>
                        <Text style={styles.txt_tag}>年龄：</Text>
                        <Text style={styles.txt_content}>{this.state.age}</Text>

                        <Image style={styles.ic_next} source={Images.whole_icon.ic_next}/>
                </TouchableOpacity>
            </View>
        );
    }

    /**
     * 跳转到编辑姓名页面
     */
    onSkipToEditName(name) {
        jumpPager(this.props.navigation.navigate,'SkipEditNamePage',name)
    }

    /**
     * 跳转到编辑年龄页面
     */
    onSkipToEditAge() {
        jumpPager(this.props.navigation.navigate,'SkipEditAgePage')
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.bg
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