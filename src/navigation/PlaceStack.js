import React from 'react';
import {tabBarOptionsDefault, styles, getTabBarItemOptions} from "./helper";
import {TabNavigator} from "react-navigation";
import {
    PlaceList,
    PlaceMap,
} from '../screens';

const placeTabStack = TabNavigator({
    PlaceNormalList: {
        screen: PlaceList,
        navigationOptions: ({ navigation }) => {
            const title = 'Tìm kiếm';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    PlaceMapList: {
        screen: PlaceMap,
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

export default placeTabStack;