import React, { Component } from 'react'
import { View, ImageBackground, StatusBar, Image } from 'react-native'
import { createStackNavigator} from 'react-navigation'
import { Login } from './Login'
import { MainSrceen } from './Main'
import { HousingResources } from './HousingResources'
import { SearchScreen } from './Search'
import { ItemDetailScreen } from './ItemDetail'
import { MineScreen } from './MineScreen'
import { OrderListScreen } from './OrderList'
 
class LoadingScreen extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar hidden={true}/>
                <ImageBackground style={{flex:1}} source={require("./Images/Loading.png")}></ImageBackground>
            </View>
        )
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{this.props.navigation.navigate("Login")},2000)
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer)
    }
}

export default LoadingToMainStack = createStackNavigator(
    {
        Loading:{ screen:LoadingScreen },
        Login:{ screen:Login },
        Main:{ screen:MainSrceen },
        Housing:{ screen:HousingResources },
        Search:{ screen:SearchScreen },
        ItemDetail:{ screen:ItemDetailScreen },
        Mine:{ screen:MineScreen },
        Order:{ screen:OrderListScreen}
    },
    {
        navigationOptions:{ header:null }
    }
)
