import React, { Component } from 'react';
import { Text } from 'react-native';
import {createBottomTabNavigator} from "react-navigation"
import {C2} from "./C2"
import {C1toEStack} from "./C1"


export const TabbarStack=createBottomTabNavigator({
    C1:{screen:C1toEStack},
    C2:{screen:C2},
})

