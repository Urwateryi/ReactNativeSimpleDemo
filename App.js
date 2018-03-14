import { StackNavigator, TabNavigator} from 'react-navigation';

import TextPage from './app/screens/demopage/TextPage'
import SecondPage from './app/screens/demopage/SecondPage'
import ThirdPage from './app/screens/demopage/ThirdPage'
import FourPage from './app/screens/demopage/FourPage'
import FivePage from "./app/screens/demopage/FivePage";

import MainDemo from "./app/screens/demopage/MainDemo";
import MainCreate from './app/screens/createpage/MainCreate'
import MainFound from './app/screens/foundpage/MainFound'
import MainMsg from './app/screens/msgpage/MainMsg'
import MainMine from './app/screens/minepage/MainMine'
import React from "react";

import {Images} from "./app/resources";
import TabBarItem from './app/components/TabBarItem';

const HomeTab = TabNavigator({
    MainDemo: {
        screen: MainDemo,
        navigationOptions:({navigation}) => ({
            title:'首页',
            tabBarLabel:'demo',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    focused={focused}
                    normalImage={Images.home_button.ic_info_normal}
                    selectedImage={Images.home_button.ic_info_select}
                />
            )
        }),},
        MainFound:{
            screen:MainFound,
            navigationOptions:({navigation}) => ({
                title:'发现',
                tabBarLabel:'found',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_search_normal}
                        selectedImage={Images.home_button.ic_search_select}
                    />
                )
            }),},
        MainCreate:{
             screen:MainCreate,
            navigationOptions:({navigation}) => ({
                headerTitle:'新建',
                tabBarLabel:'create',
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={Images.home_button.ic_create_normal}
                        selectedImage={Images.home_button.ic_create_select}
                    />
                )
            }),
        },

    MainMsg:{
        screen:MainMsg,
        navigationOptions:({navigation}) => ({
            headerTitle:'消息',
            tabBarLabel:'msg',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={Images.home_button.ic_msg_normal}
                    selectedImage={Images.home_button.ic_msg_select}
                />
            )
        }),
    },
    MainMine:{
        screen:MainMine,
        navigationOptions:({navigation}) => ({
            headerTitle:'我的',
            tabBarLabel:'mine',
            tabBarIcon:({focused,tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={Images.home_button.ic_my_normal}
                    selectedImage={Images.home_button.ic_my_select}
                />
            )
        }),
    },
},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:true,
    lazy:true,
    tabBarOptions:{
        activeTintColor:'#d81e06',
        inactiveTintColor:'#979797',
        showIcon:true,
        showLabel:true,
        style:{backgroundColor:'#ffffff',},
        labelStyle: {
            fontSize: 8, // 文字大小
        },
        //选项卡样式
        tabStyle:{
            bottom:-6,
            height:55,
        },
        //去掉安卓点击之后的小黄线
        indicatorStyle: {
            height: 0
        },
    }}
);

// 导航器、任务栈
const AllNavigator = StackNavigator({
    // 所有页面，第一个优先显示
    HomePage: { screen: HomeTab },
    TextPage: {
        screen: TextPage,
        navigationOptions:{
            headerTitle:'Text'
        }
    },
    SecondPage:{ screen:SecondPage},
    ThirdPage:{ screen:ThirdPage},
    FourPage:{ screen:FourPage},
    FivePage:{screen:FivePage},
});

export default AllNavigator;
