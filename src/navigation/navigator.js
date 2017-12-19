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
    Explore,
} from '../screens';

export default StackNavigator({
    // Loading: {
    //     screen: Home
    // },

    Tutorial: {
        screen: Explore,
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
