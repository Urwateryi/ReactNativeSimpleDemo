import  React,{Component} from 'react';
import {View} from 'react-native';
import PropsComponent from '../../../components/PropsComponent'
/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/9/11 0011
 */
export default class PropsDemo extends Component{
    render(){
        return (
            <View>
                <PropsComponent name={'zoey'}/>
            </View>
        );
    }
}