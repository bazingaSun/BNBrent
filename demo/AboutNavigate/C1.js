import React, { Component } from 'react';
import { Text,Button,ToastAndroid } from 'react-native';
import {createStackNavigator} from "react-navigation"
import {D} from "./D"
import {E} from "./E"

export class C1 extends Component{
    render(){
        return(
            <Button
                title="我是页面C1，点击跳转到D"
                onPress={()=>{
                    this.props.navigation.navigate("D")
                }}
            />
        )
    }
}

export const C1toEStack =createStackNavigator(
    {
        C1:{screen:C1},
        D:{screen:D}, 
        E:{screen:E},       
    },
    {
        navigationOptions:{header:null}
    }
)

//取消D及后续页面的底部导航
C1toEStack.navigationOptions=({navigation})=>{
    return {
        tabBarVisible:navigation.state.index==0
    }
}

