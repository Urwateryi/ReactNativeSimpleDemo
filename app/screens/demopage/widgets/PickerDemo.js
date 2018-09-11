/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/9/10 0010
 */
import React, { PureComponent } from 'react'
import {
    View,
    Picker,
    DatePickerAndroid
} from 'react-native'

export default class PickerDemo extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            language : '',
        };
    }

    render() {
        return (<View>
            <Picker
                selectedValue={this.state.language}
                style={{ height : 50, width : 100 }}
                // mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) => this.setState({ language : itemValue })}>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>

            <DatePickerAndroid>


            </DatePickerAndroid>
        </View>);
    }
}