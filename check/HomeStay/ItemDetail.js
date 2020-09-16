import React,{ Component } from 'react';
import {StyleSheet,View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';

export class ItemDetailScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style = {{flex: 1,backgroundColor: "#FFFFFF"}}>
                {/* 页首图片 */}
                <ScrollView style = {{flex: 1}}>
                <View style = {{borderBottomWidth: 2,borderBottomColor: "#D3D3D3",flexDirection: "row",alignItems: "center",}}>
                        <Image source = {back} style = {{marginLeft: 5}}></Image>
                        <Text style = {{fontSize: 20,color: "#012",marginLeft: 10}}>
                            返回
                        </Text>
                    </View>
                    <Image source = {detail} style = {{
                        alignSelf: "center",
                        width: 400,
                        height: 200,
                        resizeMode: "cover", //resizeMode现在无法使用Image.resizeMode.string，直接用resizeMode: "string"
                    }}>
                    </Image>
                    {/* 标题 */}
                    <Text style = {{
                        alignSelf: "center",
                        fontSize: 25,
                        marginTop: 5,
                        marginHorizontal: 15,
                        color: "#012"
                    }}>
                        欧美风/复室三居室
                    </Text>
                    {/* 标题下的三个房间信息框 */}
                    <View style = {{
                        flexDirection: "row",
                        marginTop: 15,
                        height: 60,
                        marginHorizontal: 10
                    }}>
                        {/* 第一个框 */}
                        <View style = {styles.roomDetailBorder}>
                            <Image source = {home} style = {styles.roomDetailImage}>
                            </Image>
                            <Text style = {styles.roomDetailText}>
                                整套出租
                            </Text>
                            <Text style = {styles.roomDetailText}>
                                70m²超大空间
                            </Text>
                        </View>
                        {/* 第二个框 */}
                        <View style = {styles.roomDetailBorder}>
                            <Image source = {eat} style = {styles.roomDetailImage}>
                            </Image>
                            <Text style = {styles.roomDetailText}>
                                一室一厅一卫一厨
                            </Text>
                            <Text style = {styles.roomDetailText}>
                                可做饭
                            </Text>
                        </View>
                        {/* 第三个框 */}
                        <View style = {styles.roomDetailBorder}>
                            <Image source = {sleep} style = {styles.roomDetailImage}>
                            </Image>
                            <Text style = {styles.roomDetailText}>
                                宜住2人 1床
                            </Text>
                            <Text style = {styles.roomDetailText}>
                                大床一张
                            </Text>
                        </View>
                    </View>
                    {/* 品质保证 */}
                    <View style = {styles.coloredBackground}>
                        <View style = {{flex: 1}}>
                            <Text style = {{
                                fontSize: 18,
                                color: "#BBA969",
                                marginLeft: 15,
                                marginTop: 5
                            }}>
                                优选&nbsp;&nbsp;
                                <Text style = {{fontSize: 10}}>
                                优质精选房源
                                </Text>
                            </Text>
                            <Text style = {{
                                fontSize: 12,
                                marginLeft: 15,
                                marginTop: 1
                                }}>
                            ·品牌保证&nbsp;&nbsp;&nbsp;·优质服务&nbsp;&nbsp;&nbsp;·更多好评&nbsp;&nbsp;&nbsp;
                            </Text>
                        </View>
                    </View>
                    {/* 装饰线 */}
                    <View style = {styles.decorationLine}>
                    </View>
                    <View style = {{
                        flexDirection: "row",
                        height: 60,
                        marginTop: 5,
                        marginHorizontal: 5
                        }}>
                        <Image source = {head} style = {{
                            width: 45,
                            height: 45,
                            marginLeft: 20,
                            marginTop: 10,
                            borderRadius: 45,
                        }}>
                        </Image>
                        <View>
                            <Text style = {{
                                fontSize: 13,
                                marginLeft: 12,
                                marginTop: 15,
                                color: "#252526"
                            }}>
                                tiger0229
                            </Text>
                            <Text style = {{
                                fontSize: 10,
                                marginLeft: 12,
                                marginTop: 5,
                                color: "#333333"
                            }}>
                                我是谁，我在哪里，今晚吃什么
                            </Text>
                        </View>
                    </View>
                    <View style = {styles.decorationLine}>
                    </View>
                    <View style = {styles.coloredBackground}>
                        <View style = {{flex: 1,flexDirection: "row"}}>
                            <Text style = {{
                                fontSize: 30,
                                color: "#0C0C0C",
                                marginVertical: 7,
                                marginHorizontal: 15
                            }}>
                                5.0
                            </Text>
                            <View>
                                <Text style = {{
                                    width: 18,
                                    marginTop: 15,
                                    backgroundColor: "#F1B329",
                                    fontSize: 9,
                                    color: "#FFFFFF"
                                }}>
                                    闪订
                                </Text>
                                <Text>
                                    ⭐&nbsp;⭐&nbsp;⭐&nbsp;⭐&nbsp;⭐&nbsp;
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style = {{
                        marginTop: 15,
                        marginLeft: 12,
                        fontSize: 15,
                        color: "#5F6368"
                        }}>
                        服务设施
                    </Text>
                    <Text style = {{
                        marginTop: 3,
                        marginLeft: 12,
                        fontSize: 12,
                        color: "#5F6368"
                        }}>
                        配备门禁系统，保安及智能门禁，入住更安心
                    </Text>
                    {/* 服务设施 */}
                    <View style = {{
                        backgroundColor: "#F2F2F2",
                        marginHorizontal: 10,
                        height: 300,
                        marginVertical: 15
                    }}>
                    {/* 设施详细 */}
                        <View style = {{flex: 1}}>
                            <View style = {{flexDirection: "row"}}>
                                {/* 图标及名称 */}
                                <View>
                                    <Image source = {facility} style = {styles.serviceDetailImage}>
                                    </Image>
                                    <Text style = {styles.serviceDetailText}>
                                        基础设施
                                    </Text>
                                </View>
                                {/* 第一排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 60,
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;无线网络
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;中央空调
                                    </Text>
                                </View>
                                {/* 第二排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 10
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;消防通道
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;垂直电梯
                                    </Text>
                                </View>
                            </View>
                            {/* 第二大排开始 */}
                            <View style = {{flexDirection: "row"}}>
                                {/* 图标及名称 */}
                                <View>
                                    <Image source = {water} style = {styles.serviceDetailImage}>
                                    </Image>
                                    <Text style = {styles.serviceDetailText}>
                                        卫浴设施
                                    </Text>
                                </View>
                                {/* 第一排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 60,
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;全天热水
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;毛巾
                                    </Text>
                                </View>
                                {/* 第二排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 10
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;洗浴用品
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;牙膏
                                    </Text>
                                </View>
                            </View>
                            {/* 第三大排开始 */}
                            <View style = {{flexDirection: "row"}}>
                                {/* 图标及名称 */}
                                <View>
                                    <Image source = {eat} style = {styles.serviceDetailImage}>
                                    </Image>
                                    <Text style = {styles.serviceDetailText}>
                                        厨房设施
                                    </Text>
                                </View>
                                {/* 第一排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 60,
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        ×&nbsp;烹饪锅具
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        ×&nbsp;餐具
                                    </Text>
                                </View>
                                {/* 第二排 */}
                                <View style = {{
                                    marginTop: 20,
                                    marginLeft: 10
                                }}>
                                    <Text style = {styles.serviceDetailText}>
                                        √&nbsp;电磁炉
                                    </Text>
                                    <Text style = {styles.serviceDetailText}>
                                        ×&nbsp;调料
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 预定按钮 */}
                    <TouchableOpacity>
                        <View style={{marginBottom:20,height:40,width:120,backgroundColor:'rgb(255,58,1)',marginLeft:120,borderRadius:10}}>
                            <Text style={{color:"#fff",fontWeight:"bold",fontSize:16,marginLeft:30,marginTop:10}}>确认预定</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                
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
                        <Image style={styles.footer_Image} source={home1}></Image>
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
            </View>

            
        )
    }
}

const black = require("./Images/DetailHome/black.png")
const head = require("./Images/DetailHome/head.jpg")
const detail = require("./Images/DetailHome/home.png")
const eat = require("./Images/DetailHome/iconmonstr-eat-6-thin-240.png")
const home = require("./Images/DetailHome/iconmonstr-home-7-240.png")
const sleep = require("./Images/DetailHome/iconmonstr-weather-114-240.png")
const facility = require("./Images/DetailHome/iconmonstr-building-18-240.png")
const water = require("./Images/DetailHome/iconmonstr-weather-114-240.png")
const back = require("./Images/DetailHome/back.png")
const search=require("./Images/search.jpg");
const destination=require("./Images/destination.jpg");
const home1=require("./Images/home.jpg");
const note=require("./Images/note.jpg");
const user=require("./Images/user.jpg");

const styles = StyleSheet.create({
    // 房间简介用
    roomDetailText: {
        alignSelf: "center",
        fontSize: 12,
        color: "#5F6368"
    },
    roomDetailBorder: {
        flex: 0.333,
        // borderWidth: 1,
        borderColor: "#55c09b",
        marginRight: 10
    },
    roomDetailImage: {
        alignSelf: "center",
        width: 20,
        height: 20
    },
    decorationLine: {
        marginTop: 18,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: "#757575"
    },
    coloredBackground: {
        height: 55,
        backgroundColor: "#FFF8EE",
        marginHorizontal: 10,
        marginTop: 15,
        // borderWidth: 1
    },
    serviceDetailImage: {
        marginLeft: 25,
        marginTop: 20,
        width: 40,
        height: 40
    },serviceDetailText: {
        marginLeft: 15,
        marginTop: 2,
        marginBottom: 15,
        color: "#5F6368",
        fontSize: 15
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