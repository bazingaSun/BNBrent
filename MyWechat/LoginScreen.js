import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TextInput,
    TouchableOpacity,ImageBackground,
    ToastAndroid,Alert,AsyncStorage, BackHandler,
     StatusBar} from 'react-native';

const mark=require("./img/mark.jpg")
const deletePass=require("./img/deletePass.png")

export class LoginScreen extends Component{
          
    constructor(props){
        super(props);
        this.state={
           pass:""
        }
    }
    componentDidMount(){
        this.readUserData()
        BackHandler.addEventListener("hardwareBackPress",this.onBackPress=()=>{
            if(this.props.navigation.isFocused()) { 
            BackHandler.exitApp()
            
            }
        })
    }
    componentWillUnmount(){
        // ToastAndroid.show("LOGIN XIEZAI",ToastAndroid.SHORT)
        BackHandler.removeEventListener("hardwareBackPress",this.onBackPress)
    }
    
    
    //读取数据
    readUserData=async()=>{
       
        var pass= await AsyncStorage.getItem("key_pass")
        this.setState({pass:pass})
        // ToastAndroid.show(this.state.pass+"readUserData",ToastAndroid.SHORT)
    }
    //存储数据    
    writeUserData=async(pass)=>{
       
        await AsyncStorage.setItem("key_pass",pass)
    }
    render(){
        
        var account="15271858114"
        var part1=account.slice(0,3)
        var part2=account.slice(3,7)
        var part3=account.slice(7,11)
        var showAccount=part1+" "+part2+" "+part3
        // ToastAndroid.show(this.state.pass+"render",ToastAndroid.SHORT)
        return(
            <View style={{
                flex:1,
                backgroundColor:"#fff"
            }}>
                 <StatusBar
                    hidden={false}
                    backgroundColor="#eee"
                />
                   <Image source={mark} style={{
                        marginBottom:5,
                        marginTop:70,
                        width:80,
                        height:80,
                        alignSelf:"center"
                   }}/>
                   <Text style={{
                       alignSelf:"center",
                        marginBottom:25,
                        fontSize:18,
                        color:"#012",
                        }}>{showAccount}</Text>
                   <View
                    style={{
                        flexDirection:"row",
                        height:40,
                        borderBottomColor:"#55C09B",
                        borderBottomWidth:1,
                        marginTop:5,
                        marginHorizontal:10
                    }}>
                
                        <Text style={{
                            alignSelf:"center",
                            marginLeft:7,
                            color:"#333",
                            fontSize:14
                        }}>
                            密码
                        </Text>
                        <TextInput 
                            autoFocus={true}
                            style={{
                                flex:1,
                                marginLeft:50,
                                marginRight:100      
                            }} 
                            value={this.state.pass}
                            placeholder="请填写微信密码" 
                            fontSize={14}
                            placeholderTextColor="#ddd"
                            onChangeText={(text)=>{
                                this.setState({pass:text})
                            }}
                            maxLength={16}
                            secureTextEntry
                            ref="pass"
                            />
                        
                        <TouchableOpacity
                            onPress={()=>{
                                // 点击“X”
                                this.refs.pass.clear()
                                this.setState({pass:""})
                            }}
                            style={{justifyContent:"center"}}
                           >
                            <Image
                                style={{
                                    width:20,
                                    height:20,
                                    marginRight:10,
                                    opacity:this.state.pass==""||this.state.pass==null?0:1
                                }}
                                source={deletePass}
                            />
                        </TouchableOpacity>
                    </View>
                
                    <Text style={{
                        color:"#67707F",
                        marginLeft:17,
                        marginTop:12,
                        fontSize:13
                        }}>
                        <Text>用短信验证码登录</Text>
                    </Text>
                    <View  style={{flex:1}}>
                    <TouchableOpacity
                        activeOpacity={
                            this.state.pass==""||this.state.pass==null?1:0.9
                        }
                        onPress={()=>{
                            if(this.state.pass!=""&&this.state.pass!=null){
                                //密码输入不为空才能跳转和存储
                                this.writeUserData(this.state.pass)
                                this.props.navigation.navigate("Main")
                            }
                        }}
                        >
                        <View style={{
                             backgroundColor:this.state.pass==""||this.state.pass==null?"#B4EBCC":"#05C160",
                             height:44,
                             marginTop:45,
                             justifyContent:"center",
                             alignItems:"center",
                             marginHorizontal:10,
                             borderRadius:3
                        }}>
                            <Text style={{
                                color:"#fff",
                                fontSize:16
                                }}>登录</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={()=>{
                            BackHandler.exitApp()
                        }}>
                        <Text style={{
                             color:"#ccc",
                             alignSelf:"center",
                             color:"#67707F",
                             fontSize:13,
                             marginBottom:15
                        }}>退出</Text>
                    </TouchableOpacity>
            </View>
        )
    }
}