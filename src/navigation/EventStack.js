import React from 'react';
import {tabBarOptionsDefault, styles, getTabBarItemOptions} from "./helper";
import {TabNavigator} from "react-navigation";
import {
    EventList,
    EventMap,
} from '../screens';

const eventTabStack = TabNavigator({
    PlaceNormalList: {
        screen: EventList,
        navigationOptions: ({ navigation }) => {
            const title = 'Tìm kiếm';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    EventMapList: {
        screen: EventMap,
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

export default eventTabStack;