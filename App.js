import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LineScreen from './screens/line';
import CircleScreen from './screens/circle';
import OthersScreen from './screens/others'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    )
  }
};

const TabNavigator=createBottomTabNavigator({
  Line: {screen: LineScreen},
  Circle: {screen: CircleScreen},
  Others: {screen: OthersScreen},
})

const AppContainer=createAppContainer(TabNavigator);