import {StackNavigator, TabNavigator} from 'react-navigation';
import React from "react";

import Images from "./app/resources/Images";
import TabBarItem from './app/components/TabBarItem';
import {Platform} from "react-native";

import MainDemo from "./app/screens/demopage/MainDemo";
import MainCreate from './app/screens/createpage/MainCreate'
import MainFound from './app/screens/foundpage/MainFound'
import MainMsg from './app/screens/msgpage/MainMsg'
import MainMine from './app/screens/minepage/MainMine'

import TextDemo from './app/screens/demopage/widgets/TextDemo'
import ImageDemo from './app/screens/demopage/widgets/ImageDemo'
import CameraDemo from "./app/screens/demopage/widgets/CameraDemo";
import ImageBackGroundDemo from "./app/screens/demopage/widgets/ImageBackGroundDemo";
import InputDemo from "./app/screens/demopage/widgets/InputDemo";
import ButtonDemo from "./app/screens/demopage/widgets/ButtonDemo";
import ScrollViewDemo from "./app/screens/demopage/widgets/ScrollViewDemo";
import RefDemo from "./app/screens/demopage/widgets/RefDemo";
import WebViewDemo from "./app/screens/demopage/widgets/WebViewDemo";
import StorageDemo from "./app/screens/demopage/widgets/StorageDemo";
import RefreshDemo from "./app/screens/demopage/widgets/RefreshDemo";
import SectionListDemo from "./app/screens/demopage/widgets/SectionListDemo";

//构造方法为TabNavigator(RouteConfigs, TabNavigatorConfig)
const HomeTab = TabNavigator(
    //下面为参数RouteConfigs
    {
        MainDemo: {
            screen: MainDemo,
            navigationOptions: ({navigation}) => ({
                title: '首页',
                tabBarLabel: 'demo',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        focused={focused}
                        normalImage={Images.home_button.ic_info_normal}
                        selectedImage={Images.home_button.ic_info_select}
                    />
                )
            }),
        },
        MainFound: {
            screen: MainFound,
            navigationOptions: ({navigation}) => ({
                title: '发现',
                tabBarLabel: 'found',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_search_normal}
                        selectedImage={Images.home_button.ic_search_select}
                    />
                )
            }),
        },
        MainCreate: {
            screen: MainCreate,
            navigationOptions: ({navigation}) => ({
                title: '新建',
                tabBarLabel: 'create',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_create_normal}
                        selectedImage={Images.home_button.ic_create_select}
                    />
                )
            }),
        },

        MainMsg: {
            screen: MainMsg,
            navigationOptions: ({navigation}) => ({
                title: '消息',
                tabBarLabel: 'msg',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_msg_normal}
                        selectedImage={Images.home_button.ic_msg_select}
                    />
                )
            }),
        },
        MainMine: {
            screen: MainMine,
            navigationOptions: ({navigation}) => ({
                title: '我的',
                tabBarLabel: 'mine',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_my_normal}
                        selectedImage={Images.home_button.ic_my_select}
                    />
                )
            }),
        },
    },
    //下面为参数TabNavigatorConfig
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#d81e06',
            inactiveTintColor: '#979797',
            showIcon: true,
            showLabel: true,
            style: {backgroundColor: '#ffffff',},
            labelStyle: {
                fontSize: 8, // 文字大小
            },
            //选项卡样式
            tabStyle: {
                bottom:Platform.OS=="ios"? 0: -6,//默认没有垂直居中，所以暂时先这么写，找到更好的办法的时候再做替换
                height: 60,
            },
            //去掉安卓点击之后的小黄线
            indicatorStyle: {
                height: 0
            },
        }
    }
);

// 导航器、任务栈
//构造方法为StackNavigator(RouteConfigs, StackNavigatorConfig)
const AllNavigator = StackNavigator(
    //下面为参数RouteConfigs，它主要是来配置页面路由的，类似与Android的Manifest.xml，所有的界面都必须配置在里面。如下：
    {
        // 所有页面，第一个优先显示
        HomePage: {screen: HomeTab},

        TextDemo:{
            screen:TextDemo,
            navigationOptions: {
                title: 'Text',//这里我们配置了首页和第二个页面，并且配置了标题参数。当然，如果你不想在路由里面配置页面的参数，你也可以在页面中配置，需要在页面中定义一个静态常量navigationOptions
            }},
        ImageDemo:{screen:ImageDemo},
        CameraDemo:{screen:CameraDemo},
        ImageBackGroundDemo:{screen:ImageBackGroundDemo},
        InputDemo:{screen:InputDemo},
        ButtonDemo:{screen:ButtonDemo},
        ScrollViewDemo:{screen:ScrollViewDemo},
        RefDemo:{screen:RefDemo},
        WebViewDemo:{screen:WebViewDemo},
        StorageDemo:{screen:StorageDemo},
        RefreshDemo:{screen:RefreshDemo},
        SectionListDemo:{screen:SectionListDemo}
    },
//还可以有参数StackNavigatorConfig，这个参数主要是配置整个路由的，包括跳转动画，跳转方式等。
    {
        // initialRouteName: 'TextDemo',//初始化哪个界面为根界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        // cardStyle:({backgroundColor:'red'}),//不是说说背景色吗，为啥是跳转的渐变色？


    }
);

export default AllNavigator;
