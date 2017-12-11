import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Home from './screens/Home'
import {StackNavigator} from 'react-navigation'
import Login from './screens/Login'
import Register from './screens/Register'
import Loading from "./screens/Loading";
import HotelList from "./screens/HotelList";
import RestaurantList from './screens/RestaurantList';


const MainScreenStack = StackNavigator({

    // Loading: {
    //     screen: Loading
    // },

    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    HotelList:{
        screen: HotelList,
    },
    Home: {
        screen: Home,
    },

});

export default class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <MainScreenStack />
            </Provider>
        );
    }
}