import {StackNavigator, TabNavigator} from 'react-navigation';
import {
    Login,
    Register,

    Tutorial,

    Home,

    HotelList,
    HotelMap,
    HotelDetail,
    AddHotel,

    RestaurantList,
    RestaurantMap,
    RestaurantDetail,
    AddRestaurant,

} from '../screens';
import {common as commonHelper} from '../helpers';

const hotel = TabNavigator({
    HotelNormalList: {
        screen: HotelList
    },
    HotelMapList: {
        screen: HotelList
    },
});

const restaurant = TabNavigator({
    RestaurantNormalList: {
        screen: RestaurantList
    },
    RestaurantMapList: {
        screen: RestaurantMap
    },
});


export default StackNavigator({
    Loading: {
        screen: AddHotel
    },
    Tutorial: {
        screen: Tutorial
    },
    TabNav: {
        screen: TabNavigator({
            Home: {
                screen: Home,
                navigationOptions: ({ navigation }) => ({
                    tabBarVisible: commonHelper.isLogin(),
                })
            },
            Hotel: {
                screen: hotel
            },
            Restaurant: {
                screen: restaurant
            },
            Settings: {
                screen: RestaurantList
            }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: {
                // activeTintColor: '#e91e63',
                tabBarVisible: true,
            },
        }),
    },
    Login: {
        screen: Login,
    },
    Register: {
        screen: Register,
    },

});
