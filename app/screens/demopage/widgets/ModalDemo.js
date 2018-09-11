import React, { Component } from "react";
import { Modal, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class ModalDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false,
        };
    }

    show() {
        this.state = {
            visible : true,
        };
    }

    dismiss() {
        this.state = {
            visible : false,
        };
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({});