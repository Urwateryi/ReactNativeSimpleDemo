/**
 * Description:引导页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

var strList=[
    {
        key:'Text',
        content:'TextPage'
    },
    {
        key:'Image',
        content:'SecondPage'
    },
    {
        key:'Input',
        content:'ThirdPage'
    },
    {
        key:'Button',
        content:'FourPage'
    },
    {
        key:'ScrollView',
        content:'FivePage'
    },
    {
        key:'长列表FlatList',
        content:'此页面主要测试FlatList控件'
    },
    {
        key:'分组列表SectionList',
        content:'此页面主要测试SectionList控件'
    },
    {
        key:'图文列表',
        content:'此页面主要测试图文列表'
    },
    {
        key:'网络请求',
        content:'此页面主要测试网络请求'
    },
    {
        key:'动画',
        content:'此页面主要测试动画'
    },
    {
        key:'自定义控件',
        content:'此页面主要测试自定义控件'
    },
    {
        key:'聚合页面',
        content:'此页面主要测试聚合页面'
    },
    {
        key:'页面刷新',
        content:'此页面主要测试页面刷新'
    },
    {
        key:'与Android交互',
        content:'此页面主要测试与原生Android交互'
    },
    {
        key:'与iOS交互',
        content:'此页面主要测试与原生iOS交互'
    },
    {
        key:'打包',
        content:'此页面主要测试打包'
    },
];

export default class MainDemo extends Component{
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={strList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    //列表的每一行
    renderItem({item}) {
        return (
            <TouchableOpacity activeOpacity={1} onPress={this.clickItem.bind(this,item)}>
                <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        console.log(item.content+"///"+item.key)
        const {navigate} = this.props.navigation;
        navigate(item.content);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f2f2f2',
    },
    item:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        fontSize:18,
        backgroundColor:'white',
        height:55,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
});