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

import HeaderComponent from '../../../components/HeaderComponent'
import FooterComponent from '../../../components/FooterComponent'

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
                data : [ 'Devin','David','Dad' ]
            }, {
                title : 'J',
                data : [ 'Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie','Jack','Jim','Joy','Joey','Jessie','Jem','Joke' ]
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
                    ListHeaderComponent={HeaderComponent}
                    ListFooterComponent={FooterComponent}

                    //下拉刷新
                    refreshing={false}// boolean 是否处于刷新状态。
                    onRefresh={() => alert('刷一下要亲亲哦')}// () => void 通过函数改变refreshing从而控制刷新与否。
                    stickySectionHeadersEnabled={true}

                    //上拉加载更多，不能反复拉吗？
                    onEndReached={()=>{alert('上拉要亲亲哦')}}// (info: {distanceFromEnd: number}) => void 是否到达底部，在默认情况下会有一个默认的distanceFromEnd临界值。可以通过此属性来达到上拉加载的效果。
                    onEndReachedThreshold={0}//number 调用onEndReached之前的临界值，单位是像素。

                    sections={this.state.textList}//Array相当于ListView中的数据源，SectionList所需要的数据都是经由sections属性传入，数据类型为Array类型
                    renderItem={this.renderItem}//(info: {item: Item, index: number}) => ?React.Element renderItem返回Section中的每个小的的Item。可以通过函数返回Element，函数有一个info参数，参数为JSON形式，参数形式为：{item: Item, index: number}。
                    renderSectionHeader={this.renderSectionHeader}// (info: {section: SectionT}) => ?React.Element renderSectionHeader返回每个Section的标志性头部，可以通过函数返回Element，函数有一个info参数，参数为JSON形式，参数形式为：{section:{key : number, data : [ Object, Object, …] }}。
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