import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, ImageBackground } from 'react-native'

const login=require("./Images/LoginBackground2.jpg")
const back=require('./Images/cmap_back_icon.png')
const login_QQ=require('./Images/common_btn_login_qq.png')
const login_WeChat=require('./Images/common_btn_login_weixin.png')

export  class Login extends Component{
    render(){
        return(
            <ImageBackground source={login} style={styles.backgroundImage}>
                <View style={styles.bgView}>
                    <View style={styles.headView}>  
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                            <Image source={back} style={styles.backImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headText}>注册</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.contentText_One}>账号密码登录</Text>
                        <View style={styles.contentView_Input}>
                            <View style={styles.contentView_Two}>
                                <Text style={styles.contentText_Three}>账号：</Text>
                                <TextInput style={styles.contentTextInput} placeholder="请输入用户账号/用户名" placeholderTextColor="#888" maxLength={11}></TextInput>
                            </View>
                            <View style={styles.contentView_Two}>
                                <Text style={styles.contentText_Three}>密码：</Text>
                                <TextInput style={styles.contentTextInput} placeholder="请输入账号密码" placeholderTextColor="#888" maxLength={16} secureTextEntry></TextInput>
                            </View>
                            <TouchableOpacity style={styles.contentTouchableOpacity} onPress={()=>{this.props.navigation.navigate("Main")}}>
                                <View style={styles.contentView_Three}>
                                    <Text style={styles.contentText_Four}>登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footerView}>
                        <TouchableOpacity>
                            <Image style={styles.footerImage} source={login_QQ}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.footerImage} source={login_WeChat}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>登录即代表您同意我们的</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerText_Two}>《服务协议》</Text>
                        </TouchableOpacity>
                        <Text style={styles.footerText}>和</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerText_Two}>《隐私政策》</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>  
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0)"
    },
    bgView:{
        flex:1
    },

    headView:{
        justifyContent:"space-between",
        marginTop:5,
        marginHorizontal:10,
        flexDirection:"row"
    },
    headText:{
        fontSize:14,
        color:"#fff"
    },
    backImage:{
        width:20,
        height:20,
        alignSelf:"center"
    },

    contentView:{
        flex:1,
        marginTop:60,
        flexDirection:"column",
        marginHorizontal:25,
    },
    contentText_One:{
        fontSize:25,
        color:"#fff"
    },
    contentText_Two:{
        marginTop:10,
        fontSize:14,
        color:"#fff"
    },
    contentView_Input:{
        marginTop:40,
    },
    contentText_Three:{
        fontSize:14,
        color:"#fff"
    },
    contentTextInput:{
        marginLeft:10,
        flex:1,
        fontSize:16,
        color:"#fff"
    },
    contentView_Two:{
        alignItems:"center",
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#fff"
    },
    contentTouchableOpacity:{
        marginTop:40,
    },
    contentView_Three:{
        height:44,
        backgroundColor:"#b4ebcc",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    contentText_Four:{
        marginTop:8,
        flex:1,
        fontSize:18,
        color:"#000"
    },
    contentText_Five:{
        marginTop:10,
        fontSize:14,
        color:"#eee",
        marginLeft:10
    },

    footerView:{
        marginBottom:10,
        flexDirection:"row",
        marginHorizontal:25,
    },
    footerImage:{
        height:40,
        width:40,
        marginRight:20
    },
    footerText:{
        marginBottom:10,
        fontSize:14,
        color:"#ffff"
    },
    footerText_Two:{
        marginBottom:10,
        fontSize:12,
        color:"#ffff",
        borderBottomWidth:1,
        borderColor:"#fff"
    }
})