import React from 'react';
import {tabBarOptionsDefault, styles, getTabBarItemOptions} from "./helper";
import {TabNavigator} from "react-navigation";
import {
    HotelList,
    HotelMap
} from '../screens';

const hotelTabStack = TabNavigator({
    HotelNormalList: {
        screen: HotelList,
        navigationOptions: ({ navigation }) => {
            const title = 'Tìm kiếm';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    HotelMapList: {
        screen: HotelMap,
        navigationOptions: ({ navigation }) => {
            const title = 'Bản đồ';
            return {
                title,
                ...getTabBarItemOptions('map-marker', title),
            };
        },
    },
},{
    tabBarOptions: {
        ...tabBarOptionsDefault,
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazyLoad: true,
});

export default hotelTabStack;