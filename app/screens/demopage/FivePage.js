/**
 * Description:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    Text
} from 'react-native';

var flatListData = [{
    key: 'a',
    text: '444'
},{
    key: 'b',
    text: '333'
},{
    key: 'c',
    text: '2222'
},{
    key: 'd',
    text: '111'
}];

export default class ListsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={flatListData}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item, index) => item.key;

    //列表的每一行
    renderItem({item,index}) {
        return (
            <TouchableOpacity key={index} activeOpacity={1} onPress={this.clickItem.bind(this,item,index)}>
                <Text style={styles.item}>{item.key}</Text>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item,index) {
        alert(item.text)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 45,
        backgroundColor:'#ffffff',
    },
    separator:{
        height: 1,
        color:'#333333',
    },one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }
});