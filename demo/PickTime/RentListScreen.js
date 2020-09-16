import React, { Component } from 'react'
import { Text,View} from 'react-native'
import {pickTimeArr} from "./data"

export class RentListScreen extends Component{
    render(){
        return(
            <View>
                <Text>
                    {pickTimeArr[0].format("MM-DD")}
                </Text>
                <Text>
                    {pickTimeArr[1].format("MM-DD")}    
                </Text>
        </View>
        )
        
    }
}