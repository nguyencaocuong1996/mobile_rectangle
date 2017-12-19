import {tabBarOptionsDefault} from './helper';

import {
    RestaurantList,
    RestaurantMap
} from '../screens';


import {TabNavigator} from "react-navigation";

const restaurantTabStack = TabNavigator({
    RestaurantNormalList: {
        screen: RestaurantList,
    },
    RestaurantMapList: {
        screen: RestaurantMap
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