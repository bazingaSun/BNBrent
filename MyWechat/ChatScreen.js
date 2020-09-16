import React, { Component } from 'react';
import { View,Text,Image, TextInput,Button, TouchableOpacity,
    BackHandler, ToastAndroid, ImageBackground,
     FlatList,Alert } from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from "react-navigation"
import {MessageScreen} from "./MessageScreen"
import {TitleBar} from "./MainScreen"

const mark=require("./img/mark.jpg")
const location=require("./img/location.png")
var leftHead=null
var rightHead=require("./img/mark.jpg")
const back=require("./img/back.png")
const chat_menu=require("./img/chat_menu.png")
var id=0;
var position=""



class ChatScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            input:"",
            dataArr:new Array(),
           
        }
    }


    componentDidMount(){
       
        var msgArr=["我感觉我最近是不是有点闲","有点","我最近总是刷B站","刷到吐",
    "我中午一般以郭杰瑞下饭","他的很快就刷完了","原来项目少，自己的时间真的很多",
    "是啊，相当多"]
        var msgTypeArr=["left","right","right","right",
        "left","right","left",
        "right"]
        var dataArr=new Array()
        for(i=0;i<msgArr.length;i++){
            var headImage=msgTypeArr[i]=="left"?leftHead:rightHead
            var item={msgType:msgTypeArr[i],headImage:headImage,msg:msgArr[i]}
            dataArr.push(item)
        }
       this.setState({dataArr:dataArr})
      // this.flatList.scrollToEnd()
    //    ToastAndroid.show("xxx",ToastAndroid.SHORT)

    //    this.watchId=navigator.geolocation.watchPosition(
    //         (location)=>{
    //         position="纬度："+location.coords.latitude+
    //                 "\n经度："+location.coords.longitude
    //     })

   
    BackHandler.addEventListener('hardwareBackPress', this.onBackPressed=()=>{
        //  ToastAndroid.show(this.props.navigation.state.routeName,ToastAndroid.SHORT)
        //按两次才返回，第一次是关闭虚拟键盘
         this.props.navigation.state.params.refresh(id,
         this.state.dataArr[this.state.dataArr.length-1].msg)
        });
    }
    
    // 组件即将卸载时清除监控
    componentWillUnmount(){
       // navigator.geolocation.clearWatch(this.watchId)
        // ToastAndroid.show(this.props.navigation.state.routeName,ToastAndroid.SHORT)
     BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
    }
    

    
    render(){
        const data=this.props.navigation.state.params
        const friend=data.friend
        id=data.id
        leftHead=data.headImage
        return(
            <View style={{flex:1,backgroundColor:"#ededed"}}>
                <TitleBar
                        routeIndex={1}
                        title={friend}
                        isShowIcon1={false}
                        isShowIcon2={true}
                        icon2={chat_menu}
                        isShowBack={true}
                        onPress={()=>{
                            // ToastAndroid.show("back",ToastAndroid.SHORT)
                            this.onBackPressed()
                            this.props.navigation.goBack()
                        }}
                    />
                {/*对话列表*/}
                <FlatList
                    onContentSizeChange={()=>{
                        this.flatList.scrollToEnd()
                    }}
                   ref={(flatList)=>this.flatList = flatList}
                //    ref="list"
                    style={{
                    //    borderWidth:1,
                        flex:1,
                        marginTop:10
                    }}
                    data={this.state.dataArr}
                    renderItem={({item})=>{
                        return(
                            <ItemView
                                msgType={item.msgType}
                                headImage={item.headImage}
                                msg={item.msg}
                            />
                        )
                        
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                />
                {/* 发送模板 */}
                <View style={{
                    flexDirection:"row",
                   // borderWidth:1,
                    paddingHorizontal:10,
                    paddingVertical:5,
                    backgroundColor:"#f7f7f7",
                    alignItems:"center"
                }}>
                    <TextInput
                        ref="input"
                        style={{
                            flex:1,
                            borderColor:"#eee",
                            borderWidth:0.5,
                            borderRadius:5,
                            backgroundColor:"#fff",
                            paddingVertical:4,
                            fontSize:16,
                        }}
                        autoFocus={true}
                        multiline={true}
                        onChangeText={(text)=>{
                            this.setState({input:text})
                        }}
                        // returnKeyType="send"
                        // onSubmitEditing={
                        //     ()=>{
                        //         this.setState({dataArr:sendMsg(this.state.input,
                        //             this.state.dataArr)})
                        //         this.refs.input.clear()
                        //     }
                        // }
                    />
                    <TouchableOpacity
                    onPress={()=>{
                        // 发送位置
                        Alert.alert(null,"发送位置",[{
                            text:"确定",
                            onPress:()=>{
                            //       this.setState({dataArr:sendMsg(position,
                            // this.state.dataArr)})
                            }
                        }])
                      
                    }}>
                        <ImageBackground
                            style={{
                                width:28,
                                height:28,
                                marginHorizontal:5
                            }}
                            source={location}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{
                            display:this.state.input==""?"none":"flex"
                        }}
                        onPress={()=>{
                            this.setState({dataArr:sendMsg(this.state.input,
                                this.state.dataArr)})
                            this.refs.input.clear()
                        }}>
                        <Text style={{
                            backgroundColor:"#00C15C",
                            color:"white",
                            borderRadius:5,
                            paddingHorizontal:5,
                            paddingVertical:5,
                            fontSize:12
                        }}>
                            发送
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
   
}


function sendMsg(msg,dataArr){
     // this.flatList.scrollToEnd()
    //this.refs.flatlist.scrollToEnd();
    var item={msgType:"right",headImage:leftHead,msg:msg}
    var newDataArr=dataArr;
    newDataArr.push(item)
    return newDataArr                           
}

class ItemView extends Component{
    render(){
        return(
            <View style={{
                marginHorizontal:5,
                }}>

                {/* 右边 */}
                <View
                    style={{
                        marginLeft:45,
                        flexDirection:"row",
                    //    borderWidth:1,
                       justifyContent:"flex-end",
                       marginVertical:5,
                       display:this.props.msgType=="left"?"none":"flex"
                    }}
                >
                    <Text style={{
                        backgroundColor:"#96ED6A",
                        borderRadius:2,
                        color:"#555",
                        fontSize:14,
                        alignSelf:"flex-start",
                        paddingHorizontal:5,
                        paddingVertical:7,
                        flexShrink:1
                        }}>
                        {this.props.msg}
                    </Text>
                    <Image
                        source={this.props.headImage}
                        style={{
                            width:36,
                            height:36,
                            marginLeft:10,
                            borderRadius:3
                        }}
                    />
                </View>
                {/* 左边 */}
                <View
                    style={{
                        marginRight:45,
                        flexDirection:"row",
                    //    borderWidth:1,
                       justifyContent:"flex-start",
                       marginVertical:5,
                       display:this.props.msgType=="left"?"flex":"none"
                    }}
                >
                     <Image
                        source={this.props.headImage}
                        style={{
                            width:36,
                            height:36,
                            marginRight:10,
                            borderRadius:3
                        }}
                    />
                    <Text style={{
                        backgroundColor:"#FFF",
                        borderRadius:2,
                        color:"#555",
                        fontSize:14,
                        alignSelf:"flex-start",
                        paddingHorizontal:5,
                        paddingVertical:7,
                        flexShrink:1
                        }}>
                        {this.props.msg}
                    </Text>
                   
                </View>
            </View>
        )
    }
}
export const MessageToChatRoute =createStackNavigator(
    {
        Message:{screen:MessageScreen},
        Chat:{screen:ChatScreen}
    },
    {
        navigationOptions:{header:null}
    }
)

MessageToChatRoute.navigationOptions=({navigation})=>{
    return {
        tabBarVisible:navigation.state.index==0
    }
}

