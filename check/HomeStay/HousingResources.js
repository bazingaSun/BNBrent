import React, { Component } from 'react';
import { ScrollView,View,Text, FlatList, TouchableOpacity,Image, ToastAndroid, Dimensions } from 'react-native';
import {houseImageArr,headImageArr,
nameArr,
descArr,gradeArr,commentNumArr,
locationArr,priceArr,sort0Arr,
sort1Arr,sort2Arr,sort3Arr,isCollectArray} from "./data"

const btn_collected=require("./Images/hongxin_logo_1.jpg")
const btn_no_collect=require("./Images/hongxin_logo_2.jpg")
const quick=require("./Images/cmap_back_icon.png")



var dataArr=new Array()
for(i=0;i<nameArr.length;i++){
    var item={
        id:i,
        houseImag:houseImageArr[i],
        headImage:headImageArr[i],
        name:nameArr[i],
        desc:descArr[i],
        grade:gradeArr[i],
        commentNum:commentNumArr[i],
        location:locationArr[i],
        price:priceArr[i],
        sort0:sort0Arr[i],
        sort1:sort1Arr[i],
        sort2:sort2Arr[i],
        sort3:sort3Arr[i],
        isCollect:isCollectArray[i]//会使UI元素重新渲染的数据
    }
    dataArr.push(item)
}
var data0Arr=new Array()
var data1Arr=new Array()
var data2Arr=new Array()
var data3Arr=new Array()
for(i=0;i<dataArr.length;i++){
    if(dataArr[i].sort0==1){
        data0Arr.push(dataArr[i])
    }
    if(dataArr[i].sort1==1){
        data1Arr.push(dataArr[i])
    }
    if(dataArr[i].sort2==1){
        data2Arr.push(dataArr[i])
    }
    if(dataArr[i].sort3==1){
        data3Arr.push(dataArr[i])
    }
}

var width=Dimensions.get("window").width
var tag=null;
class ItemView extends Component{
    constructor(props){
        super(props)
        this.state={
            isCollect:false
        }
    }
    render(){
        if(sort0Arr[this.props.id]==1)
            tag="优选"
        else if(sort3Arr[this.props.id]==1)
            tag="超赞新房"
        else
            tag=null
        //ToastAndroid.show(this.props.id+"item里"+this.props.sort0,ToastAndroid.SHORT)
        return(
            
            <View style={{
                // borderWidth:0.5,
                // height:350,
                paddingVertical:10,
                paddingHorizontal:15,
            }}>
                {/* 第一层图片 */}
                <View>
                    <ScrollView  horizontal={true} pagingEnabled={true}>
                        <Image
                            style={{width:width,height:220,borderRadius:10}}
                            source={this.props.houseImag}
                        />
                        <Image
                            style={{width:width,height:220,borderRadius:10}}
                            source={require("./Images/Home/Home_8_2.png")}
                        />
                         <Image
                            style={{width:width,height:220,borderRadius:10}}
                            source={require("./Images/Home/Home_8_3.png")}
                        />
                    </ScrollView>
                    <Text style={{
                        backgroundColor:"#FA9921",
                        paddingVertical:3,
                        paddingHorizontal:8,
                        color:"white",
                        borderTopRightRadius:13,
                        borderBottomRightRadius:13,
                        position:"absolute",
                        bottom:30,
                        left:0,
                        fontSize:12,
                        opacity:tag==null?0:1
                    }}>
                    {/* "优选",闪订,连住优惠,超赞新房 */}
                        {tag}
                    </Text>
                    {/* 收藏 */}
                   
                        <View style={{
                            position:"absolute",
                            top:20,
                            right:20,
                        // borderWidth:0.5,
                            backgroundColor:"white",
                            borderRadius:15,
                            width:30,
                            height:30,
                            opacity:0  
                        }}>
                             <TouchableOpacity
                                onPress={()=>{
                                    // 切换收藏与取消收藏
                                    if(this.state.isCollect){
                                       // dataArr[this.props.id].isCollect=false
                                        this.setState({
                                            isCollect:false
                                        })
                                    }else{
                                       // dataArr[this.props.id].isCollect=true                                       
                                        this.setState({
                                            isCollect:true
                                        })
                                    }
                                    
                                }}>
                                <Image
                                    source={this.state.isCollect?btn_collected:btn_no_collect}
                                    style={{
                                        width:25,
                                        height:25,          
                                        marginTop:4,
                                        marginLeft:3,            
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    <Image
                        source={this.props.headImage}
                        style={{
                            width:60,
                            height:60,
                            borderColor:"#fff",
                            borderRadius:30,
                            borderWidth:2,
                            position:"absolute",
                            bottom:-20,
                            right:20
                        }}
                    />
                </View>
                {/* 第二层 文字 */}
                <View style={{
                    flexDirection:"row",
                    marginTop:15,
                    // alignItems:"flex-end",
                    // borderWidth:1
                }}>
                    {/* 优选,"闪订",连住优惠,超赞新房 */}
                    <Image
                        source={quick}
                        style={{
                            width:10,
                            height:12,
                            marginRight:3,
                            marginTop:5,
                            display:this.props.sort1==1?"flex":"none"
                        }}
                    />
                    <Text 
                        numberOfLines={1}
                        style={{
                            fontSize:16,
                            color:"#666",
                            fontWeight:"500",
                            marginRight:100
                    }}>
                        {this.props.name}
                    </Text>
                </View>
                
                <Text style={{
                    fontSize:12,
                    marginVertical:6,
                    color:"#666"
                }}>
                    {this.props.desc+this.props.grade+"/"+
                    this.props.commentNum+"点评"+" · "+this.props.location}
                </Text>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                    <Text style={{
                         fontSize:18,
                         color:"#555",
                         fontWeight:"800"
                    }}>
                        {"￥"+this.props.price}
                    </Text>
                    <Text style={{
                        backgroundColor:"#FFF4EC",
                        borderRadius:5,
                        paddingVertical:2,
                        paddingHorizontal:7,
                        color:"#FA9921",
                        fontSize:10,
                        marginHorizontal:10,
                        display:this.props.sort2==1
                        ?"flex":"none"
                    }}>
                    {/* 优选,闪订,"连住优惠",超赞新房 */}
                        连住优惠
                    </Text>
                    {/* <Text style={{
                        backgroundColor:"#FFF4EC",
                        borderRadius:5,
                        paddingVertical:2,
                        paddingHorizontal:7,
                        color:"#FA9921",
                        fontSize:10,
                        display:this.props.sort2==1&&this.props.sort3==1
                        ?"flex":"none"
                    }}>
                        超赞新房
                    </Text> */}
                </View>
            </View>
        )
    }
}

export  class HousingResources extends Component{
    constructor(props){
        super(props)
        this.state={
            // 4:全部 0-1-2-3
            choose:4
        }
    }
    render(){
        var renderData=new Array()
        switch(this.state.choose){
            case 0:
                renderData=data0Arr
                break
            case 1:
                renderData=data1Arr
                break
            case 2:
                renderData=data2Arr
                break
            case 3:
                renderData=data3Arr
                break
            case 4:
                renderData=dataArr
                break
        }
       // ToastAndroid.show(renderData.length+"",ToastAndroid.SHORT)
        return(
            <View style={{
                flex:1,
                paddingTop:10,
                flexDirection:"column",
               // borderWidth:0.5,
                borderColor:"#0F0"
            }}>
                <View style={{
                    height:30
                }}>
                <FlatList
                    style={{
                     //  height:40,
                      // borderWidth:0.5,
                       //borderColor:"#00f",
                       flexGrow:0
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={[{id:0,name:"优选"},{id:1,name:"闪订"},
                    {id:2,name:"连住优惠"},{id:3,name:"超赞新房"},{id:4,name:"全部"}]}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity 
                                onPress={()=>{
                                    this.setState({
                                        choose:item.id
                                    })
                                }}>
                                    <Text style={{
                                        width:80,
                                        paddingVertical:4,
                                        marginHorizontal:5,
                                        borderWidth:0.5,
                                        borderRadius:15,
                                        borderColor:"#ccc",
                                        textAlign:"center",
                                        color:this.state.choose==item.id?"#22c991":"#777",
                                    }}>
                                        {item.name}
                                    </Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                />
                 </View>
            
                <FlatList
                    ref={(flatList)=>this.flatList = flatList}
                     onContentSizeChange={()=>{
                        this.flatList.scrollToOffset(0)
                    }}
                    style={{
                      //  flex:1,
                      //  borderWidth:1,
                        borderColor:"#f00"
                    }}
                    data={renderData}
                    renderItem={({item})=>{
                     //   ToastAndroid.show(item.id+" "+item.sort0,ToastAndroid.SHORT)
                        return(
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={()=>{
                                    this.props.navigation.navigate("HouseDetail",{
                                        id:item.id
                                    })
                                }}
                            >
                                <ItemView
                                    id={item.id}
                                    houseImag={item.houseImag}
                                    headImage={item.headImage}
                                    name={item.name}
                                    desc={item.desc}
                                    grade={item.grade}
                                    commentNum={item.commentNum}
                                    location={item.location}
                                    price={item.price}
                                    sort0={item.sort0}
                                    sort1={item.sort1}
                                    sort2={item.sort2}
                                    sort3={item.sort3}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                />

            </View>
        )
    }
}