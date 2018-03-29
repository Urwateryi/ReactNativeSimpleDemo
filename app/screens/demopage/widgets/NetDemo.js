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
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'

import { Heading2, Paragraph } from '../../../components/TextComponent'
import { ItemPic1 } from '../../../components/ImageComponent'
import Colors from "../../../resources/Colors";
import NetUtil from "../../../utils/NetUtil";
import ApiAddress from '../../../config/ApiAddress'
import { width, height } from "../../../utils/PageUtil";

const MAX_RESULT = 20;//每页最大记录数

export default class NetDemo extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "测试网络请求",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    constructor(props) {
        super(props);
        this.onEndReachedCalledDuringMomentum = true;
        //状态机
        this.state = {
            // 下拉刷新
            refreshing : false,
            loading : false,
            error : '',
            page : 1,
            dataSource : [],
        }
    }

    componentDidMount() {
        this.getJokeList();
    }

    /**
     * 获取笑话列表
     */
    getJokeList() {
        var params = new Map();
        params.set('showapi_appid', '60195');
        params.set('showapi_sign', '83a8eb462be74584807491f5cfe43c24');
        params.set('page', this.state.page);
        params.set('maxResult', MAX_RESULT);

        NetUtil.PostWithHttpParam(
            ApiAddress.HOST,
            params,
            jsonData => {
                this.setState({
                    //拼接数据
                    dataSource : this.state.dataSource.concat(jsonData.showapi_res_body.contentlist),
                    loading : false,
                    refreshing : false,
                });
            },
            err => {
                console.log('error///' + err.toString());
                this.setState({
                    error : err.toString(),
                    loading : false,
                    refreshing : false
                });
            });
    }

    /**
     * 空页面
     * @returns {*}
     */
    renderEmpty = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>暂无数据</Text>
            </View>
        )
    }

    /**
     * 头部
     * @returns {*}
     */
    renderHeader = () => {
        return (
            <View style={{
                height : 44,
                width : width,
                justifyContent : 'center',
                backgroundColor : 'red',
                alignItems : 'center'
            }} activeOpacity={1}>
                <Text>{'我是头部'}</Text>
            </View>
        )
    }

    renderFooter = () => {
        if (!this.state.loading) {
            return null;
        }
        return (
            <View style={styles.bg_footer}>
                {/*默认的有四个属性: size, color, animating,hidesWhenStopped;
                * size: 是个枚举值: large , small 默认是small
                * 在安卓里面的话可以设置大小类型为number的,只适用在安卓里面
                * color: 默认是white
                * animating:bool类型 默认是显示true 隐藏是false
                * hidesWhenStopped: bool类型 在没有动画的时候是否隐藏 默认是true
                size 是个枚举值: large , small 默认是small* 在安卓里面的话可以设置大小类型为number的,只适用在安卓里面*/}
                <ActivityIndicator animating size="large"/>
            </View>
        );
    };

    //Item布局
    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.item} activeOpacity={1} onPress={this.clickItem.bind(this, item)}>
                <ItemPic1 source={{ uri : item.img }} style={{ flex : 0.25, margin : 5 }}/>
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
    clickItem = (item) => {
        alert(item.title)
    }

    //此函数用于为给定的item生成一个不重复的key
    //不设置这个的话，会报这个警告：Each child in an array or iterator should have a unique "key" prop.
    _keyExtractor = (item) => item.img;

    /**
     * 下啦刷新
     */
    handleRefresh = () => {
        this.setState({
            page : 1,
            refreshing : true,
            loading : false,
            // 清空数组
            dataSource : [],
        }, () => {
            this.getJokeList();
        });
    }

    /**
     * 上拉加载更多
     */
    handleLoadMore = () => {
        if (!this.onEndReachedCalledDuringMomentum) {
            this.setState({
                page: this.state.page++,
                refreshing: false,
                loading: true,
            }, () => {
                // alert('上拉一下');
                this.getJokeList();
                this.onEndReachedCalledDuringMomentum = true;
            });
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}

                //下拉刷新
                //表明list是否在refresh的状态。
                refreshing={this.state.refreshing}//在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号。
                onRefresh={this.handleRefresh}

                //上拉加载更多
                //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                onEndReached={this.handleLoadMore}
                //执行上啦的时候10%执行 决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                onEndReachedThreshold={0.1}

                //可选优化项。但是实际测试中，如果不做该项优化，性能会差很多。所以强烈建议做此项优化！
                //如果不做该项优化，每个列表都需要事先渲染一次，动态地取得其渲染尺寸，然后再真正地渲染到页面中。
                //如果预先知道列表中的每一项的高度(ITEM_HEIGHT)和其在父组件中的偏移量(offset)和位置(index)，就能减少一次渲染。这是很关键的性能优化点。
                // getItemLayout={(data, index) => (
                //     { length : 250, offset : 250 * index, index }
                // )}

                // //加载头部
                // ListHeaderComponent={this.renderHeader}
                //加载底部
                ListFooterComponent={this.renderFooter}

                onMomentumScrollBegin={() => {
                    this.onEndReachedCalledDuringMomentum = false;
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',//定制主轴
        alignContent : 'center',
        backgroundColor : Colors.bg,
    },
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
    }, text : {
        fontSize : 30,
        color : Colors.gray,
    }, bg_footer : {
        paddingVertical : 20,
        borderTopWidth : 1,
        borderColor : "#CED0CE"
    }
});