import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import hotelTabStack from "./HotelStack";
import restaurantTabStack from "./RestaurantStack";
import mainTabStack from "./MainStack";
import placeTabStack from "./PlaceStack";
import eventTabStack from "./EventStack";
import {
    Tutorial,
    Login,
    Register,
    AddHotel,
    AddRestaurant,
    Explore,
    HotelDetail,
    RestaurantDetail,
    PlaceDetail,
    EventDetail,
    HotelListBooked,
} from '../screens';
import GradientHeader from "../components/core/GradientHeader";
import Loading from "../screens/Loading";


export default StackNavigator({

    // Place: {
    //     screen: placeTabStack,
    // },
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
                header: <GradientHeader navigation={navigation} title={"KHÁM PHÁ"}/>
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
    Place: {
        screen: placeTabStack,
    },
    Event: {
        screen: eventTabStack,
    },
    HotelListBooked:{
        screen: HotelListBooked,
    },
    HotelDetail: {
        screen: HotelDetail,
        navigationOptions: ({navigation})=>{
            return ({
                header: <GradientHeader navigation={navigation}
                                        title={"Thông tin khách sạn"}
                                        backScreen={"Hotel"}
                />
            });
        }
    },
    RestaurantDetail: {
        screen: RestaurantDetail,
        navigationOptions: ({navigation})=>{
            return ({
                header: <GradientHeader navigation={navigation}
                                        title={"Thông tin nhà hàng"}
                                        backScreen={"Restaurant"}/>
            });
        }
    },
    PlaceDetail: {
        screen: PlaceDetail,
        navigationOptions: ({navigation})=>{
            return ({
                header: <GradientHeader navigation={navigation}
                                        title={"Thông tin địa điểm"}
                                        backScreen={"Place"}/>
            });
        }
    },
    EventDetail: {
        screen: EventDetail,
        navigationOptions: ({navigation})=>{
            return ({
                header: <GradientHeader navigation={navigation}
                                        title={"Thông tin sự kiện"}
                                        backScreen={"Event"}/>
            });
    }
},


}, {
    lazyLoad: true,
});
