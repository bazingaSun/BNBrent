import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';

const I1=require("./Images/Mine/安全.png");
const I2=require("./Images/Mine/齿轮.png");
const I3=require("./Images/Mine/出租.png");
const I4=require("./Images/Mine/调解和帮助.png");
const I5=require("./Images/Mine/订单.png");
const I6=require("./Images/Mine/订单2.png");
const I7=require("./Images/Mine/订单3.png");
const I8=require("./Images/Mine/基金.png");
const I9=require("./Images/Mine/计划.png");
const I10=require("./Images/Mine/礼券.png");
const I11=require("./Images/Mine/铃铛.png");
const I12=require("./Images/Mine/商务.png");
const I13=require("./Images/Mine/邀请.png");
const I14=require("./Images/Mine/头像.jpg");
const search=require("./Images/search.jpg");
const destination=require("./Images/destination.jpg");
const home=require("./Images/home.jpg");
const note=require("./Images/note.jpg");
const user=require("./Images/user.jpg");

export class MineScreen extends Component{
    render(){
        return(
            <ImageBackground style={{flex:1, backgroundColor:"white"}}>
                <View style={{flexDirection:"column",borderBottomWidth:2,marginHorizontal:10,paddingBottom:30}}>
                    <View style={styles.NO1}>
                        <Image source={I11} style={styles.tubiao1}></Image>
                        <Image source={I2} style={styles.tubiao1}></Image>
                    </View>

                    <View style={styles.NO2}>
                        <View style={styles.NO3}>
                            <Text style={{fontSize:25,fontWeight:"bold"}}>NAOLIU#810</Text>
                            <Text style={{color:"#48D1CC"}}>已连续登陆2天</Text>
                            <Text style={{color:"#4682B4"}}>查看并编辑个人资料</Text>
                        </View>

                        <Image source={I14} style={styles.touxiang}></Image>
                    </View>

                    <View style={styles.NO4}>
                        <Image source={I3} style={{height:50,width:50,marginLeft:30}}></Image>

                        <View style={styles.NO5}>
                            <Text style={{fontSize:12,marginTop:5}}>出租房源，每月最多可赚¥114,514</Text>
                            <Text style={{fontSize:12,color:"#4682B4",marginTop:5}}>了解更多</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.line}>                                                                                         </Text>
                    </View>

                    <Text style={styles.text1}>我的房源订单</Text>

                    <View style={{flexDirection:"column"}}>
                        <View style={styles.NO6}>
                            <Image source={I5} style={styles.tubiao2}></Image>
                            <Image source={I6} style={styles.tubiao2}></Image>
                            <Image source={I7} style={styles.tubiao2}></Image>
                        </View>

                        <View style={styles.NO6}>
                                <View style={styles.text2}>
                                    <Text style={styles.text3}>全部订单</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>有效订单</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>待支付订单</Text>
                                </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.line}>                                                                                         </Text>
                    </View>

                    <Text style={styles.text1}>礼券中心</Text>

                    <View style={{flexDirection:"column"}}>
                        <View style={styles.NO6}>
                            <Image source={I10} style={styles.tubiao2}></Image>
                            <Image source={I8} style={styles.tubiao2}></Image>
                            <Image source={I13} style={styles.tubiao2}></Image>
                        </View>

                        <View style={styles.NO6}>
                                <View style={styles.text2}>
                                    <Text style={styles.text3}>礼金券</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>旅游基金</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>邀请好友</Text>
                                </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.line}>                                                                                         </Text>
                    </View>

                    <Text style={styles.text1}>旅程工具</Text>

                    <View style={{flexDirection:"column"}}>
                        <View style={styles.NO6}>
                            <Image source={I1} style={styles.tubiao2}></Image>
                            <Image source={I4} style={styles.tubiao2}></Image>
                            <Image source={I4} style={styles.tubiao2}></Image>
                        </View>

                        <View style={styles.NO6}>
                                <View style={styles.text2}>
                                    <Text style={styles.text3}>安全中心</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>邻里调解</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>帮助</Text>
                                </View>
                        </View>

                        <View style={styles.NO6}>
                            <Image source={I12} style={styles.tubiao2}></Image>
                            <Image source={I12} style={styles.tubiao2}></Image>
                            <Image source={I9} style={styles.tubiao2}></Image>
                        </View>

                        <View style={styles.NO6}>
                                <View style={styles.text2}>
                                    <Text style={styles.text3}>商务差旅</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>产品反馈</Text>
                                </View>

                                <View style={styles.text2}>
                                    <Text style={styles.text3}>行程规划</Text>
                                </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.line}>                                                                                         </Text>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.text1}>更多...</Text>
                        <Text style={{fontSize:10,color:"#4682B4",marginLeft:15,marginTop:7}}>成为房东达人</Text>
                    </View>
                </View>

                {/* 底部操作按钮 */}
                <View style={styles.footerView}>
                    <TouchableOpacity style={styles.footer_TO} onPress={()=>{this.props.navigation.navigate("Search")}}>
                        <Image style={styles.footer_Image} source={search}></Image>
                        <Text>搜索</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_TO}>
                        <Image style={styles.footer_Image} source={destination}></Image>
                        <Text>目的地</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                        <Image style={styles.footer_Image} source={home}></Image>
                        <Text>首页</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_TO}>
                        <Image style={styles.footer_Image} source={note}></Image>
                        <Text>订单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footer_TO} onPress={()=>{this.props.navigation.navigate("Mine")}}>
                        <Image style={styles.footer_Image} source={user}></Image>
                        <Text>我的</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    NO1:{
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    NO2:{
        flexDirection:"row",
        marginTop:20,
    },
    NO3:{
        flexDirection:"column",
        marginLeft:30
    },
    NO4:{
        flexDirection:"row",
        marginTop:5
    },
    NO5:{
        flexDirection:"column",
        marginLeft:10
    },
    NO6:{
        flexDirection:"row",
        marginLeft:30
    },
    touxiang:{
        height:80,
        width:80,
        marginLeft:90,
    },
    tubiao1:{
        height:30,
        width:30,
        marginRight:20
    },
    line:{
        textDecorationLine:"underline",
        marginLeft:30,
        textDecorationColor: 'blue'
    },
    text1:{
        marginLeft:30,
        marginTop:5,
        marginBottom:5,
        fontWeight:"bold"
    },
    tubiao2:{
        marginLeft:35,
        marginRight:35,
        height:30,
        width:30,
        justifyContent:"center"
    },
    text2:{
        marginLeft:25,
        marginRight:25,
        width:50
    },
    text3:{
        marginLeft:25,
        marginRight:25,
        width:50,
        fontSize:9,
        textAlign:"center"
    },
    footerView:{
        marginTop:5,
        paddingBottom:10,
        paddingHorizontal:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20
    },
    footer_Image:{
        height:20,
        width:20,
    },
    footer_TO:{
        alignItems:"center",
        justifyContent:"center"
    }
})