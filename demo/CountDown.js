import React, { Component } from 'react'
import { Text,View, ToastAndroid } from 'react-native'
export default  class CountDown extends Component{
    //state第一步：初始化
    constructor(props){
        super(props)
        this.state={
            sText:"00",
            mText:"30",
        }
    }
    componentDidMount(){
        // 倒计时
        var s=60 
        var m=29//计时30MIN
        this.timer=setInterval(()=>{
            s=s-1
            sText=s>9?s+"":"0"+s
            mText=m>9?m+"":"0"+m
            // state第二步：通过setState修改state
            this.setState({
                sText:sText,
                mText:mText
            })
           
            if(s<1){
                m=m-1
                s=60
                if(m<0){
                    this.timer&&clearInterval(this.timer);
                  //   倒计时结束，回到上个页面
                    //this.props.navigation.goBack()
                    ToastAndroid.show("倒计时结束",ToastAndroid.SHORT)
                    return
                }
            }
        },1000)
          
    }
    render(){
        return(
                <View style={{
                    flexDirection:"row",
                    marginVertical:15,
                    justifyContent:"center"
                }}>
                    <Text style={{
                        backgroundColor:"#444",
                        color:"white",
                        padding:3,
                        borderRadius:3
                    }}>
                        {/* state第三步：获取state各项数据 */}
                        {this.state.mText}
                    </Text>
                    <Text style={{
                        marginHorizontal:8
                    }}>
                        :
                    </Text>
                    <Text style={{
                        backgroundColor:"#444",
                        color:"white",
                        padding:3,
                        borderRadius:3
                    }}>
                        {this.state.sText}
                    </Text>
                </View>
        )
    }

}