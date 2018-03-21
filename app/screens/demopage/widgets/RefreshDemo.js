import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity, FlatList, Image, Platform,
} from 'react-native';
//屏幕信息
const dimensions = require('Dimensions');
//获取屏幕的宽度和高度
const {width, height} = dimensions.get('window');

export default class RefreshDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "RefreshDemo",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    constructor(props){
        super(props);
        //当前页
        this.page = 1
        //状态
        this.state = {
            // 列表数据结构
            data:[],
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:false

        }
    }


    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.data}
                //item显示的布局
                renderItem={({item}) => this._createListItem(item)}
                // 空布局
                ListEmptyComponent={this._createEmptyView}
                //添加头尾布局
                ListHeaderComponent={this._createListHeader}
                ListFooterComponent={this._createListFooter}
                //下拉刷新相关
                onRefresh={() => this._onRefresh()}
                refreshing={this.state.isRefresh}
                //加载更多
                onEndReached={() => this._onLoadMore()}
                onEndReachedThreshold={0.1}
            />
        );
    }


    /**
     * 创建头部布局
     */
    _createListHeader(){
        return (
            <View style={styles.headView}>
                <Text style={{color:'white'}}>
                    头部布局
                </Text>
            </View>
        )
    }

    /**
     * 创建头部布局
     */
    _createListFooter(){
        return (
            <View style={styles.footerView}>
                <Text style={{color:'white'}}>
                    底部底部
                </Text>
            </View>
        )
    }


    /**
     * 创建布局
     */
    _createListItem(item){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => this._onItemClick(item)}>
                <Image source={{uri:item.logo_url}} style={styles.itemImages}/>
                <Text>
                    {item.baike_name}
                </Text>
            </TouchableOpacity>
        );
    }

    /**
     * 空布局
     */
    _createEmptyView(){
        return (
            <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:16}}>
                    暂无列表数据，下啦刷新
                </Text>
            </View>
        );
    }



    /**
     * 获取360 下载列表
     * @private
     */
    _getHotList() {
        fetch("http://m.app.haosou.com/index/getData?type=1&page=" + this.page)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if(this.page === 1){
                    console.log("重新加载")
                    this.setState({
                        data: responseJson.list
                    })
                }else{
                    console.log("加载更多")
                    this.setState({
                        // 加载更多 这个变量不刷新
                        isLoadMore : false,
                        // 数据源刷新 add
                        data: this.state.data.concat(responseJson.list)
                    })
                }


            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * 下啦刷新
     * @private
     */
    _onRefresh=()=>{
        // 不处于 下拉刷新
        if(!this.state.isRefresh){
            this.page = 1
            this._getHotList()
        }
    };

    /**
     * 加载更多
     * @private
     */
    _onLoadMore(){
        // 不处于正在加载更多 && 有下拉刷新过，因为没数据的时候 会触发加载
        if (!this.state.isLoadMore && this.state.data.length > 0){
            this.page = this.page + 1
            this._getHotList()
        }
    }

    /**
     * item点击事件
     */
    _onItemClick(item){
        console.log("page" + this.state.page + " = "  + item.baike_name)
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    headView:{
        width:width,
        height:100,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    footerView:{
        width:width,
        height:100,
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    itemImages:{
        width:120,
        height:120,
        resizeMode:'stretch'
    },
});