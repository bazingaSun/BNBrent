import React, { Component } from 'react';
import { View,Text,Image,Button, ImageBackground,StatusBar, 
    ToastAndroid, BackHandler } from 'react-native';
import {createBottomTabNavigator,createStackNavigator,StackActions,NavigationActions} from "react-navigation"
import {MainScreen} from "./MainScreen"
import {LoginScreen} from "./LoginScreen"


class LoadingScreen extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    hidden={true}
                />
                <ImageBackground style={{flex:1}}
                source={require("./img/loading.jpg")}/>
            </View>
        )
    }
 

    // componentDidMount(){
    //     setInterval(()=>{
    //         this.props.navigation.navigate("Login")
    //         // const resetAction=StackActions.reset({
    //         //     index:0,
    //         //     actions:[
    //         //         NavigationActions.navigate({routeName:"Main"})
    //         //     ]
    //         // })
    //         // this.props.navigation.dispatch(resetAction)
    //     },2000)
// }
        //加载计时器
        componentDidMount(){
            this.timer=setTimeout(()=>{
                this.props.navigation.navigate('Login');
                
            },2000)
        }
        //卸载计时器
        componentWillUnmount(){
            this.timer&&clearTimeout(this.timer);
        }

        
}

export default  LogintoMainRoute = createStackNavigator(
    {
        Loading:{screen:LoadingScreen},
        Login:{screen:LoginScreen},
        Main:{screen:MainScreen}
        
    },
    {
        navigationOptions:{header:null}
    }
)

