import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Home from './screens/Home'
import {StackNavigator, TabNavigator} from 'react-navigation'
import Login from './screens/Login'
import Register from './screens/Register'
import Loading from "./screens/Loading";
import Tutorial from "./screens/Tutorial";
import HotelList from "./screens/HotelList";
import RestaurantList from './screens/RestaurantList';
import {common as commonHelper} from './helpers';
import HotelMap from './screens/HotelMap';
import HotelListCarousel from "./components/hotel/HotelListCarousel";


const MainScreenStack = StackNavigator({
    Loading: {
        screen: HotelListCarousel
    },
    Tutorial: {
        screen: Tutorial
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    HotelList:{
        screen: HotelList,
    },
    TabNav: {
        screen: TabNavigator({
            Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                    tabBarVisible: commonHelper.isLogin(),
                })
            },
            Hotel:{
                screen: HotelList
            },
            Restaurant:{
                screen: RestaurantList
            },
            Settings: {
                screen: RestaurantList
            }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: {
                // activeTintColor: '#e91e63',
                tabBarVisible: true,
            },
        }),
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