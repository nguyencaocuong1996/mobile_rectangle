import React, { Component } from 'react';
import Home from './screens/Home'
import {StackNavigator} from 'react-navigation'
import Login from './screens/Login'
import Register from './screens/Register'
import Loading from "./screens/Loading";


const MainScreenStack = StackNavigator({
    Register: {
        screen: Register,
    },
    Login: {
        screen: Login,
    },
    Loading: {
        screen: Loading
    },
    Home: {
        screen: Home,
    },

});

export default class App extends Component<{}> {
    render() {
        return (

                <MainScreenStack />


        );
    }
}