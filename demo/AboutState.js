import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';

//   下面是认识State用法的一个简单例子
//页面有一个按钮和文本控件，文本控件默认显示aaaaa，点击按钮修改成bbbbbbb
//分析：文本内容发生修改，所以是页面状态发生了改变，这时需要用到state
//该页面状态发生变化，本质是文本显示数据发生了变化，所以text是state的一部分
//做法：第1步，在constructor中做state的初始化，state是由text构成的一个js对象
//第2步，哪里修改了text，就在那里设置state，即setState({text:修改后的内容})
//第3步，哪里需要text的值，就在那里获取，即this.state.text
export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            text:"aaaaaaaaaa"
        }
    }
    render(){
        return(
            <View>
                <Button
                    title="点我改变下方Text显示内容"
                    onPress={()=>{
                        this.setState({
                            text:"bbbbbbbbbbb"
                        })
                    }}
                />
                <Text>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}