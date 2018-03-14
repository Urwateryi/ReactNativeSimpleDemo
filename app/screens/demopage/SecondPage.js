/**
 * Description:第二页
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import {Images} from "../../resources";

export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <IScrolledDownAndWhatHappenedNextShockedMe/>
            </View>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={Images.home_button.ic_create_normal} style={styles.pics}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={Images.home_button.ic_create_select} style={styles.pics}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={Images.home_button.ic_info_normal} style={styles.pics}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={Images.home_button.ic_msg_select} style={styles.pics}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={Images.home_button.ic_search_select} style={styles.pics}/>
                <Text style={{fontSize: 80}}>React Native</Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    }, one: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    }, pics: {
        flex: 1,
        width: 300,
        height: 300,
    }
});