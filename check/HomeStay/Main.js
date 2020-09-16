import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';

const location=require("./Images/location.png");
const star=require("./Images/star.png");

class City extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.BodyNavigation_TO}>
                <Text style={styles.BodyNavigation_Text}>{this.props.city}</Text>
            </TouchableOpacity>
        )
    }
}

class RecommendHome extends Component{
    render(){
        return(
            <View style={styles.RecommendView}>
                <Swiper horizontal={true} height={150} showsPagination={false}>
                    <View >
                        <Image source={this.props.photo_1} style={styles.RecommendHome_Image}/>
                    </View>
                    <View >
                        <Image source={this.props.photo_2} style={styles.RecommendHome_Image}/>
                    </View>
                    <View >
                        <Image source={this.props.photo_3} style={styles.RecommendHome_Image}/>
                    </View>
                </Swiper>
                <View style={{flexDirection:"column",marginHorizontal:10,width:150}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ItemDetail")}}>
                        <View style={styles.RecommendHome_View_One}>
                            <Text numberOfLines={2} style={styles.RecommendHome_Text_One}>{this.props.text1}</Text>
                            <Text numberOfLines={2} style={styles.RecommendHome_Text_Two}>{this.props.text2}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ItemDetail")}}>
                        <View style={styles.RecommendHome_View_Two}>
                            <Text  style={styles.RecommendHome_Text_Three}>￥{this.props.price1}/晚</Text>
                            <Text  style={styles.RecommendHome_Text_Four}>￥{this.props.price2}/晚</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <View style={styles.RecommendHome_View_Three}>
                        <Image source={star} style={styles.RecommendHome_Star}/>
                        <Text style={styles.RecommendHome_Text_Five}>{this.props.mark}分</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}

export class MainSrceen extends Component{
    render(){
        return(
            <View style={styles.background}>
                <ScrollView>
                    <Swiper autoplay={true} autoplayTimeout={3}  horizontal={true} height={250} paginationStyle={{bottom:50}}>
                            <Image source={require("./Images/bg1.jpg")} style={{width:380,height:250}}/>
                            <Image source={require("./Images/bg2.jpg")} style={{width:380,height:250}}/>
                            <Image source={require("./Images/bg3.jpg")} style={{width:380,height:250}}/>
                            <Image source={require("./Images/bg4.jpg")} style={{width:380,height:250}}/>
                    </Swiper>

                    <View style={{alignItems:"center"}}>
                        <View style={styles.contentView}>
                            <View style={styles.contentBody}>
                                <TouchableOpacity style={styles.contentBody_TO}>
                                    <Text style={styles.content_Text_One}>佛山市</Text>
                                </TouchableOpacity >
                                <TouchableOpacity style={styles.contentBody_TO}>
                                    <Image source={location} style={styles.contentImage}/>
                                    <Text style={styles.content_Text_Two}>当前位置</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contentBody}>
                                <TouchableOpacity style={styles.contentBody_TO}>
                                    <Text style={styles.content_Text_One}>8月27-8月28日</Text>
                                    <Text style={styles.content_Text_Three}>共1晚</Text>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Text style={styles.content_Text_Two}>1位房客</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.contentBody}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Search")}}>
                                    <Text style={styles.content_Text_Three}>景点/地址/关键词</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.contentTouchableOpacity} onPress={()=>{this.props.navigation.navigate("Housing")}}>
                                <Text style={styles.content_Text_Four}>搜索房源</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    <View style={styles.BodyTextView}>
                        <Text style={styles.BodyText_One}>
                            短途盛夏特惠
                        </Text>
                        <Text style={styles.BodyText_Two}>
                            短途房源贴心推荐，低至7折
                        </Text>
                    </View>
                    <View>
                        <FlatList showsHorizontalScrollIndicator={false} horizontal={true} pagingEnabled={true}
                            data={[
                                {city:"佛山"},{city:"广州"},{city:"深圳"},{city:"惠州"},{city:"肇庆"},{city:"东莞"},{city:"珠海"},{city:"梅州"},{city:"湛江"},{city:"江门"}                            ]}
                            renderItem={({item})=><City city={item.city}/>}
                        />
                    </View>
                        <FlatList showsHorizontalScrollIndicator={false} pagingEnabled={true}
                            data={[
                            {photo_1:require("./Images/Home/Home_1_1.png"),photo_2:require("./Images/Home/Home_1_2.png"),photo_3:require("./Images/Home/Home_1_3.png"),
                                content_Text_1:"【五十度灰】\n02安心住房间已消\n毒免费接送",content_Text_2:"整套公寓.1室1.5卫2床",price_1:148,price_2:168,mark:4.9},
                            {photo_1:require("./Images/Home/Home_2_1.png"),photo_2:require("./Images/Home/Home_2_2.png"),photo_3:require("./Images/Home/Home_2_3.png"),
                                content_Text_1:"【万达上盖】\n天猫智能投影仪1.8\n米大床",content_Text_2:"整套公寓.1室1.5卫1床",price_1:224,price_2:299,mark:4.7},
                            {photo_1:require("./Images/Home/Home_3_1.png"),photo_2:require("./Images/Home/Home_3_2.png"),photo_3:require("./Images/Home/Home_3_3.png"),
                                content_Text_1:"【江景C36】\n高层一线江景/演\n唱会专用地",content_Text_2:"整套公寓.单间1卫1床",price_1:183,price_2:208,mark:4.5},
                            {photo_1:require("./Images/Home/Home_4_1.png"),photo_2:require("./Images/Home/Home_4_2.png"),photo_3:require("./Images/Home/Home_4_3.png"),
                                content_Text_1:"【文舍】\n森系日式禅室/日\n落景观房飘窗，投影仪",content_Text_2:"整套公寓.1室1卫1床",price_1:198,price_2:208,mark:4.0}
                            ]}
                            renderItem={({item})=><RecommendHome photo_1={item.photo_1} photo_2={item.photo_2} photo_3={item.photo_3} text1={item.content_Text_1} text2={item.content_Text_2}
                                price1={item.price_1} price2={item.price_2} mark={item.mark}/>}
                        />
                </ScrollView>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#fff"
    },
    head_photoView:{
        flex:1
    },
    contentView:{  
        height:230,
        width:300,
        marginTop:-50,
        backgroundColor:"#fff",
        borderWidth:2,
        borderColor:"#cdc",
        borderRadius:20,
        shadowColor: "#fff",
        shadowRadius: 1,
        elevation: 2,
        borderRadius:20,
    },
    contentBody:{
        alignItems:"center",
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        marginHorizontal:20,
    },
    contentBody_TO:{
        flexDirection:"row",
        borderColor:"#000",
        justifyContent:"space-around",
        alignItems:"center",
        alignContent:"center",
        paddingVertical:5,
    },
    contentImage:{
        height:20,
        width:25,
    },
    content_Text_One:{
        fontWeight:"bold",
        fontSize:18
    },
    content_Text_Two:{
        fontSize:16
    },
    content_Text_Three:{
        color:"#999",
        fontSize:14
    },
    contentTouchableOpacity:{
        marginTop:20,
        marginHorizontal:40,
        borderRadius:20,
        backgroundColor:"#008489",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:5,
    },
    content_Text_Four:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18
    },

    BodyTextView:{
        borderTopWidth:1,
        borderColor:"#ddd",
        paddingTop:10,
        marginTop:30,
        flex:1,
        justifyContent:"center",
    },
    BodyText_One:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:10,
        marginHorizontal:10
    },
    BodyText_Two:{
        marginTop:10,
        fontSize:14,
        marginHorizontal:10
    },
    BodyNavigation_TO:{
        marginVertical:5,
        marginHorizontal:12,
        paddingHorizontal:10,
        paddingVertical:5,
        shadowColor: "#fff",
        shadowRadius: 1,
        elevation: 2,
        borderRadius:20,
    },
    RecommendView:{
        marginVertical:5,
        marginHorizontal:12,
        shadowColor: "#fff",
        shadowRadius: 1,
        elevation: 2,
        borderRadius:20,
        flexDirection:"row",
    },
    RecommendHome_Image:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        marginTop:2,
        height:150,
        width:300
    },
    RecommendHome_View_One:{
        width:100,
        borderColor:"#cdc",
        borderBottomWidth:1,
        alignContent:"center",
    },
    RecommendHome_Text_One:{
        width:200,
        fontSize:16,
        marginTop:10
    },
    RecommendHome_Text_Two:{
        width:200,
        fontSize:12,
        color:"#EE9611"
    },
    RecommendHome_Text_Three:{
        width:200,
        fontSize:12,
        color:"#f00"
    },
    RecommendHome_Text_Four:{
        width:200,
        fontSize:12,
        color:"#999",
        textDecorationLine:'line-through'
    },
    RecommendHome_Text_Five:{
        width:200,
        fontSize:10,
        color:"#2BD5B3"
    },
    RecommendHome_View_Two:{
        marginTop:10,
        flex:1,
        borderColor:"#cdc",
    },
    RecommendHome_Star:{
        height:10,
        width:10
    }, 
    RecommendHome_View_Three:{
        marginTop:10,

        flexDirection:"row"
    },
})