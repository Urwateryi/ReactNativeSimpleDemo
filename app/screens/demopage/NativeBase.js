/**
 * Description:
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {Container, StyleProvider, Text} from "native-base";

export default class NativeBaseTest extends Component {
    render() {
        return (
            <StyleProvider>
                <Container>
                    <Header>

                    </Header>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',//当前容器使用什么布局
        justifyContent: 'space-around',//定制主轴
        alignItems: 'stretch',//定制副轴
        alignContent: 'flex-start',
        backgroundColor: '#f2f2f2',
    }, text: {
        fontSize: 50,
        textAlign: 'center',
        color: '#333333',
    }
})