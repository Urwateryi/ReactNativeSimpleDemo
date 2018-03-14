/**
 * Description:图片按钮
 */
import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

//导出方式1：ES6 直接使用export default就可以导出了
export default class ImageButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={this.props.onPress}>
                {this._renderImg()}
            </TouchableOpacity>
        )
    }
    _renderImg(){
        if(this.props.defaultSource){
            return (
                <Image
                    style={this.props.style}
                    source={this.props.defaultSource}
                >
                    <Image
                        style={this.props.style}
                        source={this.props.source}
                    >
                        {this.props.children}
                    </Image>
                </Image>
            )
        }else {
            return (
                <Image
                    style={this.props.style}
                    source={this.props.source}
                >
                    {this.props.children}
                </Image>
            )
        }
    }
}

// //导出方式2：ES5
// module.exports=ImageButton;