import React, { Component } from 'react'
import { Image,Text,TouchableOpacity,View, FlatList } from 'react-native'
import {createStackNavigator} from "react-navigation"
import { RentDetaiScreen } from './RentDetailScreen'

//房源图片
const houseImageArr=[
    require("./houseImage/bg0.jpg"),
    require("./houseImage/bg1.jpg"),
    require("./houseImage/bg2.jpg"),
    require("./houseImage/bg3.jpg"),
    require("./houseImage/bg4.jpg"),
    require("./houseImage/bg5.jpg"),
    require("./houseImage/bg6.jpg"),
    require("./houseImage/bg7.jpg")
]
//构建房源数组
var rentListDataArr=new Array()
for(i=0;i<houseImageArr.length;i++){
    var itemData={houseImage:houseImageArr[i]}
    rentListDataArr.push(itemData)
}
class ItemView extends Component{
    render(){
        return(
                 
                <View style={{marginHorizontal:15,marginBottom:20}}>
                    <Image
                        style={{width:"100%",height:220,borderRadius:10}}
                        source={this.props.houseImage}
                    />
                    <TouchableOpacity
                            onPress={()=>{
                            this.props.navigation.navigate("RentDetail")
                        }}>
                        <Text>
                            再次预定
                        </Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

 class RentListScreen extends Component{
    render(){
        return(
            <FlatList
                data={rentListDataArr}
                renderItem={({item})=>{
                    return(   
                            // <TouchableOpacity
                            //     onPress={()=>{
                            //         this.props.navigation.navigate("RentDetail")
                            //     }}>                    
                                <ItemView 
                                    houseImage={item.houseImage}
                                    // 想要在ItemView中做跳转 增加这句代码
                                    navigation={this.props.navigation}
                                />
                            // </TouchableOpacity>
                    )
                }}
                keyExtractor={(item,index)=>index.toString()}
            />
        )
    }
}

export default Stack=createStackNavigator(
    {
    RentList:{screen:RentListScreen},
    RentDetail:{screen:RentDetaiScreen}
    },
    {
        navigationOptions:{header:null}
    }
)