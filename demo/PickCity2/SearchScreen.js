import React, { Component } from 'react'
import {Text,View,TouchableOpacity, ToastAndroid } from 'react-native'
import {CityListScreen} from "./CityListScreen"
import {RentListScreen} from "./RentListScreen"
import {createStackNavigator} from "react-navigation"

class SearchScreen extends Component{
    //state第一步：初始化state
    constructor(props){
        super(props)
        this.state={
            city:"城市/景点/地标"
        }
    }
    render(){
        return(
            <View style={{flexDirection:"row",margin:30}}> 
                <Text style={{fontSize:18}}>搜索  </Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate("CityList")
                    }}>
                    {/* state第三步:取出state中的值，进行渲染 */}
                <Text style={{color:"#aaa",fontSize:18}}>{this.state.city}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Stack=createStackNavigator(
    {
        Search:{screen:SearchScreen},
        CityList:{screen:CityListScreen},
        RentList:{screen:RentListScreen}
    },
    {
        navigationOptions:{header:null}
    }
)