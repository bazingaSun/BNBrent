import React, { Component } from 'react';
import { View,Text,Image, ImageBackground,
    TouchableOpacity,BackHandler } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from "react-navigation"
import {ContactsScreen} from "./ContactsScreen"
import {MessageToChatRoute} from "./ChatScreen"
import { LoginScreen } from './LoginScreen';

const MainRoute =createBottomTabNavigator(
    {
        Message:{
            screen:MessageToChatRoute,
            navigationOptions:{
                    // 渲染图标
                    tabBarIcon:({focused})=>renderTabBar("icon",0,focused),
                    //渲染标签文本
                    tabBarLabel:({focused})=>renderTabBar("label",0,focused)
            }
          
        },
        Contacts:{
            screen:ContactsScreen,
            navigationOptions:{
                  // 渲染图标
                  tabBarIcon:({focused})=>renderTabBar("icon",1,focused),
                  //渲染标签文本
                  tabBarLabel:({focused})=>renderTabBar("label",1,focused)
        }
        }
    },
    {
        //设置
        tabBarOptions:{
          // showLabel:false,
           style:{backgroundColor:"#eee",height:44}
        },
        swipeEnabled:true
    }
)
function renderTabBar(part,page,focused){
   
    if(part=="icon"){
        if(page==0){
            icon=focused?require("./img/message_f.png"):require("./img/message_nof.png")

        }else{
            icon=focused?require("./img/contacts_f.png"):require("./img/contacts_nof.png")

        }
        return <ImageBackground style={{width:26,height:26}}source={icon}/>
    }else{
        label=page==0?"微信":"通讯录"
        color=focused?"#07C160":"black"
        return <Text style={{color:color,fontSize:10,alignSelf:"center"}}>{label}</Text>
    }
}


const back=require("./img/back.png")
// 标题栏
export class TitleBar extends Component{
    render(){
        return(
             
        <View style={{
        height:36,
        backgroundColor:"#e6e5e5",
        flexDirection:"row",
        alignItems:"center"
        }}>
            {/* 返回按钮 */}
             <TouchableOpacity
                    onPress={()=>{
                        this.props.onPress()
                    }}
                    style={{display:this.props.isShowBack?"flex":"none"}}                 
                >
                    <Image
                    source={back}
                    style={{
                        width:20,
                        height:20,
                        marginLeft:5,
                    }}
                />
            </TouchableOpacity>
            <Text style={{
                 marginLeft:8,
                 fontSize:this.props.routeIndex==1?17:15,
                 color:"#000",
                 flex:1,
                 fontWeight:this.props.routeIndex==1?"400":"normal"
                //  borderColor:"red",
                //  borderWidth:1
            }}>
                {this.props.title}
            </Text>
            <Image
                style={{
                    width:20,
                    height:20, 
                    marginRight:25,
                    display:this.props.isShowIcon1?"flex":"none"
                }}
                source={this.props.icon1}
            />
             <Image
                style={{
                    width:18,
                    height:18, 
                    marginRight:15,
                    display:this.props.isShowIcon2?"flex":"none"
                }}
                source={this.props.icon2}
            />
        </View>
        )
         
    }
}
export  class MainScreen extends Component{
        
    // componentDidMount(){
    //     BackHandler.removeEventListener("hardwareBackPress",)
    //   }
      
    render(){
        return (<MainRoute/>)
    }  
}

