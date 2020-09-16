import React, { Component } from 'react'
import { View,Text,Button, FlatList } from 'react-native'

var OrderListDataArr=new Array()
export class OrderListScreen extends Component{
    render(){
        var stateTextArr=["已取消","预定成功"]
        const data=this.props.navigation.state.params
        if(data!=null){
            const houseId=data.houseId
            const orderState=data.orderState
            const sumPrice=data.sumPrice
            var newOrderItem={
                houseId:houseId,
                orderState:orderState,
                sumPrice:sumPrice
            }
            OrderListDataArr.unshift(newOrderItem)
            
        }
        return(
            <View>
                <FlatList
                    data={OrderListDataArr}
                    renderItem={({item})=>{
                        return(
                            <View style={{marginBottom:20}}>
                                <Text>{item.houseId}</Text>
                                <Text>{stateTextArr[item.orderState]}</Text>
                                <Text>{item.sumPrice}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item,index)=>index.toString()}
                />
            </View>
        )
    }
}