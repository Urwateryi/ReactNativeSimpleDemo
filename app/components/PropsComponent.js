import  React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
/**
 * Description:
 *
 * Author: zoe
 * Time: 2018/9/11 0011
 */
export default class PropsComponent extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>姓名：{this.props.name}</Text>
                <Text style={styles.text}>年龄：{this.props.age}</Text>
                <Text style={styles.text}>邮箱：{this.props.email}</Text>
            </View>
        );
    }
}

//添加属性确认
PropsComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age:PropTypes.number,
    email:PropTypes.string
};

const styles=StyleSheet.create({
   container:{
       backgroundColor:'#fff',
       flexDirection:'column'
   },
    text:{
        fontSize :20,
        color:'#000',
        marginBottom:10
    }
});