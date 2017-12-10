import React, { Component } from 'react';
import Home from './screens/Home'
import {StackNavigator} from 'react-navigation'
import Login from './screens/Login'
import Register from './screens/Register'
import Loading from "./screens/Loading";
import HotelList from "./screens/HotelList";


const MainScreenStack = StackNavigator({
    // Loading: {
    //     screen: Loading
    // },
    // Register: {
    //     screen: Register,
    // },
    // Login: {
    //     screen: Login,
    // },
    Home: {
        screen: HotelList,
    },
    HotelList:{
        screen: HotelList,
    }

});

export default class App extends Component<{}> {
    render() {
        return (

                <MainScreenStack />


        );
    }
}