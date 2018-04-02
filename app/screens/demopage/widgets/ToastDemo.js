import React, {PureComponent} from 'react';
import { View,Platform, StyleSheet } from "react-native";

/**
 * Description:适配android和ios的toast测试
 *
 * Author: zoe
 * Time: 2018/4/2 0002
 */
export default class ToastDemo extends PureComponent {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "测试Toast",
        headerStyle: {backgroundColor: '#fff', height: Platform.OS == "ios" ? 64 : 48},
    });

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});