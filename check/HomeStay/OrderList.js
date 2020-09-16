import React, { Component } from 'react'
import { Alert,StyleSheet,ToastAndroid,View,Text,TextInput,
Image,TouchableOpacity, ScrollView,StackNavigator } from 'react-native'

const Home1=require("./Images/OrderList/Home_1_4.png");
const Home2=require("./Images/OrderList/Home_4_1.png");
const Home3=require("./Images/OrderList/Home_4_2.png");
const back=require("./Images/OrderList/back.png");



export class OrderListScreen extends Component{
        render(){
            var pass=""

            return(
                <View style={{flex:1,backgroundColor:"#fff",}}>   
                    <View style={{borderBottomWidth:5,borderBottomColor:"#D3D3D3",flexDirection:"row",alignItems:"center",}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Housing")}}>
                            <Image source={back}></Image>
                        </TouchableOpacity>
                        
                        <Text style={{fontSize:20,color:"#012",marginLeft:140}}>
                            订单详情
                        </Text>
                    </View>
                    
                    <View>
                        <ScrollView>
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={{fontSize:16,marginTop:5,marginLeft:5}}>欧美风/复室三居室</Text>
                            <Text style={{fontSize:12,color:"#FF0000",marginRight:5}}>预定成功</Text>   
                        </View>
                        <Image source={Home1}style={{marginLeft:5,width:350,height:200,}}/>
                        <View style={{borderBottomWidth:5,borderColor:"#D3D3D3"}}>
                            <View style={{marginLeft:5,marginTop:-50,height:50,width:350,backgroundColor:'rgba(0,0,0,0.4)',
                                        alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignSelf:"center",borderColor:"#FFF",borderRightWidth:1}}>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginLeft:5}}>08月21日</Text>
                                        <Text style={{fontSize:12,color:"#FFF",marginLeft:8}}>周五12:00</Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginTop:5}}>————————————— </Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginRight:9}}>08月22日</Text> 
                                        <Text style={{fontSize:12,color:"#FFF",marginRight:9}}> 周六12:00</Text>
                                    </View>
                                </View>   
                                    
                                <View>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,marginRight:10}}>预定金额</Text>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,color:"#FF0000"}}>   ¥472</Text>
                                </View>
                            </View>
                            <View style={{alignSelf:"flex-end",marginTop:2,marginRight:5}}>
                                <TouchableOpacity >
                                    <Text style={{marginBottom:5,fontSize:12}}>再次预定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={{fontSize:16,marginTop:5,marginLeft:5}}>广州塔/温馨大床房</Text>
                            <Text style={{fontSize:12,color:"#FF0000",marginRight:5}}>已取消</Text>   
                        </View>
                        <Image source={Home2}style={{marginLeft:5,width:350,height:200,}}/>
                        <View style={{borderBottomWidth:5,borderColor:"#D3D3D3"}}>
                            <View style={{marginLeft:5,marginTop:-50,height:50,width:350,backgroundColor:'rgba(0,0,0,0.4)',
                                        alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignSelf:"center",borderColor:"#FFF",borderRightWidth:1}}>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginLeft:5}}>08月01日</Text>
                                        <Text style={{fontSize:12,color:"#FFF",marginLeft:8}}>周六12:00</Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginTop:5}}>————————————— </Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginRight:9}}>08月02日</Text> 
                                        <Text style={{fontSize:12,color:"#FFF",marginRight:9}}> 周日12:00</Text>
                                    </View>
                                </View>   

                                <View>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,marginRight:10}}>预定金额</Text>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,color:"#FF0000"}}>   ¥511</Text>
                                </View>
                            </View>
                            <View style={{alignSelf:"flex-end",marginTop:2,marginRight:5}}>
                                <TouchableOpacity >
                                    <Text style={{marginBottom:5,fontSize:12}}>再次预定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={{fontSize:16,marginTop:5,marginLeft:5}}>三亚/阳台观景房</Text>
                            <Text style={{fontSize:12,color:"#FF0000",marginRight:5}}>已取消</Text>   
                        </View>
                        <Image source={Home3} style={{marginLeft:5,width:350,height:200,}}/>

                        <View style={{borderBottomWidth:5,borderColor:"#D3D3D3",marginBottom:5}}>
                            <View style={{marginLeft:5,marginTop:-50,height:50,width:350,backgroundColor:'rgba(0,0,0,0.4)',
                                        alignItems:"flex-start",flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",alignSelf:"center",borderColor:"#FFF",borderRightWidth:1}}>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginLeft:5}}>07月15日</Text>
                                        <Text style={{fontSize:12,color:"#FFF",marginLeft:8}}>周三12:00</Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginTop:5}}>————————————— </Text>  
                                    </View>
                                    <View>
                                        <Text style={{fontSize:14,color:"#FFF",marginRight:9}}>08月16日</Text> 
                                        <Text style={{fontSize:12,color:"#FFF",marginRight:9}}> 周四14:00</Text>
                                    </View>
                                </View>   
                                    
                                <View>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,marginRight:10}}>预定金额</Text>
                                    <Text style={{fontSize:12,color:"#FFF",marginTop:5,color:"#FF0000"}}>   ¥424</Text>
                                </View>
                            </View>
                            <View style={{alignSelf:"flex-end",marginTop:2,marginRight:5}}>
                                <TouchableOpacity >
                                    <Text style={{marginBottom:5,fontSize:12}}>再次预定</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{alignItems:"center"}}>
                        <Text style={{marginBottom:40,fontSize:12,color:"#545871"}}>暂无更多订单信息</Text>
                        </View>
                        
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }