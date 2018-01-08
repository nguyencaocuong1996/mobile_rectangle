import React from 'react';
import {tabBarOptionsDefault, styles, getTabBarItemOptions} from "./helper";
import {TabNavigator} from "react-navigation";
import {
    PlaceList,
    // HotelMap
} from '../screens';

const placeTabStack = TabNavigator({
    PlaceNormalList: {
        screen: PlaceList,
        navigationOptions: ({ navigation }) => {
            const title = 'Filter';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    // PlaceMapList: {
    //     screen: HotelMap,
    //     navigationOptions: ({ navigation }) => {
    //         const title = 'Maps';
    //         return {
    //             title,
    //             ...getTabBarItemOptions('map-marker', title),
    //         };
    //     },
    // },
},{
    tabBarOptions: {
        ...tabBarOptionsDefault,
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazyLoad: true,
});

export default placeTabStack;