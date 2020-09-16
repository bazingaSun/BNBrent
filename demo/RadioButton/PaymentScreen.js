import React, { Component } from 'react'
import { View,Text,Image,FlatList,TouchableOpacity} from 'react-native'

export default class PaymentScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            isSelectArr:[1,0],
        }
    }

    render(){
        return(          
        <FlatList
             data={[{id:0,icon:require("./img/alipay_icon.png"),
             name:"支付宝支付",
             decs:"支付宝安全支付",isSelect:this.state.isSelectArr[0]},
             {id:1,icon:require("./img/wx_icon.png"),
             name:"微信支付",
             decs:"微信安全支付",isSelect:this.state.isSelectArr[1]},]}
             renderItem={({item})=>{
                 return(
                     <View style={{
                             flexDirection:"row",
                             marginLeft:10,
                             marginRight:15,
                             paddingVertical:15,
                             borderColor:"#ddd",
                             borderBottomWidth:0.5,
                             alignItems:"center",
                             justifyContent:"space-between"
                         }}>
                         <View style={{
                             flexDirection:"row"
                         }}>
                             <Image
                                 source={item.icon}
                                 style={{
                                     width:40,
                                     height:40,
                                 }}
                             />
                             <View>
                                 <Text style={{
                                     color:"#555"
                                 }}>
                                     {item.name}
                                 </Text>
                                 <Text style={{
                                     fontSize:11,
                                     color:"#999",
                                     marginTop:2
                                 }}>
                                     {item.decs}
                                 </Text>
                             </View>
                         </View>
                         <TouchableOpacity
                             activeOpacity={1}
                             onPress={()=>{
                                 if(this.state.isSelectArr[item.id]==0){
                                     var arr=this.state.isSelectArr
                                     arr[item.id]=1
                                     arr[1-item.id]=0
                                     this.setState({isSelectArr:arr})
                                 }

                             }}>
                             <Image
                                 source={item.isSelect==0?
                                     require("./img/checkin_normal.png"):
                                     require("./img/checkin_selected.png")}
                                     style={{
                                         width:16,
                                         height:16
                                     }}
                                     />
                         </TouchableOpacity>
                     </View>
                 )
             }}
             keyExtractor={(item,index)=>index.toString()}
         />
        )
    }
}