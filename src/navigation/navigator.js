import {StackNavigator, TabNavigator} from 'react-navigation';
import {
    Login,
    Register,
    Settings,
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
import MyServices from "../screens/MyServices";

const hotel = TabNavigator({
    HotelNormalList: {
        screen: HotelList
    },
    HotelMapList: {
        screen: HotelMap
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
        screen: HotelList
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
            MyFavorite: {
                screen: MyServices
            },
            MyService: {
                screen: MyServices
            },
            Settings: {
                screen: Settings
            }
        }, {
            tabBarPosition: 'bottom',
            animationEnabled: true,
            tabBarOptions: {
                // activeTintColor: '#e91e63',
                tabBarVisible: true,
            },
            lazyLoad: true,
        }),
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
        screen: hotel,
    },
    Restaurant: {
        screen: restaurant
    },


}, {
    lazyLoad: true,
});
