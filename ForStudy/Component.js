import React, { Component } from 'react';
import { Alert,StyleSheet,View,Text,Image,TextInput,
TouchableHighlight,TouchableNativeFeedback,TouchableOpacity } from 'react-native';

export default class BaseComponent extends Component{
    render(){
        return(
            <View style={styles.rootView}>
                <View style={styles.viewContainer}>
                    <View style={styles.viewOne}></View>
                    <View style={styles.viewTwo}></View>
                </View>
                {/*  加载本地图片*/}
                <Image style={styles.imagern} 
                    source={require("./a.png")}/>
                {/* 加载网络图片 */}
               <Image style={styles.imagern} source={{uri:"https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"}}/>
                {/* View中嵌套Text，换行显示 */}
                <Text style={styles.textBlue}>自定义文本样式</Text>
                <Text style={styles.textBlue}>自定义文本样式</Text>
                <Text style={styles.textBlue}>
                    <Text>固定文本内容</Text>
                    {/* Text中嵌套Text，不会换行显示，除非显示不下 */}
                    <Text>动态文本内容</Text>
                </Text>
                <TextInput style={styles.inputWrap}
                placeholder="账号"
                placeholderTextColor="#ddd"></TextInput>
                <TouchableHighlight
                    underlayColor="white"
                    onPress={()=>{Alert.alert("你点击了TouchableHighlight")}}
                    onLongPress={()=>{Alert.alert("你长按了TouchableHighlight")}}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}
                        >我是一个TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}
                        >我是一个TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}
                        >我是一个TouchableNativeFeedback</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    rootView:{
        flex:1
    },
    viewContainer:{
        flexDirection:"row",
        height:100,
        marginTop:10
    },
    viewOne:{
        backgroundColor:"#00f",
        flex:0.4
    },
    viewTwo:{
        backgroundColor:"#0f0",
        flex:0.6
    },
    imagern:{
        width:190,
        height:110
    },
    textBlue:{
        backgroundColor:"#fff",
        fontSize:20,
        color:"#00f",
        textDecorationLine:"underline",
        textAlign:"center"
    },
    inputWrap:{
        marginVertical:10,
        paddingHorizontal:10,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    },
    button:{
        height:30,
        backgroundColor:"#00f",
        marginTop:5,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:"#fff"
    }
})