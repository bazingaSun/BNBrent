import React, { Component } from 'react';
import { View,Text,Image,TouchableOpacity } from 'react-native';
import Calendar from "react-native-whc-calendar"
import moment from "moment"
import {pickTimeArr} from "./data"

const weekDayArr=["周日","周一","周二","周三","周四","周五","周六"]
const close=require("./img/close.png")
// 换成你的主题颜色
const themeColor="#22c991"
export  class PickTimeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            startDate:pickTimeArr[0],
            endDate:pickTimeArr[1],
        }
    }

    render(){
        return(
            <View style={{
                flex:1,
                paddingTop:10,
                backgroundColor:"#fff",
            }}>
                {/* x按钮 */}
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}>
                    <Image
                        source={close}
                        style={{
                            width:14,
                            height:14,
                            marginBottom:20,
                            marginHorizontal:14,
                            opacity:0.5
                        }}
                    />
                </TouchableOpacity>
                {/* 第一层 入住日期和离店日期 */}
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginBottom:10,
                    paddingHorizontal:30
                }}>
                    <View>
                        <Text style={{fontSize:12,color:"#777"}}>入住日期</Text>
                        <Text style={{fontSize:16,fontWeight:"bold",color:"#333",marginVertical:3}}>
                            {this.state.startDate.format("MM月DD日")}
                        </Text>
                        <Text style={{fontSize:12,color:"#777"}}>
                            {weekDayArr[this.state.startDate.format("d")]}
                        </Text>
                    </View>
                    <View style={{
                         borderBottomColor:themeColor,
                         borderBottomWidth:0.3,
                         alignSelf:"center",
                         paddingHorizontal:20,
                         paddingVertical:2
                    }}>
                        <Text style={{
                           color:themeColor,
                           fontSize:13
                        }}>
                            共{this.state.endDate.diff(this.state.startDate,"days")}晚
                        </Text>
                    </View>                
                    <View>
                        <Text style={{fontSize:12,color:"#777"}}>离店日期</Text>
                        <Text style={{fontSize:16,fontWeight:"bold",color:"#333",marginVertical:3}}>
                            {this.state.endDate.format("MM月DD日")}
                        </Text>
                        <Text style={{fontSize:12,color:"#777"}}>
                            {weekDayArr[this.state.endDate.format("d")]}
                        </Text>
                    </View>
                </View>
                {/* 第二层 日历 */}
                <Calendar
                    months={6}
                    selectedMidColor="rgba(34,201,145,0.2)"
                    selectedColor={themeColor}
                    selectedTextColor="#fff"
                    highlightColor="#000"
                    startSelectedHint="入住"
                    endSelectedHint="离开"
                    startDateStr={pickTimeArr[0].format("YYYY-MM-DD")}
                    endDateStr={pickTimeArr[1].format("YYYY-MM-DD")}
                    onSelectedDateBlock={(start,end)=>{
                        start=new Date(Date.parse(start))
                        end=new Date(Date.parse(end))
                        this.setState({
                            startDate:moment(start),
                            endDate:moment(end),
                        })
                }}
            />
            <TouchableOpacity
                onPress={()=>{
                    //保存日期数据
                    pickTimeArr[0]=this.state.startDate
                    pickTimeArr[1]=this.state.endDate

                    // 返回FirstScreen,告知FirstScreen pickTimeArr发生更改,需要setState
                    this.props.navigation.state.params.refresh("")
                    this.props.navigation.goBack()
                }}>
                <Text style={{
                    color:"white",
                    backgroundColor:themeColor,
                    textAlign:"center",
                    paddingVertical:16,
                    fontWeight:"700",
                    fontSize:16
                }}>
                    确 定
                </Text>
            </TouchableOpacity>
            </View>
            
        )
    }
}
