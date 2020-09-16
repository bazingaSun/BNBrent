import React, { Component } from 'react'
import {View,Button,Text,TextInput, ToastAndroid} from 'react-native'
import {createBottomTabNavigator} from "react-navigation"
import {OrderListScreen} from "./OrderListScreen"

var houseId=-1;
class BookSuccessScreen extends Component{
    
    render(){
        //id从上一个页面传递过来，通过id可以取出该房源各项数据
        return(
            <View>
                <Text style={{alignSelf:"center"}}>预定成功</Text>
                {/* demo这里做的是，在输入框输入id，点击下面任意按钮，就会生成一个订单 */}
                <TextInput onChangeText={(idInput)=>{houseId=idInput}}
                    style={{borderBottomWidth:0.5,marginBottom:20}}
                    placeholder="请输入房源id"/>
                <Button
                    title="查看订单"
                    onPress={()=>{
                        //点击查看订单：跳转到订单列表OrderListScreen，
                        //携带参数1：房源id
                        //携带参数2：orderState:1,代表预定成功
                        //携带参数3：订单总价
                        this.props.navigation.navigate("OrderList",{
                            houseId:houseId,
                            orderState:1,
                            sumPrice:200
                        })
                    }}
                />
                <View style={{height:20}}/>
                <Button
                    title="取消订单"
                    onPress={()=>{
                        //点击取消订单：跳转到订单列表OrderListScreen，
                        //携带参数1：房源id
                        //携带参数2：orderState:0,代表已取消
                        //携带参数3：订单总价
                        this.props.navigation.navigate("OrderList",{
                            houseId:houseId,
                            orderState:0,
                            sumPrice:200
                        })
                    }}
                />
            </View>
        )
    }
}

export default   Stack=createBottomTabNavigator({
    BookSuccess:{screen:BookSuccessScreen},
    OrderList:{screen:OrderListScreen}
})