/**
 * Description:
 */
import React, {Component} from 'React'
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableHighlight,
    TouchableNativeFeedback,
    View
} from 'react-native';
import {Images} from "../../resources";

export default class UIPage extends Component {
    _onPressTouchableOpacity() {
        alert("TouchableOpacity")
    }

    //TouchableWithoutFeedback的单击效果
    _onPressTouchableWithoutFeedback() {
        alert("TouchableWithoutFeedback")
    }

    //TouchableWithoutFeedback的长按效果
    _onLongPressTouchableWithoutFeedback() {
        alert("Long Press TouchableWithoutFeedback")
    }

    //为了支持Android5.0新增的触控反馈，React Native加入了TouchableNativeFeedback组件，TouchableNativeFeedback在TouchableWithoutFeedback所支持的属性的基础上增加了按下去的水波纹效果
    _onPressTouchableNativeFeedback() {
        alert("TouchableNativeFeedback")
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[styles.height160, styles.row, styles.border_buttom_1]}>
                    <TouchableOpacity activeOpacity={0.7}
                                      style={[styles.flex1, styles.border_right_half_of_1, styles.justifyCenter]}
                                      onPress={this._onPressTouchableOpacity}>
                        <Text style={styles.green14}>我们约会吧</Text>
                        <Text style={[styles.gray, styles.font11, styles.marginTop5]}>恋爱家人好朋友</Text>
                        <Image style={styles.ic_100} source={Images.test_ui_icon.ic_1}/>
                    </TouchableOpacity>

                    <View style={styles.flex2}>
                        <TouchableWithoutFeedback onPress={this._onPressTouchableWithoutFeedback}
                                                  onLongPress={this._onLongPressTouchableWithoutFeedback}>
                            <View style={[styles.flex1, styles.row, styles.border_buttom_half_of_1]}>
                                <View style={[styles.flex1, styles.justifyCenter]}>
                                    <Text style={[styles.red, styles.font14]}>超值低价 </Text>
                                    <Text style={[styles.gray, styles.font11, styles.marginTop5]}> 十元惠生活</Text>
                                </View>
                                <View style={[styles.flex1, styles.justifyCenter]}>
                                    <Image style={styles.ic_60} source={Images.test_ui_icon.ic_2}/>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={[styles.flex1, styles.row]}>
                            <View style={[styles.border_right_half_of_1, styles.flex1, styles.justifyCenter]}>
                                <Text style={styles.green14}>聚餐宴请</Text>
                                <Text style={[styles.gray, styles.font11, styles.marginTop5]}>朋友家人常聚餐</Text>
                                <TouchableHighlight
                                    style={{marginTop: 20}}
                                    activeOpacity={0.7}
                                    underlayColor='green'
                                    onHideUnderlay={() => {
                                        this.setState({text: '衬底被隐藏'})
                                    }}
                                    onShowUnderlay={() => {
                                        this.setState({text: '衬底显示'})
                                    }}
                                    onPress={() => {

                                    }}
                                >
                                    <Image style={styles.ic_30} source={Images.test_ui_icon.ic_3}/>
                                </TouchableHighlight>
                            </View>
                            <View style={[styles.part_2_right, styles.flex1, styles.justifyCenter]}>
                                <Text style={styles.green14}>名店抢购</Text>
                                <Text style={[styles.gray, styles.font11, styles.marginTop5]}>还有</Text>

                                <Text style={styles.gray}>12:06:12分</Text>

                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={[styles.height160, styles.row, styles.marginTop10, styles.padding5, styles.border_buttom_1]}>

                    <View style={styles.flex1}>
                        <View style={[styles.flex1, styles.light_gray, styles.justifyCenter]}>
                            <Text style={styles.green14}>红火来袭</Text>
                            <Text style={[styles.gray, styles.font11, styles.marginTop5]}>优雅吃小龙虾</Text>
                            <Image style={styles.ic_80} source={Images.test_ui_icon.ic_4}/>
                        </View>
                        <Image style={[styles.ic_80, styles.frame_layout]} source={Images.test_ui_icon.ic_tag}/>
                    </View>
                    <View style={[styles.flex1, styles.part_1_right, styles.marginLeft2]}>
                        <View style={[styles.flex1, styles.row, styles.light_gray]}>
                            <View style={[styles.flex1, styles.justifyCenter]}>
                                <Text style={[styles.red, styles.font12]}>男女搭配 </Text>
                                <Text style={[styles.gray, styles.font11, styles.marginTop5]}> 齐心对抗地震</Text>
                            </View>
                            <View style={[styles.flex1, styles.justifyCenter]}>
                                <Image style={styles.ic_40} source={Images.test_ui_icon.ic_6}/>
                            </View>
                        </View>
                        <View style={[styles.flex1, styles.row, styles.light_gray, styles.marginTop2]}>
                            <View style={[styles.flex1, styles.justifyCenter]}>
                                <Text style={[styles.red, styles.font12]}>六月玩海 </Text>
                                <Text style={[styles.gray, styles.font11, styles.marginTop5]}> 端午出行攻略</Text>
                            </View>
                            <View style={[styles.flex1, styles.justifyCenter]}>
                                <TouchableNativeFeedback onPress={this._onPressTouchableNativeFeedback()}
                                                         background={TouchableNativeFeedback.SelectableBackground()}>
                                    <Image style={styles.ic_40} source={Images.test_ui_icon.ic_7}/>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2"
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    padding5: {
        padding: 5,
    },
    padding10: {
        padding: 10,
    },
    paddingTop10: {
        paddingTop: 10,
    },
    paddingTop20: {
        paddingTop: 20,
    },
    marginTop5: {
        marginTop: 5,
    },
    marginLeft2: {
        marginLeft: 2,
    },
    marginTop2: {
        marginTop: 2,
    },
    marginLeft5: {
        marginLeft: 5,
    },
    marginBottom5: {
        marginBottom: 5,
    },
    marginTop10: {
        marginTop: 10,
    },
    margin10: {
        margin: 10,
    },
    marginTop20: {
        marginTop: 20,
    },
    font12: {
        fontSize: 12,
    },
    font11: {
        fontSize: 11,
    },
    font14: {
        fontSize: 14,
    },
    font30: {
        fontSize: 30,
    },
    height100: {
        height: 100,
    },
    height160: {
        height: 160,
    },
    green14: {
        color: '#55A44B',
        fontWeight: '900'
    },
    red: {
        color: '#FF3F0D',
    },
    gray: {
        color: '#333333',
    },
    light_gray: {
        backgroundColor: '#f6f6f6',
    },
    part_1_left: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    justifyCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    border_right_half_of_1: {
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
    },
    border_buttom_half_of_1: {
        borderColor: '#DCD7CD',
        borderBottomWidth: 0.5,
    },
    border_buttom_1: {
        borderColor: '#DCD7CD',
        borderBottomWidth: 0.8,
    },
    ic_100: {
        height: 100,
        width: 100
    },
    ic_80: {
        height: 80,
        width: 80
    },
    ic_60: {
        height: 60,
        width: 60
    },
    ic_40: {
        height: 40,
        width: 40
    },
    ic_30: {
        height: 30,
        width: 30
    },
    frame_layout: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
});