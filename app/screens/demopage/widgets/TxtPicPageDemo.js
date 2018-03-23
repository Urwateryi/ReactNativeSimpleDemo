/**
 * Description:图文界面demo
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

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

var datas = [];
for (var i = 0;
    i < 50;
    i++) {
    datas.push({ key : '标题' + i, content : i + '条内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' });
}

export default class TxtPicPageDemo extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle : "图文列表",
        headerStyle : { backgroundColor : '#fff', height : Platform.OS == "ios" ? 64 : 48 },
    });

    constructor(props) {
        super(props);
        //状态
        this.state = {
            // 下拉刷新
            isRefresh : false,
        }
    }

    //Item布局
    renderItem({ item }) {
        return (
            <TouchableOpacity style={styles.item} activeOpacity={1} onPress={this.clickItem.bind(this, item)}>
                <ItemPic1 source={Images.other_test.bg_beauty} style={{ flex : 0.25, margin : 5 }}/>
                <View style={styles.txt_container}>
                    <Heading2 numberOfLines={1}>
                        {item.key}
                    </Heading2>

                    <Paragraph numberOfLines={2}>
                        {item.content}
                    </Paragraph>
                </View>
            </TouchableOpacity>
        )
    }

    //点击列表点击每一行
    clickItem(item) {
        alert(item.content)
    }

    //此函数用于为给定的item生成一个不重复的key
    _keyExtractor = (item) => item.key;

    render() {
        return (
            <AnimatedFlatList
                data={datas}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem.bind(this)}

                //添加头尾布局
                ListHeaderComponent={HeaderComponent}
                ListFooterComponent={FooterComponent}
                //下拉刷新相关
                onRefresh={() => {
                    alert('下拉哦')
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