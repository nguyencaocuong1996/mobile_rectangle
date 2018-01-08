import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import hotelTabStack from "./HotelStack";
import restaurantTabStack from "./RestaurantStack";
import mainTabStack from "./MainStack";
import placeTabStack from "./PlaceStack";
import {
    Tutorial,
    Login,
    Register,
    AddHotel,
    AddRestaurant,
    Explore,
    HotelDetail,
} from '../screens';
import GradientHeader from "../components/core/GradientHeader";
import Loading from "../screens/Loading";


export default StackNavigator({

    Place: {
        screen: placeTabStack,
    },
    Tutorial: {
        screen: Tutorial,

    },
    Loading: {
        screen: Loading
    },
    TabNav: {
        screen: mainTabStack,
    },
    Explore: {
        screen: Explore,
        navigationOptions: ({navigation})=>{
            return ({
                header: <GradientHeader navigation={navigation} title={"EXPLORE"}/>
            })
        }
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
    // Place: {
    //     screen: placeTabStack,
    // },
    HotelDetail: {
        screen: HotelDetail,
    }


}, {
    lazyLoad: true,
});
