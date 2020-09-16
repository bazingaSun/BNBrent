import React, { Component } from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import {createStackNavigator} from "react-navigation"
import {RentDetailScreen} from "./RentDetalScreen"
import {nameArr} from "./data"

class ItemView extends Component{
    render(){
        return(
            <View style={{
                paddingVertical:20,
                borderBottomWidth:0.5
            }}>
                <Text>
                    {this.props.name}
                </Text>
            </View>

        )
    }
}

//构建数组renderData,用来做FlatList的数据源，
//其由各个单项数据的数组构成,如房源名称数组，房源图片数组等等
//另外，这里还需要一个id,代表item在数组中的索引,
//如第0个item，它的id=0,在渲染第0条时，代码54行此时id=0，然后传给49行
//参数id:0,之后这个id=0就传到了RentDetail页面
var renderData=new Array()
// nameArr来自于data.js
for(i=0;i<nameArr.length;i++){
    var item={id:i,name:nameArr[i]} //{id:0,nameArr:"民宿1"}
    renderData.push(item)
}

class RentListScreen extends Component{
    render(){
        return(
            <FlatList
                data={renderData}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity
                            onPress={()=>{
                                // 第一个参数指跳转到RentDetail页面
                                //第二个参数指携带过去的数据，是一个js对象
                                //此时该js对象包含了一个数据，即id:xxx
                                this.props.navigation.navigate("RentDetail",
                                    {
                                        id:item.id
                                    }
                                )
                            }}>
                             <ItemView
                                id={item.id}
                                name={item.name}
                            />
                        </TouchableOpacity>
                       
                    )
                }}
                keyExtractor={(item,index)=>index.toString()}
            />
        )
    }
}

export default  Stack = createStackNavigator({
    RentList:{screen:RentListScreen},
    RentDetail:{screen:RentDetailScreen},
},
{
    navigationOptions:{header:null}
})

