import React, {PureComponent} from 'react';
import {StyleSheet, Image,View} from 'react-native';

import Images from "./resources/Images";
import {TabNavigator} from 'react-navigation';

import MainDemo from './screens/demopage/MainDemo'
import MainCreate from './screens/createpage/MainCreate'
import MainFound from './screens/foundpage/MainFound'
import MainMsg from './screens/msgpage/MainMsg'
import MainMine from './screens/minepage/MainMine'
import Colors from "./resources/Colors";

/**
 * Description:首页
 */
export default class HomePage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            //初始页面
            selectedTab:'demo'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator >
                    {this._renderTabarItems('demo',Images.home_button.ic_info_normal,Images.home_button.ic_info_select,MainDemo)}
                    {this._renderTabarItems('发现',Images.home_button.ic_search_normal,Images.home_button.ic_search_select,MainFound)}
                    {this._renderTabarItems('新建',Images.home_button.ic_create_normal,Images.home_button.ic_create_select,MainCreate)}
                    {this._renderTabarItems('消息',Images.home_button.ic_msg_normal,Images.home_button.ic_msg_select,MainMsg)}
                    {this._renderTabarItems('我的',Images.home_button.ic_my_normal,Images.home_button.ic_my_select,MainMine)}
                </TabNavigator>
            </View>
        );
    }

    _renderTabarItems(selectedTab,icon,selectedIcon,PureComponent){
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={selectedTab}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={() => <Image style={styles.icon} source={icon} />}
                renderSelectedIcon={() => <Image style={styles.icon} source={selectedIcon} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}
            >
                <PureComponent />
            </TabNavigator.Item>
        )
    }
}

// 样式有多个属性，最好定义在外面
const styles = StyleSheet.create({
    // 容器样式
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor:Colors.bg,
    }, selectedTabText:{
        color:Colors.primary
    }, nani: {
        flexDirection: 'row',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'center',//定制副轴
        height: 80,
        backgroundColor: 'white'
    }, navigation: {
        width: 40,
        height: 40
    }, icon:{
        width:20,
        height:20
    },tabText:{
        color:'black',
        fontSize:10
    }
});
