import React, { Component } from 'react';
import { Text,Button } from 'react-native';
import {createStackNavigator} from "react-navigation"

import {TabbarStack} from "./C"

class B extends Component{
    render(){
        return(
            <Button
                title="我是页面B，点击跳转到C"
                onPress={()=>{
                    this.props.navigation.navigate("C")
                }}
            />
        )
    }
}
export default BtoCStack =createStackNavigator(
    {
        B:{screen:B},
        C:{screen:TabbarStack},
    },
    {
        navigationOptions:{header:null}
    }
)