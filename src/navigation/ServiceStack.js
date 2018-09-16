import {getTabBarItemOptions, tabBarOptionsDefault} from './helper';

import {
    ServiceList,
    ServiceMap
} from '../screens';


import {TabNavigator} from "react-navigation";

const serviceTabStack = TabNavigator({
    RestaurantNormalList: {
        screen: ServiceList,
        navigationOptions: ({ navigation }) => {
            const title = 'Tìm kiếm';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    RestaurantMapList: {
        screen: ServiceMap,
        navigationOptions: ({ navigation }) => {
            const title = 'Bản đồ';
            return {
                title,
                ...getTabBarItemOptions('map-marker', title),
            };
        },
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    tabBarOptions: {
        ...tabBarOptionsDefault,
    },
    lazyLoad: true,
});

export default serviceTabStack;