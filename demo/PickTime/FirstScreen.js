import React, { Component } from 'react'
import { View,Text,TouchableOpacity, Button } from 'react-native'
import {createStackNavigator} from "react-navigation"
import {PickTimeScreen} from "./PickTimeScreen"
import {RentListScreen} from "./RentListScreen"
import {pickTimeArr} from "./data"

const weekDayArr=["周日","周一","周二","周三","周四","周五","周六"]
export  class FirstScreen extends Component{
    constructor(props){
        super(props)
        this.state=({
            startDate:pickTimeArr[0],
            endDate:pickTimeArr[1],
        })
    }

    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("PickTime",{
                            refresh:()=>{
                                this.setState({
                                    startDate:pickTimeArr[0],
                                    endDate:pickTimeArr[1],
                                })
                            }
                        })
                    }}>
                    <View>
                        <Text>{this.state.startDate.format("MM月DD日")}</Text>
                        <Text>{weekDayArr[this.state.startDate.format("d")]}</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{marginHorizontal:20}}>
                    共{this.state.endDate.diff(this.state.startDate,"days")}晚
                </Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("PickTime",{
                            refresh:()=>{
                                this.setState({
                                    startDate:pickTimeArr[0],
                                    endDate:pickTimeArr[1],
                                })
                            }
                        })
                    }}>
                    <View>
                        <Text>{this.state.endDate.format("MM月DD日")}</Text>
                        <Text>{weekDayArr[this.state.endDate.format("d")]}</Text>
                    </View>
                </TouchableOpacity>
               <Button
                    title="搜索房源"
                    onPress={()=>{this.props.navigation.navigate("RentList")}}
               />
            </View>
        )
    }
}

export default Stack=createStackNavigator(
    {
        First:{screen:FirstScreen},
        PickTime:{screen:PickTimeScreen},       
        RentList:{screen:RentListScreen}
    },
    {
        navigationOptions:{header:null}
    }
)