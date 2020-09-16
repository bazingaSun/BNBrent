import React, { Component } from 'react'
import { View,Text} from 'react-native'

//flexShrink:定义了元素在空间不够时如何压缩自身
class FlexShrinkComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row"}}>
                <Text style={{backgroundColor:"#00f",flexShrink:1}}>Flex Item Flex ItemFlex ItemFlex ItemFlex Item</Text>
                <Text style={{backgroundColor:"#0f0"}}>Flex Item</Text>
                <Text style={{backgroundColor:"#f00"}}>Flex Item</Text>
            </View>
        )
    }
}
//flexGrow:定义了元素如何占用剩余空间
export default class FlexGrowComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"column",flexGrow:1}}>
                <Text style={{backgroundColor:"#00f"}}>Flex Item</Text>
                <Text style={{backgroundColor:"#0f0",flexGrow:1}}>Flex Item</Text>
                <Text style={{backgroundColor:"#f00",flexGrow:1}}>Flex Item</Text>
            </View>
            )
    }
}
//flexWrap:是否换行
class FlexWrapComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <View style={{width:100,height:50,backgroundColor:"#00f"}}>
                </View>
                <View style={{width:100,height:50,backgroundColor:"#0f0"}}>
                </View>
                <View style={{width:100,height:50,backgroundColor:"#f00"}}>
                </View>
                <View style={{width:100,height:50,backgroundColor:"#0ff"}}>
                </View>
                <View style={{width:100,height:50,backgroundColor:"#f0f"}}>
                </View>
            </View>
        )
    }
}
//alignSelf:目标元素在交叉轴上的排列方式，修饰的是目标元素
class AlignSelfComponnet extends Component{
    render(){
        return(
            <View style={{
                flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"#00f",alignSelf:"flex-end"}}></View>
                <View style={{width:50,height:80,backgroundColor:"#0f0"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#f00"}}></View>              
            </View>
        )
    }
}
//alignContent:每一行的排列方式,需要设置flexWrap:"wrap"
class AlignContentComponent extends Component{
    render(){
        return(
            <View style={{
                height:100,
                backgroundColor:"#aaa",
                flexDirection:"row",
                flexWrap:"wrap",
                alignContent:"flex-start"
            }}>
                <View style={{width:100,height:25,backgroundColor:"#00f"}}>
                </View>
                <View style={{width:100,height:50,backgroundColor:"#0f0"}}>
                </View>
                <View style={{width:100,height:25,backgroundColor:"#f00"}}>
                </View> 
                <View style={{width:100,height:25,backgroundColor:"#0ff"}}>
                </View> 
                <View style={{width:100,height:25,backgroundColor:"#f0f"}}>
                </View> 
            </View>
        )
    }
}
//justifyContent：子容器在主轴上的对齐方式，flex-start:(默认)，
//与主轴起始位置对齐；flex-end；center，space-between,space-around

//alignItems:子容器在交叉轴上的排列方式，flex-start(默认);
//flex-end;center;stretch(拉伸覆盖交叉轴);baseline

//flexDirection:主轴方向，默认column
//row;row-reverse;column-reverse

//flex:弹性宽高 按比例等分剩余空间
//若设置根标签flex:1,父容器高度占满整个屏幕高度
class FlexComponent extends Component{
    render(){
        return (
            <View style={{flexDirection:"row"}}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}>
                </View>
                <View style={{width:50,height:50,backgroundColor:"#0f0"}}>
                </View>
                <View style={{flex:1,height:50,backgroundColor:"#f00"}}>
                </View> 
                <View style={{flex:2,height:50,backgroundColor:"#0ff"}}>
                </View> 
                <View style={{flex:3,height:50,backgroundColor:"#f0f"}}>
                </View> 
            </View>
        )
    }
}
class FlexDirectionComponent extends Component{
    render(){
        return(
            <View style={{flexDirection:"row-reverse"}}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}>
                </View>
                <View style={{width:50,height:50,backgroundColor:"#0f0"}}>
                </View>
                <View style={{width:50,height:50,backgroundColor:"#f00"}}>
                </View>
                <View style={{width:50,height:50,backgroundColor:"#0ff"}}>
                </View>
                <View style={{width:50,height:50,backgroundColor:"#f0f"}}>
                </View>
            </View>
        )
    }
}
class AlignItemsComponent extends Component{
    render(){
        return (
            <View style={{
                flex:1,
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"flex-end",
               }}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}></View>
                <View style={{width:50,height:80,backgroundColor:"#0f0"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#f00"}}></View>
            </View>
        )
    }
}
class JustifyContentComponent extends Component{
    render(){
        return (
            <View style={{
                flexDirection:"row",
                justifyContent:"flex-start"}}>
                <View style={{width:50,height:50,backgroundColor:"#00f"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#0f0"}}></View>
                <View style={{width:50,height:50,backgroundColor:"#f00"}}></View>              
            </View>
        )
    }
}