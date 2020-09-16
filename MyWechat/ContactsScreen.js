import React, { Component } from 'react';
import { View,Text,Image, Geolocation, ToastAndroid, NetInfo, FlatList, SectionList, ScrollView } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from "react-navigation"
import {TitleBar} from "./MainScreen"

const search=require("./img/search.png")
const menu=require("./img/menu.png")
const item1=require("./img/item1.png")
const item2=require("./img/item2.png")
const item3=require("./img/item3.png")
const item4=require("./img/item4.png")


const headImageArr=[require("./img/head/ca0.jpg"),
                    require("./img/head/ca1.jpg"),
                    require("./img/head/ca2.jpg"),
                    require("./img/head/cb0.jpg"),
                    require("./img/head/cb1.jpg"),
                    require("./img/head/cb2.jpg"),
                    require("./img/head/cc1.jpg"),
                    require("./img/head/h0.jpg"),
                    require("./img/head/h1.jpg"),
                    require("./img/head/cc4.jpg"),
]
var sectionsArr=[
        {title:"",data:[{icon:item1,name:"新的朋友"},
                        {icon:item2,name:"群聊"},
                        {icon:item3,name:"标签"},
                        {icon:item4,name:"公众号"}]},
        {title:"A",data:[{icon:headImageArr[0],name:'Ankie'},
                    {icon:headImageArr[1],name:"A-武汉链家-新世界恒大华府"},
                    {icon:headImageArr[2],name:"A-yangyang"}]},
        {title:"B",data:[{icon:headImageArr[3],name:"百果园科技园一体仓"},
                        {icon:headImageArr[4],name:"爸爸"},
                        {icon:headImageArr[5],name:"冰火"}]},
        {title:"C",data:[{icon:headImageArr[6],name:"陈立彬"},
                        {icon:headImageArr[7],name:"陈建斌"},
                        {icon:require("./img/head/h0.jpg"),name:"储慧君"},
                        {icon:require("./img/head/h0.jpg"),name:"C龙天"}]}
    ]
export class ContactsScreen extends Component{
   render(){
       return(
           <View style={{flex:1,backgroundColor:"#fff"}}>
                 {/* 标题栏 */}
                <TitleBar
                    title="通讯录"
                    isShowIcon1={true}
                    icon1={search}
                    isShowIcon2={true}
                    icon2={menu}
                    isShowBack={false}
                />
                {/* 分组列表 */}
                <SectionList
                    style={{flex:1}}
                    sections={sectionsArr}
                    renderSectionHeader={({section})=>{
                        return(
                            <Text style={{
                                backgroundColor:"#eee",
                                fontSize:14,
                                paddingLeft:14,
                                paddingVertical:4,
                                display:section.title==""?"none":"flex"
                            }}>
                                {section.title}
                            </Text>
                        )
                    }}
                    renderItem={({item})=>{
                            return(
                                <ItemView
                                    icon={item.icon}
                                    title={item.name}
                                />
                            )
                    
                    }}
                    //为给定的item生成一个不重复的key
                    keyExtractor={(item,index)=>index}
                />
               
           </View>
       )
   }
}

class ItemView extends Component{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <Image source={this.props.icon}
                style={{ 
                    width:30,
                    height:30,
                    marginLeft:15,
                    marginVertical:7,
                    borderRadius:3}}/>
                <View
                    style={{
                        borderBottomWidth:0.3,
                        borderColor:"#cdcdcd",
                        marginLeft:13,
                        flex:1,
                        justifyContent:"center"
                    }}
                >
                    <Text
                        style={{
                            fontSize:14,
                            color:"#111"
                        }}
                        >
                        {this.props.title}
                    </Text>
                </View>
            </View>
        )
    }
}
