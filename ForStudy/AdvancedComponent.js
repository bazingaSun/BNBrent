import React, { Component } from 'react';
import { StyleSheet,View,Text,WebView,
    ScrollView,FlatList,SectionList } from 'react-native';

class WebViewComponent extends Component{
    render(){
        return(
            <WebView
                source={{uri:"http://www.baidu.com"}}/>

        )
    }
}

class ScrollViewComponent extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={{fontSize:80}}>ScrollView</Text>
                <Text style={{fontSize:80}}>ScrollView</Text>
                <Text style={{fontSize:80}}>ScrollView</Text>
                <Text style={{fontSize:80}}>ScrollView</Text>
                <Text style={{fontSize:80}}>ScrollView</Text>
            </ScrollView>
        )
    }
}

class FlatListComponent extends Component{
    render(){
        return(
            <FlatList
                data={[
                    {key:"aaa"},
                    {key:"bbb"},
                    {key:"ccc"},
                    {key:"ddd"},
                    {key:"eee"},
                    {key:"eee"}
                ]}

                renderItem={({item})=>{return <Text style={{color:"red",fontSize:50}}>
                    {item.key}
                </Text>}}
            />
        )
    }
}

class ItemView extends Component{
    render(){
        return(
            <Text
                style={{
                    color:this.props.isGZ?"red":"green",
                    fontSize:this.props.isGZ?25:20
                }}>
                {this.props.text}
            </Text>
        )
    }
}
class FlatListTest extends Component{
    render(){
        var subwayData=new Array()
        var data1= {key:"广州地铁-嘉禾望岗",isGZ:true}
        var data2=  {key:"佛山地铁-桂城",isGZ:false}
        var data3= {key:"广州地铁-三元里",isGZ:true}
        var data4= {key:"广州地铁-体育西路",isGZ:true}
        var data5={key:"佛山地铁-千灯湖",isGZ:false}
        var data6= {key:"广州地铁-广州南站",isGZ:true}
        for(i=0;i<4;i++){
            subwayData.push(data1)
            subwayData.push(data2)
            subwayData.push(data3)
            subwayData.push(data4)
            subwayData.push(data5)
            subwayData.push(data6)

        }
        return(
            <FlatList
                data={subwayData}

                renderItem={({item})=>{return <ItemView text={item.key} isGZ={item.isGZ}></ItemView>}}
            />
        )
    }
}

export default class SectionListComponent extends Component{
    render(){
        return(
            <SectionList
                sections={[
                    {title:"A",data:["阿三","阿四"]},
                    {title:"B",data:["宝贝儿","包贝儿","包文婧"]},
                    {title:"C",data:["陈宇佳","陈艳森","陈立友"]}
                ]}

                renderSectionHeader={({section})=>{return <Text 
                    style={{fontSize:20}}>
                {section.title}</Text>}}

                renderItem={({item})=>{return <Text>{item}</Text>}}

                keyExtractor={(item,index)=>index}
            />
        )
    }
}