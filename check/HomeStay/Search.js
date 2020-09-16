import React, { Component } from 'react'
import { StyleSheet,View,Text,TextInput,
Image,TouchableOpacity, ScrollView,FlatList, ImageBackground,
} from 'react-native'

const back=require("./Images/Search//back.png");
const search1=require("./Images/Search/search1.png");
const background1=require("./Images/Search/background.jpg")

class Item extends Component{
    render(){
        return(
            <View style={{paddingVertical:10,marginLeft:5,borderBottomWidth:2,borderBottomColor:"#D3D3D3"}}>
                <TouchableOpacity>
                    <Text>{this.props.city}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export class SearchScreen extends Component{
        render(){
            var pass=""

            return(

                <ImageBackground source={background1} style={styles.backgroundImage}>

                <View style={{flex:1}}>   
                    <View style={{borderBottomWidth:2,borderBottomColor:"#D3D3D3",flexDirection:"row",alignItems:"center",}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                            <Image source={back} style={{marginLeft:5}}></Image>
                        </TouchableOpacity>
                        
                        <Text style={{fontSize:20,color:"#012",marginLeft:10,marginBottom:5}}>
                            选择目的地城市
                        </Text>
                    </View>

                    <View style={{borderWidth:1,flexDirection:"row",alignContent:"center",marginHorizontal:5,
                                marginTop:10,borderRadius:5,height:40}}>
                        <Image source={search1} style={{marginVertical:10,width:15,height:15,marginLeft:5}}></Image>
                        <TextInput placeholder="热搜城市：上海"></TextInput>
                    </View>

                    <ScrollView>
                        <View style={{marginTop:10,borderTopWidth:2,borderColor:"#D3D3D3"}}>
                            <Text style={{marginLeft:5,marginTop:5}}>热门城市</Text>
                        </View>

                        <View style={{flexDirection:"row",alignContent:"center",marginTop:5}}>
                            <View style={styles.hotCity}>
                            <TouchableOpacity>
                                <Text>广州</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                            <TouchableOpacity>
                                <Text>重庆</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                            <TouchableOpacity>
                                <Text>珠海</Text>
                            </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>深圳</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                            <TouchableOpacity>
                                <Text>成都</Text>
                            </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",alignContent:"center",marginTop:5}}>       
                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>上海</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>佛山</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>厦门</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>北京</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.hotCity}>
                                <TouchableOpacity>
                                    <Text>西安</Text>
                                </TouchableOpacity>
                            </View>   
                        </View>

                        <View>
                            <Text style={{marginTop:10,marginLeft:5,borderBottomWidth:2,borderBottomColor:"#D3D3D3"}}>
                                所有城市
                            </Text>

                            <FlatList 
                                data={[
                                    {City:"阿坝藏族羌族自治州"},
                                    {City:"阿克苏地区"},
                                    {City:"阿勒泰地区"},
                                    {City:"阿拉善盟"},
                                    {City:"安康市"},
                                    {City:"安庆市"},
                                    {City:"鞍山市"},
                                    {City:"安顺市"},
                                    {City:"安阳市"},
                                    {City:"阿拉尔市"},
                                    {City:"白城市"},
                                    {City:"百色市"},
                                    {City:"白沙黎族自治县"},
                                    {City:"白山市"},
                                    {City:"白银市"},
                                    {City:"保定市"},
                                    {City:"宝鸡市"},
                                    {City:"保山市"},
                                    {City:"保亭黎族苗族自治县"},
                                    {City:"包头市"},
                                    {City:"巴彦淖尔市"},
                                    {City:"巴音郭楞蒙古自治州"},
                                    {City:"巴中市"},
                                    {City:"北海市"},
                                    {City:"北京"},
                                    {City:"北屯市"},
                                    {City:"蚌埠市"},
                                    {City:"本溪市"},
                                ]}
                                renderItem={({item})=><Item city={item.City}/>}
                            />
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            )
        }
    }

const styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0)"
    },

    hotCity:{
        borderWidth:1,
        borderRadius:5,
        marginHorizontal:20
    }
})