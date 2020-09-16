import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {nameArr} from "./data"
import {priceArr} from "./data"


export  class RentDetailScreen extends Component{
    render(){
        //获取从上一个页面携带过来的参数
        const data=this.props.navigation.state.params
        //从参数中取出数据id
        const id=data.id
        return(
            <View>
                <Text>
                    {/* 通过id从nameArr中获取到对应的值 */}
                    {nameArr[id]}
                </Text>
                <Text>
                     {/* 通过id从priceArr中获取到对应的值 */}
                     {"￥"+priceArr[id]}
                </Text>
            </View>
        )
    }
}