/**
 * Description:测试SectionList控件
 *
 * 涉及知识点：
 *
 * 各种属性设置
 * 事件监听
 *
 * Author: zoe
 * Time: 2018/3/15 0015
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    SectionList,
    View,
    Text,
} from 'react-native'

export default class SectionListDemo extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "SectionListDemo",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            textList : [ {
                title : 'D',
                data : [ 'Devin' ]
            }, {
                title : 'J',
                data : [ 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie' ]
            } ]
        };
    }

    renderItem({ item }) {
        return (
            <Text style={styles.item}>
                {item}
            </Text>
        )
    }

    renderSectionHeader({ section }) {
        return (
            <Text style={styles.sectionHeader}>
                {section.title}
            </Text>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.textList}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }, item : {
        backgroundColor : '#ffffff',
        color : '#000002',
        height : 50,
        padding : 10,
        borderBottomColor : '#eeeeee',
        borderBottomWidth : 1,
        fontSize : 20,
    }, sectionHeader : {
        backgroundColor : '#f2f2f2',
        color : '#000002',
        padding : 5,
        height : 30,
        fontSize : 15,
    }
});