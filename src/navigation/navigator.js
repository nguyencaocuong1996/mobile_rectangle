import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import hotelTabStack from "./HotelStack";
import restaurantTabStack from "./RestaurantStack";
import mainTabStack from "./MainStack";
import {
    Tutorial,
    Login,
    Register,
    AddHotel,
    AddRestaurant,
} from '../screens';
import Settings from "../screens/Settings";

export default StackNavigator({
    // Loading: {
    //     screen: Home
    // },

    Tutorial: {
        screen: Tutorial,
    },
    TabNav: {
        screen: mainTabStack,
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
        screen: hotelTabStack,
    },
    Restaurant: {
        screen: restaurantTabStack,
    },


}, {
    lazyLoad: true,
});
