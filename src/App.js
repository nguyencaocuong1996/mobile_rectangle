import React, { Component } from 'react';
import Home from './screens/Home'
import {StackNavigator} from 'react-navigation'
import Login from './screens/Login'

import {
    View,
} from 'react-native';


const MainScreenStack = StackNavigator({
    Home: {
        screen: Home,
    },
    Login: {
        screen: Login,
    },
});

export default class App extends Component<{}> {
    render() {
        return (

                <MainScreenStack />


        );
    }
}