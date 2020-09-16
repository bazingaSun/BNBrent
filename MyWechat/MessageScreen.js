import React, { Component } from 'react';
import { View,Text,Image, FlatList, TouchableOpacity,
     ToastAndroid, Alert, StatusBar, TouchableHighlight,
     BackHandler, 
     Button} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from "react-navigation"
import {TitleBar} from "./MainScreen"

var headImageArr=[require("./img/head/h0.jpg"),
                    require("./img/head/h1.jpg"),
                    require("./img/head/h2.jpg"),
                    require("./img/head/h3.jpg"),
                    require("./img/head/h4.jpg"),
                    require("./img/head/h5.jpg"),
                    require("./img/head/h6.jpg"),
                    require("./img/head/h7.jpg"),
                    require("./img/head/h8.jpg"),
                    require("./img/head/h9.jpg"),
                    require("./img/head/ca0.jpg")]
const search=require("./img/search.png")
const menu=require("./img/menu.png")
class ItemView extends Component{
    render(){
        return(
            <View style={{
                flexDirection:"row",
                // borderColor:"red",
                // borderWidth:0.5,
                height:66,
                marginLeft:12}}>
                <Image 
                    source={this.props.headImage}
                    style={{
                        width:45,
                        height:45,
                        alignSelf:"center",
                    }}
                />
                <View style={{
                     flexDirection:"row",
                     borderBottomColor:"#ccc",
                     borderBottomWidth:0.3,
                     flex:1,
                     marginLeft:12,
                }}> 
                    <View style={{
                        alignSelf:"center",
                        flex:1,
                    }}>
                        <Text style={{fontSize:14,color:"#111"}}>
                        {this.props.name}
                        </Text>
                        <Text style={{
                            fontSize:11,
                            marginTop:3,
                            color:"#888"}}
                            numberOfLines={1}>
                            {this.props.message}
                        </Text>
                    </View>
                    
                    <Text style={{
                        width:45,
                        marginRight:10,
                        fontSize:10,
                        color:"#999",
                        marginTop:17,
                        textAlign:"right",
                      
                    }}>
                        {this.props.time}
                    </Text>
                  
                </View>
            </View>
        )
    }
}

export class MessageScreen extends Component{
   
    constructor(props){
        super(props);
        this.state={
            msgArr:["嗯嗯","小龙虾走起","借我1000，发公鸡还你",
            "十六城房价地图新鲜出炉,帮你算清楼市这笔账", "阿宝六一礼物收到了","微信支付凭证",
            "明日起，这10项新举措全面实施！蜀黍做客民心桥","[图片]","6月1日开门红火热开抢！",
            "听说，你都被这些水果骗过","哈哈"],
        }
    }
    
    render(){

        var dataArr=new Array()
        var nameArr=["小黄人","先花","骚骚","贝壳找房","姐","微信支付",
        "深圳交警","文件传输助手","京东JD.COM","百果园","Aike"]
        var timeArr=["早上10:59","早上10:50","早上10:12","早上10:02",
        "凌晨12:33","昨天","昨天","昨天","昨天","昨天","昨天"]
        for(i=0;i<nameArr.length;i++){
            var msgItem={id:i,headImage:headImageArr[i],name:nameArr[i],
                message:this.state.msgArr[i],time:timeArr[i]}
            dataArr.push(msgItem)
        }

        return(
            <View style={{
                flex:1
            }}>
                <StatusBar
                    backgroundColor="#e6e5e5"
                    barStyle="dark-content"

                />
                <TitleBar
                     title="微信(2)"
                     isShowIcon1={true}
                     icon1={search}
                     isShowIcon2={true}
                     icon2={menu}
                     isShowBack={false}
                />
                <FlatList
                 ref={(flatList)=>this.flatList = flatList}
                    style={{
                        backgroundColor:"#fff"
                    }}
                    data={dataArr}
                    renderItem={({item})=>{
                        return(
                            <TouchableHighlight
                                underlayColor="#ddd"
                                // activeOpacity={0.5}
                                onPress={()=>{
                                    this.props.navigation.navigate(
                                    "Chat",
                                    {
                                        id:item.id,
                                        friend:item.name,
                                        headImage:item.headImage,
                                        refresh:(id,message)=>{
                                       // ToastAndroid.show(id+message,ToastAndroid.SHORT)
                                            var newMsgArr=this.state.msgArr
                                            newMsgArr[id]=message
                                            this.setState({msgArr:newMsgArr})
                                        }
                                    }
                                )
                               // this.flatList.scrollToEnd()
                            }}
                            
                            >
                                <ItemView
                                    headImage={item.headImage}
                                    name={item.name}
                                    message={item.message}
                                    time={item.time}
                                />
                            </TouchableHighlight> 
                        )
                        
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                    />
            </View>
        )
    }

}
