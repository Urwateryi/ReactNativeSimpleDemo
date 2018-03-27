/**
 * Description:网络请求
 *
 * 接口使用易源数据
 * https://www.showapi.com/api/view/341/2
 *
 * Author: zoe
 * Time: 2018/3/23 0023
 */
import React, { PureComponent } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Platform,
    Animated,
    TouchableOpacity
} from 'react-native'

import { Heading2, Paragraph } from '../../../components/TextComponent'
import { ItemPic1 } from '../../../components/ImageComponent'
import Images from "../../../resources/Images";
import Colors from "../../../resources/Colors";
import HeaderComponent from "../../../components/HeaderComponent";
import FooterComponent from "../../../components/FooterComponent";
import NetUtil from "../../../utils/NetUtil";
import ApiAddress from '../../../config/ApiAddress'

var itemArr = [];

export default class NetDemo extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "测试网络请求",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    constructor(props) {
        super(props);
        //状态
        this.state = {
            // 下拉刷新
            isRefresh : false,
            contentList : [],
        }
    }

    componentDidMount() {
        this.getJokeList();
    }

    getSingerList(){
        var params = new Map();
        params.set('showapi_appid', '60195');
        params.set('showapi_sign', '83a8eb462be74584807491f5cfe43c24');

        NetUtil.PostWithJsonParam(
            ApiAddress.HOST,
            params,
            jsonData => {
                this.setState({
                    contentList : jsonData.showapi_res_body.contentlist,
                });

                for (var i = 0; i < this.state.contentList.length; i++) {
                    itemArr.push(this.state.contentList[i]);
                }
            },
            error => {
                alert('error///' + error);
            });
    }

    /**
     * 获取笑话列表
     */
    getJokeList(){
        var params = new Map();
        params.set('showapi_appid', '60195');
        params.set('showapi_sign', '83a8eb462be74584807491f5cfe43c24');

        NetUtil.PostWithHttpParam(
            ApiAddress.HOST,
            params,
            jsonData => {
                this.setState({
                    contentList : jsonData.showapi_res_body.contentlist,
                });

                for (var i = 0; i < this.state.contentList.length; i++) {
                    itemArr.push(this.state.contentList[i]);
                }
            },
            error => {
                alert('error///' + error);
            });
    }

    //Item布局
    renderItem({ item }) {
        return (
            <TouchableOpacity style={styles.item} activeOpacity={1} onPress={this.clickItem.bind(this, item)}>
                <ItemPic1 source={{uri:item.img}} style={{ flex : 0.25, margin : 5 }}/>
                <View style={styles.txt_container}>
                    <Heading2 numberOfLines={1}>
                        {item.title}
                    </Heading2>

                    <Paragraph numberOfLines={2}>
                        {item.ct}
                    </Paragraph>
                </View>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        alert(item.title)
    }

    //此函数用于为给定的item生成一个不重复的key
    //不设置这个的话，会报这个警告：Each child in an array or iterator should have a unique "key" prop.
    _keyExtractor = (item) => item.img;

    render() {
        return (
            <FlatList
                data={itemArr}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem.bind(this)}

                //添加头尾布局
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                //下拉刷新相关
                onRefresh={() => {
                    // this.getJokeList();
                }}
                refreshing={this.state.isRefresh}
            />
        );
    }
}

const styles = StyleSheet.create({
    item : {
        flexDirection : 'row',
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomWidth : 0.5,
        borderBottomColor : Colors.border
    },
    txt_container : {
        flex : 0.75,
        marginLeft : 5
    }
});