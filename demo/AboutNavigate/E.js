import React, { Component } from 'react';
import { Text,Button} from 'react-native';


export class E extends Component{
    render(){
        return(
            <Button
                title="我是页面E，点击跳转到C2"
                onPress={()=>{
                    this.props.navigation.navigate("C2")
                }}
            />
        )
    }
}