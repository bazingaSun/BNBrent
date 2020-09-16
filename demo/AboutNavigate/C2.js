import React, { Component } from 'react';
import { Text,Button } from 'react-native';


export class C2 extends Component{
    render(){
        return(
            <Button
                title="我是页面C2，点击跳转到E"
                onPress={()=>{
                    this.props.navigation.navigate("E")
                }}
            />
        )
    }
}