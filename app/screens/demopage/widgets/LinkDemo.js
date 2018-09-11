import React, { Component } from 'react'
import {
    View,
    Text,
    Linking,
} from 'react-native'

/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/9/10 0010
 */

export default class LinkDemo extends Component {

    link() {
        url = "https://www.baidu.com";
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <View>
                <Text onPress={() => this.link()}>click</Text>
            </View>
        );
    }
}