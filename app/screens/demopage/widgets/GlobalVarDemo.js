import {Component} from "react";
import {Dimensions, Platform, StyleSheet} from "react-native";

/**
 * Description:全局变量应用
 *
 * Author: zoe
 * Time: 2018/3/20 0020
 */
export default class GlobalVarDemo extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: "GlobalVarDemo",
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