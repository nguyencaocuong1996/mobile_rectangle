import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {
    Login,
    Register,
    Settings,
    Tutorial,

    Home,

    HotelList,
    HotelMap,
    HotelDetail,
    AddHotel,

    RestaurantList,
    RestaurantMap,
    RestaurantDetail,
    AddRestaurant,

} from '../screens';
import {common as commonHelper} from '../helpers';
import MyServices from "../screens/MyServices";
import {Icon} from 'native-base';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    tabBarIcon: {
       fontSize:20,
        marginBottom: 10,
    },
    tabBarLabel: {
        fontSize: 15,
        marginBottom: 5,
    }

});

const hotel = TabNavigator({
    HotelNormalList: {
        screen: HotelList,
        navigationOptions: ({ navigation }) => ({
            title: "Filter",
            tabBarIcon: ({ tintColor }) => {
                return <Icon style={[styles.tabBarIcon, {color: tintColor}]} name={'search'} />
            },
            tabBarLabel: ({tintColor}) => {
                return <Text style={[styles.tabBarLabel, {color: tintColor}]}>Filter</Text>;
            }
        })
    },
    HotelMapList: {
        screen: HotelList,
        navigationOptions: ({ navigation }) => ({
            title: "Maps",
            tabBarIcon: ({ tintColor }) => {
                return <Icon style={[styles.tabBarIcon, {color: tintColor}]} name={'map-marker'} />
            },
            tabBarLabel: ({tintColor}) => {
                return <Text style={[styles.tabBarLabel, {color: tintColor}]}>Maps</Text>;
            }
        })
    },
},{
    tabBarOptions: {
        activeBackgroundColor: 'transparent',
        inactiveBackgroundColor: 'transparent',
        activeTintColor: '#A3D2FA',
        inactiveTintColor: '#a8a8a8',
        showIcon: true,
    }
});

const restaurant = TabNavigator({
    RestaurantNormalList: {
        screen: RestaurantList,
    },
    RestaurantMapList: {
        screen: RestaurantMap
    },
});


export default StackNavigator({
    // Loading: {
    //     screen: HotelList
    // },

    Tutorial: {
        screen: Tutorial
    },
    TabNav: {
        screen: TabNavigator({
            Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                    tabBarVisible: commonHelper.isLogin(),
                })
            },
            MyFavorite: {
                screen: MyServices
            },
            MyService: {
                screen: MyServices
            },
            Settings: {
                screen: Settings
            }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: {
                // activeTintColor: '#e91e63',
                tabBarVisible: true,
            },
            lazyLoad: true,
        }),
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },
    AddHotel: {
        screen: AddHotel,
    },
    AddRestaurant: {
        screen: AddRestaurant,
    },
    Hotel: {
        screen: hotel,
    },
    Restaurant: {
        screen: restaurant
    },


}, {
    lazyLoad: true,
});
