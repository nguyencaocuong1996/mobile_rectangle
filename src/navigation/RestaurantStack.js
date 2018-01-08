import {getTabBarItemOptions, tabBarOptionsDefault} from './helper';

import {
    RestaurantList,
    RestaurantMap
} from '../screens';


import {TabNavigator} from "react-navigation";

const restaurantTabStack = TabNavigator({
    RestaurantNormalList: {
        screen: RestaurantList,
        navigationOptions: ({ navigation }) => {
            const title = 'Tìm kiếm';
            return {
                title,
                ...getTabBarItemOptions('search', title),
            };
        },
    },
    RestaurantMapList: {
        screen: RestaurantMap,
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

export default restaurantTabStack;