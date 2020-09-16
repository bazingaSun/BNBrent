import React, { Component } from 'react'
import { Text } from 'react-native'

export class RentListScreen extends Component{
    
    render(){
        const city=this.props.navigation.state.params.cityData

        return(
        <Text>{city}</Text>
        )
    }
}