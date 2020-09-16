import React, { Component } from 'react'
import { Text,View,TouchableOpacity, FlatList, ToastAndroid,SectionList } from 'react-native'

//从Json文件中读取数据，构建cityArr，赋给SectionList的data数据源
let cityJson=require("./CityList.json")
var cityArr=new Array()
for(i=0;i<cityJson.city.length;i++){
    var oneCityArr=new Array()
    for(j=0;j<cityJson.city[i].lists.length;j++){
        oneCityArr.push(cityJson.city[i].lists[j])
    }
    var oneCitySection={title:cityJson.city[i].title,data:oneCityArr}
    cityArr.push(oneCitySection)            
}
export   class CityListScreen extends Component{  
    render(){
        return(
            <View style={{marginLeft:10}}>
                <SectionList
                    sections={cityArr}
                    renderSectionHeader={({section})=>{
                        return(
                            <Text style={{fontSize:22,marginBottom:10}}>
                                {section.title}
                            </Text>
                        )
                    }}
                    renderItem={({item})=>{
                        return(
                            <TouchableOpacity 
                                //选中某个城市，向下一个页面传递该城市数据
                                onPress={()=>{
                                    this.props.navigation.navigate("RentList",{
                                        cityData:item
                                    })
                                }}>
                                <Text style={{
                                    width:"100%",
                                    height:34,
                                    marginVertical:4,
                                    fontSize:16,
                                    borderBottomWidth:0.5,
                                    borderColor:"#ccc"
                                }}>{item}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item,index)=>index}
                />
            </View>
        )
    }
}